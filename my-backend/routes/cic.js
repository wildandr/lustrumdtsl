const express = require("express");
const router = express.Router();
const { QueryTypes } = require("sequelize");
const sequelize = require("../config/database");
const authenticateToken = require("../middleware/authenticateToken");

router.get("/teams/cic", authenticateToken, async (req, res) => {
    try {
        const eventId = 4;

        const teams = await sequelize.query(
            `SELECT * FROM teams WHERE event_id = :eventId`,
            {
                replacements: { eventId },
                type: QueryTypes.SELECT,
            }
        );

        if (!teams.length) {
            return res
                .status(404)
                .json({ message: "No teams found for this event" });
        }

        const result = await Promise.all(
            teams.map(async (team) => {
                const members = await sequelize.query(
                    `SELECT * FROM Members WHERE team_id = :teamId ORDER BY is_leader DESC`,
                    {
                        replacements: { teamId: team.team_id },
                        type: QueryTypes.SELECT,
                    }
                );

                if (!members.length) {
                    return res
                        .status(404)
                        .json({ message: "No members found for this team" });
                }

                const leader = members.find((member) => member.is_leader === 1);
                const memberList = members.filter(
                    (member) => member.is_leader === 0
                );

                return {
                    team: {
                        team_name: team.team_name,
                        institution_name: team.institution_name,
                        payment_proof: team.payment_proof,
                    },
                    leader,
                    members: memberList,
                };
            })
        );

        res.json(result);
    } catch (error) {
        res.status(500).json({
            message: "An error occurred",
            error: error.message,
        });
    }
});

router.post("/teams/cic/new", authenticateToken, async (req, res) => {
    try {
        const { team, leader, members } = req.body;

        await sequelize.query(
            `INSERT INTO teams (team_name, institution_name, payment_proof, event_id, user_id) VALUES (:team_name, :institution_name, :payment_proof, :event_id, :user_id)`,
            {
                replacements: {
                    team_name: team.team_name,
                    institution_name: team.institution_name,
                    payment_proof: team.payment_proof,
                    event_id: 4,
                    user_id: 1,
                }, // TODO: ganti user_id dengan user yang sedang login
                type: QueryTypes.INSERT,
            }
        );

        const [teamResult] = await sequelize.query(
            `SELECT LAST_INSERT_ID() as team_id`,
            { type: QueryTypes.SELECT }
        );

        await sequelize.query(
            `INSERT INTO members (team_id, full_name, department, batch, phone_number, line_id, email, ktm, active_student_letter, photo, twibbon_and_poster_link, is_leader) VALUES (:teamId, :full_name, :department, :batch, :phone_number, :line_id, :email, :ktm, :active_student_letter, :photo, :twibbon_and_poster_link, :is_leader)`,
            {
                replacements: {
                    teamId: teamResult.team_id,
                    ...leader,
                    is_leader: 1,
                },
                type: QueryTypes.INSERT,
            }
        );

        await Promise.all(
            members.map(async (member) => {
                await sequelize.query(
                    `INSERT INTO members (team_id, full_name, department, batch, phone_number, line_id, email, ktm, active_student_letter, photo, twibbon_and_poster_link, is_leader) VALUES (:teamId, :full_name, :department, :batch, :phone_number, :line_id, :email, :ktm, :active_student_letter, :photo, :twibbon_and_poster_link, :is_leader)`,
                    {
                        replacements: {
                            teamId: teamResult.team_id,
                            ...member,
                            is_leader: 0,
                        },
                        type: QueryTypes.INSERT,
                    }
                );
            })
        );

        res.status(201).json({
            message: "Team and members created successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: "An error occurred",
            error: error.message,
        });
    }
});

module.exports = router;

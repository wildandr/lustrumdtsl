const express = require("express");
const router = express.Router();
const { QueryTypes } = require("sequelize");
const sequelize = require("../config/database");
const authenticateToken = require("../middleware/authenticateToken");

// Ambil semua teams di lomba FCEC
router.get("/teams/fcec", authenticateToken, async (req, res) => {
    try {
        const eventId = 1;

        const teams = await sequelize.query(
            `SELECT * FROM teams WHERE event_id = :eventId`,
            {
                replacements: { eventId },
                type: QueryTypes.SELECT,
            }
        );

        if (!teams.length) {
            return res.status(404).json({ message: "No teams found for FCEC" });
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

                const fcec = await sequelize.query(
                    `SELECT * FROM fcec WHERE team_id = :teamId`,
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
                    fcec,
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

// Ambil team di lomba FCEC berdasarkan teamId
router.get("/teams/fcec/:teamId", authenticateToken, async (req, res) => {
    try {
        const { teamId } = req.params;
        const eventId = 1;

        const team = await sequelize.query(
            `SELECT * FROM teams WHERE team_id = :teamId AND event_id = :eventId`,
            {
                replacements: { teamId, eventId },
                type: QueryTypes.SELECT,
            }
        );

        if (!team.length) {
            return res
                .status(404)
                .json({ message: "No team found for this id and event" });
        }

        const members = await sequelize.query(
            `SELECT * FROM Members WHERE team_id = :teamId ORDER BY is_leader DESC`,
            {
                replacements: { teamId },
                type: QueryTypes.SELECT,
            }
        );

        const fcec = await sequelize.query(
            `SELECT * FROM fcec WHERE team_id = :teamId`,
            {
                replacements: { teamId },
                type: QueryTypes.SELECT,
            }
        );

        if (!members.length) {
            return res
                .status(404)
                .json({ message: "No members found for this team" });
        }

        const leader = members.find((member) => member.is_leader === 1);
        const memberList = members.filter((member) => member.is_leader === 0);

        const result = {
            team: {
                team_name: team[0].team_name,
                institution_name: team[0].institution_name,
                payment_proof: team[0].payment_proof,
            },
            leader,
            members: memberList,
            fcec,
        };

        res.json(result);
    } catch (error) {
        res.status(500).json({
            message: "An error occurred",
            error: error.message,
        });
    }
});

// Tambah team di lomba FCEC
router.post("/teams/fcec/new", authenticateToken, async (req, res) => {
    const { team, leader, members, fcec } = req.body;
    const eventId = 1;
    const userId = 1; // ToDo: get userId

    try {
        const [teamId] = await sequelize.query(
            `INSERT INTO teams (team_name, institution_name, payment_proof, event_id, user_id) VALUES (:team_name, :institution_name, :payment_proof, :eventId, :userId)`,
            {
                replacements: { ...team, eventId, userId },
                type: QueryTypes.INSERT,
            }
        );

        await sequelize.query(
            `INSERT INTO Members (team_id, full_name, department, batch, phone_number, line_id, email, ktm, active_student_letter, photo, twibbon_and_poster_link, is_leader, nim) VALUES (:team_id, :full_name, :department, :batch, :phone_number, :line_id, :email, :ktm, :active_student_letter, :photo, :twibbon_and_poster_link, :is_leader, :nim)`,
            {
                replacements: { ...leader, team_id: teamId },
                type: QueryTypes.INSERT,
            }
        );

        for (const member of members) {
            await sequelize.query(
                `INSERT INTO Members (team_id, full_name, department, batch, phone_number, line_id, email, ktm, active_student_letter, photo, twibbon_and_poster_link, is_leader, nim) VALUES (:team_id, :full_name, :department, :batch, :phone_number, :line_id, :email, :ktm, :active_student_letter, :photo, :twibbon_and_poster_link, :is_leader, :nim)`,
                {
                    replacements: { ...member, team_id: teamId },
                    type: QueryTypes.INSERT,
                }
            );
        }

        await sequelize.query(
            `INSERT INTO fcec (team_id, originality_statement, abstract_title, abstract_file, abstract_video_link) VALUES (:team_id, :originality_statement, :abstract_title, :abstract_file, :abstract_video_link)`,
            {
                replacements: { ...fcec[0], team_id: teamId },
                type: QueryTypes.INSERT,
            }
        );

        res.status(201).json({ message: "Team created successfully" });
    } catch (error) {
        res.status(500).json({
            message: "An error occurred",
            error: error.message,
        });
    }
});

module.exports = router;

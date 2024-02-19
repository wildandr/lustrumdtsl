const express = require("express");
const router = express.Router();
const { QueryTypes } = require("sequelize");
const sequelize = require("../config/database");
const authenticateToken = require("../middleware/authenticateToken");
const Team = require("../models/team");
const Member = require("../models/member");

// Ambil semua teams di lomba CIC
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
            return res.status(404).json({ message: "No teams found for CIC" });
        }

        const result = await Promise.all(
            teams.map(async (team) => {
                const members = await sequelize.query(
                    `SELECT * FROM members WHERE team_id = :teamId ORDER BY is_leader DESC`,
                    {
                        replacements: { teamId: team.team_id },
                        type: QueryTypes.SELECT,
                    }
                );

                if (!members.length) {
                    return {
                        team: {
                            team_name: team.team_name,
                            institution_name: team.institution_name,
                            payment_proof: team.payment_proof,
                        },
                        error: "No members found for this team",
                    };
                }

                const leader = members.find((member) => member.is_leader === 1);
                const memberList = members.filter(
                    (member) => member.is_leader === 0
                );

                return {
                    team,
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

// Ambil team tertentu di lomba CIC
router.get("/teams/cic/:teamId", authenticateToken, async (req, res) => {
    try {
        const { teamId } = req.params;
        const eventId = 4;

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
            `SELECT * FROM members WHERE team_id = :teamId ORDER BY is_leader DESC`,
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
            team,
            leader,
            members: memberList,
        };

        res.json(result);
    } catch (error) {
        res.status(500).json({
            message: "An error occurred",
            error: error.message,
        });
    }
});

// Buat team baru di lomba CIC
router.post("/teams/cic/new", authenticateToken, async (req, res) => {
    try {
        const { team, leader, members } = req.body;

        await sequelize.query(
            `INSERT INTO teams (team_name, institution_name, payment_proof, event_id, user_id, email) VALUES (:team_name, :institution_name, :payment_proof, :event_id, :user_id, :email)`,
            {
                replacements: {
                    team_name: team.team_name,
                    institution_name: team.institution_name,
                    payment_proof: team.payment_proof,
                    event_id: 4,
                    user_id: team.user_id,
                    email: team.email,
                },
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

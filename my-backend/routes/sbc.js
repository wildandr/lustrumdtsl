const express = require("express");
const router = express.Router();
const { QueryTypes } = require("sequelize");
const sequelize = require("../config/database");
const authenticateToken = require("../middleware/authenticateToken");

// Ambil semua teams di lomba SBC
router.get("/teams/sbc", authenticateToken, async (req, res) => {
    try {
        const eventId = 3;

        const event = await sequelize.query(
            `SELECT event_name FROM events WHERE event_id = :eventId`,
            {
                replacements: { eventId },
                type: QueryTypes.SELECT,
            }
        );

        const teams = await sequelize.query(
            `SELECT * FROM teams WHERE event_id = :eventId`,
            {
                replacements: { eventId },
                type: QueryTypes.SELECT,
            }
        );

        if (!teams.length) {
            return res.status(404).json({ message: "No teams found for SBC" });
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

                const dosbim = await sequelize.query(
                    `SELECT * FROM dosbim WHERE team_id = :teamId`,
                    {
                        replacements: { teamId: team.team_id },
                        type: QueryTypes.SELECT,
                    }
                );

                const sbc = await sequelize.query(
                    `SELECT * FROM sbc WHERE team_id = :teamId`,
                    {
                        replacements: { teamId: team.team_id },
                        type: QueryTypes.SELECT,
                    }
                );

                const leader = members.find((member) => member.is_leader === 1);
                const memberList = members.filter(
                    (member) => member.is_leader === 0
                );

                return {
                    team,
                    leader,
                    members: memberList,
                    dosbim,
                    sbc,
                    event: event[0].event_name,
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

// Ambil team di lomba SBC berdasarkan teamId
router.get("/teams/sbc/:teamId", authenticateToken, async (req, res) => {
    try {
        const { teamId } = req.params;
        const eventId = 3;

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

        const dosbim = await sequelize.query(
            `SELECT * FROM dosbim WHERE team_id = :teamId`,
            {
                replacements: { teamId },
                type: QueryTypes.SELECT,
            }
        );

        const sbc = await sequelize.query(
            `SELECT * FROM sbc WHERE team_id = :teamId`,
            {
                replacements: { teamId },
                type: QueryTypes.SELECT,
            }
        );

        const leader = members.find((member) => member.is_leader === 1);
        const memberList = members.filter((member) => member.is_leader === 0);

        const result = {
            team,
            leader,
            members: memberList,
            dosbim,
            sbc,
        };

        res.json(result);
    } catch (error) {
        res.status(500).json({
            message: "An error occurred",
            error: error.message,
        });
    }
});

// Buat team baru di lomba SBC
router.post("/teams/sbc/new", authenticateToken, async (req, res) => {
    try {
        const { team, leader, members, dosbim, sbc } = req.body;

        const createdTeam = await sequelize.query(
            `INSERT INTO teams (team_name, institution_name, payment_proof, user_id, event_id) VALUES (:team_name, :institution_name, :payment_proof, 1, 3)`,
            {
                replacements: {
                    team_name: team.team_name,
                    institution_name: team.institution_name,
                    payment_proof: team.payment_proof,
                },
                type: QueryTypes.INSERT,
            }
        );

        const teamId = createdTeam[0];

        const createdLeader = await sequelize.query(
            `INSERT INTO members (team_id, full_name, batch, phone_number, line_id, email, ktm, active_student_letter, photo, twibbon_and_poster_link, is_leader, nim) VALUES (:team_id, :full_name, :batch, :phone_number, :line_id, :email, :ktm, :active_student_letter, :photo, :twibbon_and_poster_link, 1, :nim)`,
            {
                replacements: {
                    ...leader,
                    team_id: teamId,
                },
                type: QueryTypes.INSERT,
            }
        );

        const createdMembers = await Promise.all(
            members.map((member) =>
                sequelize.query(
                    `INSERT INTO members (team_id, full_name, batch, phone_number, line_id, email, ktm, active_student_letter, photo, twibbon_and_poster_link, is_leader, nim) VALUES (:team_id, :full_name, :batch, :phone_number, :line_id, :email, :ktm, :active_student_letter, :photo, :twibbon_and_poster_link, 0, :nim)`,
                    {
                        replacements: {
                            ...member,
                            team_id: teamId,
                        },
                        type: QueryTypes.INSERT,
                    }
                )
            )
        );

        const createdDosbim = await sequelize.query(
            `INSERT INTO dosbim ( team_id, full_name, nip, email, phone_number, photo) VALUES (:team_id, :full_name, :nip, :email, :phone_number, :photo)`,
            {
                replacements: {
                    ...dosbim[0],
                    team_id: teamId,
                },
                type: QueryTypes.INSERT,
            }
        );

        const createdSbc = await sequelize.query(
            `INSERT INTO sbc (team_id, bridge_name) VALUES (:team_id, :bridge_name)`,
            {
                replacements: {
                    ...sbc[0],
                    team_id: teamId,
                },
                type: QueryTypes.INSERT,
            }
        );

        res.status(201).json({
            message: "Team created successfully",
            team: createdTeam,
            leader: createdLeader,
            members: createdMembers,
            dosbim: createdDosbim,
            sbc: createdSbc,
        });
    } catch (error) {
        res.status(500).json({
            message: "An error occurred",
            error: error.message,
        });
    }
});

module.exports = router;

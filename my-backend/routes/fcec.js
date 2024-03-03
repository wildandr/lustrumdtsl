const express = require("express");
const router = express.Router();
const { QueryTypes } = require("sequelize");
const sequelize = require("../config/database");
const authenticateToken = require("../middleware/authenticateToken");

// Ambil semua teams di lomba FCEC
router.get("/api/teams/fcec", authenticateToken, async (req, res) => {
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
                    `SELECT * FROM members WHERE team_id = :teamId ORDER BY is_leader DESC`,
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

                const leader = members.find((member) => member.is_leader === 1);
                const memberList = members.filter(
                    (member) => member.is_leader === 0
                );

                return {
                    team,
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
router.get("/api/teams/fcec/:teamId", authenticateToken, async (req, res) => {
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
            `SELECT * FROM members WHERE team_id = :teamId ORDER BY is_leader DESC`,
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

        const leader = members.find((member) => member.is_leader === 1);
        const memberList = members.filter((member) => member.is_leader === 0);

        const result = {
            team,
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
router.post("/api/teams/fcec/new", authenticateToken, async (req, res) => {
    const { team, leader, members, fcec } = req.body;
    const eventId = 1;
    const userId = team.user_id; // get userId from team

    try {
        const [teamId] = await sequelize.query(
            `INSERT INTO teams (team_name, institution_name, payment_proof, event_id, user_id) VALUES (:team_name, :institution_name, :payment_proof, :eventId, :userId)`,
            {
                replacements: { ...team, eventId, userId },
                type: QueryTypes.INSERT,
            }
        );

        await sequelize.query(
            `INSERT INTO members (team_id, full_name, phone_number, line_id, email, ktm, active_student_letter, photo, twibbon_and_poster_link, is_leader) VALUES (:team_id, :full_name, :phone_number, :line_id, :email, :ktm, :active_student_letter, :photo, :twibbon_and_poster_link, :is_leader)`,
            {
                replacements: { ...leader, team_id: teamId },
                type: QueryTypes.INSERT,
            }
        );

        for (const member of members) {
            await sequelize.query(
                `INSERT INTO members (team_id, full_name, phone_number, line_id, email, ktm, active_student_letter, photo, twibbon_and_poster_link, is_leader) VALUES (:team_id, :full_name, :phone_number, :line_id, :email, :ktm, :active_student_letter, :photo, :twibbon_and_poster_link, :is_leader)`,
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

router.delete(
    "/api/teams/fcec/delete/:teamId",
    authenticateToken,
    async (req, res) => {
        const teamId = req.params.teamId;

        try {
            // Delete from fcec table
            await sequelize.query(`DELETE FROM fcec WHERE team_id = :team_id`, {
                replacements: { team_id: teamId },
                type: QueryTypes.DELETE,
            });

            // Delete from members table
            await sequelize.query(
                `DELETE FROM members WHERE team_id = :team_id`,
                {
                    replacements: { team_id: teamId },
                    type: QueryTypes.DELETE,
                }
            );

            // Delete from teams table
            await sequelize.query(
                `DELETE FROM teams WHERE team_id = :team_id`,
                {
                    replacements: { team_id: teamId },
                    type: QueryTypes.DELETE,
                }
            );

            res.status(200).json({
                message: "Team and related data have been deleted.",
            });
        } catch (error) {
            res.status(500).json({
                message: "An error occurred",
                error: error.message,
            });
        }
    }
);

router.get("/api/fcec-participant", authenticateToken, async (req, res) => {
    try {
        const members = await sequelize.query(
            `
  SELECT 
    members.full_name, teams.team_name, fcec.abstract_title, teams.institution_name, members.department, members.batch, members.nim, members.semester, members.phone_number, members.line_id, members.email, teams.email AS team_email, members.is_leader, members.twibbon_and_poster_link, fcec.abstract_video_link, teams.isVerified, teams.isRejected, teams.rejectMessage, fcec.originality_statement, fcec.abstract_file, members.ktm, members.photo, members.active_student_letter, teams.payment_proof, teams.voucher, teams.team_id
  FROM 
    teams
  INNER JOIN
    members
  ON
    teams.team_id = members.team_id
  INNER JOIN
    fcec
  ON
    teams.team_id = fcec.team_id
  WHERE 
    teams.event_id = 1
`,
            {
                type: QueryTypes.SELECT,
            }
        );

        if (members.length === 0) {
            return res.status(404).json({
                status: "error",
                message: "No members found",
            });
        }

        const modifiedMembers = members.map((member) => {
            const {
                voucher,
                active_student_letter,
                ktm,
                photo,
                abstract_file,
                originality_statement,
                team_name,
                team_id,
                ...otherData
            } = member;
            return {
                data: { ...otherData, team_name, team_id },
                download: {
                    voucher,
                    active_student_letter,
                    ktm,
                    photo,
                    abstract_file,
                    originality_statement,
                },
            };
        });

        res.status(200).json({
            status: "success",
            members: modifiedMembers,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: "error",
            message: "An error occurred while retrieving the members",
        });
    }
});

module.exports = router;

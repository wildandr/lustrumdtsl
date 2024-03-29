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
                    `SELECT * FROM members WHERE team_id = :teamId ORDER BY is_leader DESC`,
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
            `SELECT * FROM members WHERE team_id = :teamId ORDER BY is_leader DESC`,
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
        const user_id = team.user_id; // get user_id from team object

        const createdTeam = await sequelize.query(
            `INSERT INTO teams (team_name, institution_name, payment_proof, user_id, event_id, voucher) VALUES (:team_name, :institution_name, :payment_proof, :user_id, 3, :voucher)`,
            {
                replacements: {
                    team_name: team.team_name,
                    institution_name: team.institution_name,
                    payment_proof: team.payment_proof,
                    user_id: user_id,
                    voucher: team.voucher || null,
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

        const createdmembers = await Promise.all(
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
            members: createdmembers,
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

router.delete(
    "/teams/sbc/delete/:teamId",
    authenticateToken,
    async (req, res) => {
        try {
            const teamId = req.params.teamId;

            await sequelize.query(
                `DELETE FROM dosbim WHERE team_id = :team_id`,
                {
                    replacements: { team_id: teamId },
                    type: QueryTypes.DELETE,
                }
            );

            await sequelize.query(`DELETE FROM sbc WHERE team_id = :team_id`, {
                replacements: { team_id: teamId },
                type: QueryTypes.DELETE,
            });

            await sequelize.query(
                `DELETE FROM members WHERE team_id = :team_id`,
                {
                    replacements: { team_id: teamId },
                    type: QueryTypes.DELETE,
                }
            );

            await sequelize.query(
                `DELETE FROM teams WHERE team_id = :team_id`,
                {
                    replacements: { team_id: teamId },
                    type: QueryTypes.DELETE,
                }
            );

            res.status(200).json({
                message: "All related data has been deleted.",
            });
        } catch (error) {
            res.status(500).json({
                message: "An error occurred",
                error: error.message,
            });
        }
    }
);

router.get("/sbc-participant", authenticateToken, async (req, res) => {
    try {
        const participants = await sequelize.query(
            `
  SELECT 
    members.*, teams.*, sbc.bridge_name, dosbim.advisor_id AS dosbim_advisor_id, dosbim.team_id AS dosbim_team_id, dosbim.full_name AS dosbim_full_name, dosbim.nip AS dosbim_nip, dosbim.email AS dosbim_email, dosbim.phone_number AS dosbim_phone_number, dosbim.photo AS dosbim_photo
  FROM 
    members
  INNER JOIN
    teams
  ON
    members.team_id = teams.team_id
  INNER JOIN
    sbc
  ON
    teams.team_id = sbc.team_id
  INNER JOIN
    dosbim
  ON
    teams.team_id = dosbim.team_id
  WHERE 
    teams.event_id = 3
`,
            {
                type: QueryTypes.SELECT,
            }
        );

        if (participants.length === 0) {
            return res.status(404).json({
                status: "error",
                message: "No participants found",
            });
        }

        const modifiedParticipants = participants.map((participant) => {
            const {
                dosbim_advisor_id,
                dosbim_team_id,
                dosbim_full_name,
                dosbim_nip,
                dosbim_email,
                dosbim_phone_number,
                dosbim_photo,
                ktm,
                active_student_letter,
                photo,
                payment_proof,
                voucher,
                ...otherData
            } = participant;
            return {
                ...otherData,
                dosbim: {
                    advisor_id: dosbim_advisor_id,
                    team_id: dosbim_team_id,
                    full_name: dosbim_full_name,
                    nip: dosbim_nip,
                    email: dosbim_email,
                    phone_number: dosbim_phone_number,
                    photo: dosbim_photo,
                },
                download: {
                    ktm,
                    active_student_letter,
                    photo,
                    payment_proof,
                    voucher,
                },
            };
        });

        res.status(200).json({
            status: "success",
            participants: modifiedParticipants,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: "error",
            message: "An error occurred while retrieving the participants",
        });
    }
});
module.exports = router;

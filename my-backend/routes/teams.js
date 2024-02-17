const express = require("express");
const router = express.Router();
const { QueryTypes } = require("sequelize");
const sequelize = require("../config/database");
const authenticateToken = require("../middleware/authenticateToken");
const { Team } = require("../models/team");

// Ambil semua teams
router.get("/teams", authenticateToken, async (req, res) => {
    try {
        const teams = await sequelize.query(`SELECT * FROM teams`, {
            type: QueryTypes.SELECT,
        });

        if (!teams.length) {
            return res.status(404).json({ message: "Tidak ada tim ditemukan" });
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

// Verifikasi team
router.put("/teams/:team_id/verify", async (req, res) => {
    try {
        const team = await sequelize.query(
            "SELECT * FROM Teams WHERE team_id = :team_id",
            {
                replacements: { team_id: req.params.team_id },
                type: QueryTypes.SELECT,
            }
        );

        if (!team || team.length === 0) {
            return res.status(404).json({
                status: "error",
                message: "Tim tidak ditemukan",
            });
        }

        await sequelize.query(
            "UPDATE Teams SET isVerified = true WHERE team_id = :team_id",
            {
                replacements: { team_id: req.params.team_id },
                type: QueryTypes.UPDATE,
            }
        );

        res.status(200).json({
            status: "success",
            message: "Tim Berhasil Diverifikasi",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: "error",
            message: "Kesalahan saat memverifikasi tim",
        });
    }
});

module.exports = router;

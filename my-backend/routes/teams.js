const express = require("express");
const router = express.Router();
const { QueryTypes } = require("sequelize");
const sequelize = require("../config/database");
const authenticateToken = require("../middleware/authenticateToken");

// Ambil semua teams
router.get("/teams", authenticateToken, async (req, res) => {
    try {
        const teams = await sequelize.query(`SELECT * FROM teams`, {
            type: QueryTypes.SELECT,
        });

        if (!teams.length) {
            return res.status(404).json({ message: "No teams found" });
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

module.exports = router;

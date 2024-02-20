const express = require("express");
const Craft = require("../models/craft.js");
const authenticateToken = require("../middleware/authenticateToken.js");
const router = express.Router();
const { ValidationError } = require("sequelize");

// Ambil semua data peserta craft
router.get("/crafts", authenticateToken, async (req, res) => {
    try {
        const crafts = await Craft.findAll();
        res.json(crafts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Ambil data peserta craft berdasarkan id
router.get(
    "/crafts/participant/:participant_id",
    authenticateToken,
    async (req, res) => {
        try {
            const craft = await Craft.findOne({
                where: { participant_id: req.params.participant_id },
            });
            if (craft === null) {
                return res
                    .status(404)
                    .json({ message: "Data peserta craft tidak ditemukan" });
            }
            res.json(craft);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
);

// Ambil data peserta craft berdasarkan id pengguna
router.get("/crafts/user/:user_id", authenticateToken, async (req, res) => {
    try {
        const craft = await Craft.findOne({
            where: { user_id: req.params.user_id },
        });
        if (craft === null) {
            return res.status(404).json({
                message: "Akun ini tidak memiliki riwayat pendaftaran CRAFT",
            });
        }
        res.json(craft);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Buat data peserta craft baru
router.post("/crafts/register", authenticateToken, async (req, res) => {
    try {
        const craft = await Craft.create({
            full_name: req.body.full_name,
            institution_name: req.body.institution_name,
            user_id: req.body.user_id,
            activity_choice: req.body.activity_choice,
            whatsapp_number: req.body.whatsapp_number,
            isMahasiswaDTSL: req.body.isMahasiswaDTSL,
            ktm: req.body.ktm,
            payment_proof: req.body.payment_proof,
            email: req.body.email,
            isVerified: req.body.isVerified,
        });
        res.status(201).json({
            message: "Berhasil menambahkan peserta craft baru",
            data: craft,
        });
    } catch (err) {
        console.error(err);
        if (err instanceof ValidationError) {
            res.status(400).json({ message: err.message });
        } else {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
});

// Update isVerified field to true
router.put(
    "/crafts/verify/:participant_id",
    authenticateToken,
    async (req, res) => {
        try {
            const craft = await Craft.findOne({
                where: { participant_id: req.params.participant_id },
            });
            if (!craft) {
                return res
                    .status(404)
                    .json({ message: "Participant not found" });
            }
            craft.isVerified = true;
            await craft.save();
            res.json({ message: "Participant has been verified", data: craft });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
);

module.exports = router;

const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const sequelize = require("../config/database");
const Sequelize = require("sequelize");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const authenticateToken = require("../middleware/authenticateToken");

// Ambil semua user
router.get("/user", authenticateToken, async (req, res) => {
    try {
        const users = await sequelize.query("SELECT * FROM users", {
            type: sequelize.QueryTypes.SELECT,
        });
        if (users.length === 0) {
            res.status(404).json({ message: "No users found" });
        } else {
            res.json(users);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "An error occurred" });
    }
});

// Ambil user berdasarkan id
router.get("/user/:id", authenticateToken, async (req, res) => {
    try {
        const id = req.params.id;
        const user = await sequelize.query("SELECT * FROM users WHERE id = ?", {
            replacements: [id],
            type: sequelize.QueryTypes.SELECT,
        });
        if (user.length === 0) {
            res.status(404).json({
                message: "No user found with the provided id",
            });
        } else {
            res.json(user);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "An error occurred" });
    }
});

// Tambah user baru
router.post("/user/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({
                message: "Username, email, and password are required",
            });
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const currentTimestamp = new Date()
            .toISOString()
            .slice(0, 19)
            .replace("T", " ");

        await sequelize.query(
            "INSERT INTO users (username, email, password, createdAt) VALUES (?, ?, ?, ?)",
            {
                replacements: [
                    username,
                    email,
                    hashedPassword,
                    currentTimestamp,
                ],
                type: Sequelize.QueryTypes.INSERT,
            }
        );

        const users = await sequelize.query(
            "SELECT * FROM users WHERE username = ? AND email = ?",
            {
                replacements: [username, email],
                type: Sequelize.QueryTypes.SELECT,
            }
        );

        const newUser = users[0];

        delete newUser.password;

        res.status(201).json({
            message: "User created successfully",
            user: newUser,
        });
    } catch (err) {
        console.error(err);
        if (err.name === "SequelizeUniqueConstraintError") {
            res.status(409).json({
                message: "Username or email already exists",
            });
        } else {
            res.status(500).json({ message: "An error occurred" });
        }
    }
});

// Login user
router.post("/user/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({
                message: "Username/email and password are required",
            });
        }

        const users = await sequelize.query(
            "SELECT * FROM users WHERE username = ? OR email = ?",
            {
                replacements: [username, username],
                type: Sequelize.QueryTypes.SELECT,
            }
        );

        if (users.length === 0) {
            return res.status(404).json({
                message: "No user found with the provided username/email",
            });
        }

        const user = users[0];

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(401).json({
                message: "Password is incorrect",
            });
        }

        const token = jwt.sign({ id: user.id }, "your-secret-key", {
            expiresIn: "60d",
        });

        delete user.password;

        res.json({
            message: "User logged in successfully",
            user: user,
            token: token,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "An error occurred" });
    }
});

module.exports = router;

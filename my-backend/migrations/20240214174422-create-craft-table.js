"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("craft", {
            participant_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            full_name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            user_id: {
                type: Sequelize.INTEGER,
                unique: {
                    args: true,
                    msg: "Pengguna ini sudah terdaftar di CRAFT",
                },
                references: {
                    model: "users",
                    key: "user_id",
                },
                onUpdate: "CASCADE",
                onDelete: "SET NULL",
            },
            institution_name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            activity_choice: {
                type: Sequelize.ENUM("offline", "online"),
                allowNull: false,
            },
            whatsapp_number: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            isMahasiswaDTSL: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
            ktm: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            payment_proof: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("craft");
    },
};

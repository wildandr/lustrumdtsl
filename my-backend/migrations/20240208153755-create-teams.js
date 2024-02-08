"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("teams", {
            team_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            event_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "events",
                    key: "event_id",
                },
                allowNull: false,
            },
            team_name: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            institution_name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            payment_proof: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            voucher: {
                type: Sequelize.STRING,
                allowNull: true,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("teams");
    },
};

"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("sbc", {
            team_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                references: {
                    model: "teams",
                    key: "team_id",
                },
                allowNull: false,
            },
            bridge_name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("SBC_Specifics");
    },
};

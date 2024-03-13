"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn("craft", "bukti_follow_cia", {
            type: Sequelize.STRING,
            allowNull: true,
        });
        await queryInterface.addColumn("craft", "bukti_follow_pktsl", {
            type: Sequelize.STRING,
            allowNull: true,
        });
        await queryInterface.addColumn("craft", "bukti_story", {
            type: Sequelize.STRING,
            allowNull: true,
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn("craft", "bukti_follow_cia");
        await queryInterface.removeColumn("craft", "bukti_follow_pktsl");
        await queryInterface.removeColumn("craft", "bukti_story");
    },
};

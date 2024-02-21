"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn("craft", "isRejected", {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
            allowNull: false,
        });

        await queryInterface.addColumn("craft", "rejectMessage", {
            type: Sequelize.TEXT,
            allowNull: true,
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn("craft", "isRejected");
        await queryInterface.removeColumn("craft", "rejectMessage");
    },
};

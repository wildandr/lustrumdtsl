"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn("teams", "isVerified", {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn("teams", "isVerified");
    },
};

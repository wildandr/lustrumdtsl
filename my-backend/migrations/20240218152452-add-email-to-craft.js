"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn("craft", "email", {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn("craft", "email");
    },
};

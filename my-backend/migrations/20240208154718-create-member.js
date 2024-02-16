"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("members", {
            member_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            team_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "teams",
                    key: "team_id",
                },
                allowNull: false,
            },
            full_name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            department: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            batch: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            phone_number: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            line_id: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            ktm: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            active_student_letter: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            photo: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            twibbon_and_poster_link: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            is_leader: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("members");
    },
};

"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("fcec", {
            team_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                references: {
                    model: "teams",
                    key: "team_id",
                },
                allowNull: false,
            },
            originality_statement: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            active_student_letter: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            twibbon_post: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            abstract_title: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            abstract_file: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            abstract_video_link: {
                type: Sequelize.STRING,
                allowNull: false,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("FCEC_Specifics");
    },
};

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn("teams", "user_id", {
            type: Sequelize.INTEGER,
            references: {
                model: "users",
                key: "user_id",
            },
            allowNull: false,
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn("teams", "user_id");
    },
};

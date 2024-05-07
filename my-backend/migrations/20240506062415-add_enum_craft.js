module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.changeColumn("craft", "activity_choice", {
            type: Sequelize.ENUM(
                "offline2peserta",
                "offline3peserta",
                "offline5peserta"
            ),
        });
    },

    down: async (queryInterface, Sequelize) => {
        // Consider how to handle rollback, potentially to a more flexible type
        await queryInterface.changeColumn("craft", "activity_choice", {
            type: Sequelize.STRING,
        });
    },
};

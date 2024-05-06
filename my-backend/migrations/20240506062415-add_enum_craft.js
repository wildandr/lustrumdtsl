module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.changeColumn("craft", "activity_choice", {
            type: Sequelize.ENUM(
                "offline2peserta",
                "offline3peserta",
                "offline5peserta" /* existing enum values */
            ),
        });
    },

    down: async (queryInterface, Sequelize) => {
        // We won't be able to revert the migration because we don't know which ENUM values were added
    },
};

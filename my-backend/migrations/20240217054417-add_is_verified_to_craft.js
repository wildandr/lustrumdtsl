module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn("craft", "isVerified", {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn("craft", "isVerified");
    },
};

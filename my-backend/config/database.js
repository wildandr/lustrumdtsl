const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("lustrumdtsl", "test", "Makanmakan3x*", {
    host: "localhost",
    dialect: "mysql",
});

module.exports = sequelize;

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("lustrumdtsl", "root2", "Makanmakan3x*", {
    host: "localhost",
    dialect: "mysql",
});

module.exports = sequelize;

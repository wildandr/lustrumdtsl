const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("lustrumdtsl", "root2", "Makanmakan3x*", {
    host: "localhost",
    dialect: "mysql",
    logging: console.log,
});

module.exports = sequelize;

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("lustrumdtsl", "root", null, {
    host: "localhost",
    dialect: "mysql",
});

module.exports = sequelize;

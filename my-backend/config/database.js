const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("lustrumdtsl2", "root", null, {
    host: "localhost",
    dialect: "mysql",
});

module.exports = sequelize;

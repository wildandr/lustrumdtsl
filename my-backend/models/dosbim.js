const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Dosbim extends Model {}

Dosbim.init(
    {
        advisor_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        team_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            references: {
                model: "teams",
                key: "team_id",
            },
        },
        full_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nip: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    { sequelize, modelName: "dosbim", tableName: "dosbim" }
);

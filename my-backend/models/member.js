const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Member extends Model {}

Member.init(
    {
        member_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        team_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "teams",
                key: "team_id",
            },
        },
        full_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        department: DataTypes.STRING,
        batch: DataTypes.INTEGER,
        phone_number: DataTypes.INTEGER,
        line_id: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ktm: DataTypes.STRING,
        active_student_letter: DataTypes.STRING,
        photo: DataTypes.STRING,
        twibbon_and_poster_link: DataTypes.STRING,
        is_leader: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        nim: DataTypes.STRING,
    },
    { sequelize, modelName: "members", tableName: "members", timestamps: false }
);

module.exports = Member;

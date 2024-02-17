const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class FCEC extends Model {}

FCEC.init(
    {
        team_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: "teams",
                key: "team_id",
            },
            async validate(value) {
                const teamExists = await Team.findOne({
                    where: { team_id: value },
                });
                if (teamExists) {
                    throw new Error("Tim ini sudah terdaftar pada FCEC");
                }
            },
        },
        originality_statement: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        abstract_title: {
            type: DataTypes.STRING,
            allowNull: false,
            async validate(value) {
                const titleExists = await FCEC.findOne({
                    where: { abstract_title: value },
                });
                if (titleExists) {
                    throw new Error("Judul abstrak sudah ada");
                }
            },
        },
        abstract_file: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        abstract_video_link: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { sequelize, modelName: "FCEC", tableName: "fcec" }
);

module.exports = FCEC;

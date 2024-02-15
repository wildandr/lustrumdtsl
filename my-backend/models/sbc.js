const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class SBC extends Model {}

SBC.init(
    {
        team_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: "teams",
                key: "team_id",
            },
            allowNull: false,
            async validate(value) {
                const teamExists = await Team.findByPk(value);
                if (teamExists) {
                    throw new Error("Tim ini sudah terdaftar pada SBC");
                }
            },
        },
        bridge_name: {
            type: DataTypes.STRING,
            allowNull: false,
            async validate(value) {
                const bridgeExists = await SBC.findOne({
                    where: { bridge_name: value },
                });
                if (bridgeExists) {
                    throw new Error("Nama jembatan sudah ada");
                }
            },
        },
    },
    { sequelize, modelName: "SBC", tableName: "sbc" }
);

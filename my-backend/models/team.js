const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Team extends Model {}

Team.init(
    {
        team_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        event_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "events",
                key: "event_id",
            },
        },
        team_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        institution_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        voucher: DataTypes.STRING,
        payment_proof: {
            type: DataTypes.STRING,
            validate: {
                notNullIfSBCorCIC() {
                    if (
                        (this.event_id === 3 || this.event_id === 4) &&
                        !this.payment_proof
                    ) {
                        throw new Error(
                            "Bukti pembayaran harus diunggah untuk lomba ini"
                        );
                    }
                },
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "users",
                key: "user_id",
            },
        },
        isVerified: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    },
    { sequelize, modelName: "Team", tableName: "teams", timestamps: false }
);

module.exports = Team;

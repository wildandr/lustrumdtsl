const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Craft extends Model {}

Craft.init(
    {
        participant_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        full_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        instansi_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        activity_choice: {
            type: DataTypes.ENUM("offline", "online"),
            allowNull: false,
        },
        whatsapp_number: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        isMahasiswaDTSL: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        ktm: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        payment_proof: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    },
    {
        sequelize,
        modelName: "Craft",
        indexes: [
            {
                unique: true,
                fields: ["full_name", "instansi_name", "whatsapp_number"],
            },
        ],
    }
);

module.exports = Craft;

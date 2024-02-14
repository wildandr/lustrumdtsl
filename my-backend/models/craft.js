const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Craft extends Model {}

Craft.init(
    {
        participant_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: {
                args: true,
                msg: "Pengguna ini sudah terdaftar di CRAFT",
            },
            references: {
                model: "users",
                key: "user_id",
            },
        },
        full_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        institution_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        activity_choice: {
            type: DataTypes.ENUM("offline", "online"),
            allowNull: false,
        },
        whatsapp_number: {
            type: DataTypes.STRING,
            allowNull: false,
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
        },
    },
    {
        sequelize,
        modelName: "Craft",
        tableName: "craft",
        timestamps: true,
        hooks: {
            beforeValidate: (craft, options) => {
                if (craft.isMahasiswaDTSL && !craft.ktm) {
                    throw new Error("KTM is required for Mahasiswa DTSL");
                }
            },
        },
    }
);

module.exports = Craft;

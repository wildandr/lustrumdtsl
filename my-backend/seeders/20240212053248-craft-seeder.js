"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            "craft",
            [
                {
                    full_name: "Adi Prasetyo",
                    institution_name: "Universitas Diponegoro",
                    user_id: 1,
                    activity_choice: "offline",
                    whatsapp_number: "081234567890",
                    isMahasiswaDTSL: false,
                    payment_proof: "bukti1.jpg",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    full_name: "Bunga Sari",
                    institution_name: "Institut Pertanian Bogor",
                    user_id: 3,
                    activity_choice: "online",
                    whatsapp_number: "087654321098",
                    isMahasiswaDTSL: true,
                    ktm: "ktm2.jpg",
                    payment_proof: "bukti2.jpg",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    full_name: "Cahya Putra",
                    institution_name: "Universitas Airlangga",
                    user_id: 4,
                    activity_choice: "offline",
                    whatsapp_number: "081122334455",
                    isMahasiswaDTSL: false,
                    payment_proof: "bukti3.jpg",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    full_name: "Dewi Susanti",
                    institution_name: "Universitas Hasanuddin",
                    user_id: 6,
                    activity_choice: "online",
                    whatsapp_number: "085678901234",
                    isMahasiswaDTSL: true,
                    ktm: "ktm4.jpg",
                    payment_proof: "bukti4.jpg",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    full_name: "Edi Wibowo",
                    institution_name: "Politeknik Negeri Malang",
                    user_id: 7,
                    activity_choice: "offline",
                    whatsapp_number: "081234567890",
                    isMahasiswaDTSL: false,
                    payment_proof: "bukti5.jpg",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    full_name: "Fira Ananda",
                    institution_name: "Universitas Brawijaya",
                    user_id: 8,
                    activity_choice: "online",
                    whatsapp_number: "087654321098",
                    isMahasiswaDTSL: true,
                    ktm: "ktm6.jpg",
                    payment_proof: "bukti6.jpg",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete("craft", null, {});
    },
};

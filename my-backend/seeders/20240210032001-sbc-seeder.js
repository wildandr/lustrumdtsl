"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            "teams",
            [
                {
                    team_name: "Team Name",
                    institution_name: "Institution Name",
                    payment_proof: "Payment Proof",
                    event_id: 3,
                    user_id: 1, // TODO: Replace with actual user_id
                },
            ],
            {}
        );

        // Query for the inserted team
        const team = await queryInterface.sequelize.query(
            `SELECT * FROM \`teams\` WHERE team_name = 'Team Name'`,
            {
                type: queryInterface.sequelize.QueryTypes.SELECT,
            }
        );

        await queryInterface.bulkInsert(
            "sbc",
            [
                {
                    team_id: team[0].team_id,
                    bridge_name: "Bridge Name",
                },
            ],
            {}
        );

        await queryInterface.bulkInsert(
            "members",
            [
                {
                    team_id: team[0].team_id,
                    full_name: "Member 1 Full Name",
                    nim: "Member 1 NIM",
                    batch: "Member 1 batch",
                    email: "Member 1 Email",
                    phone_number: "Member 1 WhatsApp",
                    line_id: "Member 1 Line ID",
                    twibbon_and_poster_link: "Member 1 Twibbon Link",
                    ktm: "Member 1 KTM",
                    active_student_letter: "Member 1 Active Student Letter",
                    photo: "Member 1 Photo",
                    is_leader: true,
                },
                {
                    team_id: team[0].team_id,
                    full_name: "Member 2 Full Name",
                    nim: "Member 2 NIM",
                    batch: "Member 2 batch",
                    email: "Member 2 Email",
                    phone_number: "Member 2 WhatsApp",
                    line_id: "Member 2 Line ID",
                    twibbon_and_poster_link: "Member 2 Twibbon Link",
                    ktm: "Member 2 KTM",
                    active_student_letter: "Member 2 Active Student Letter",
                    photo: "Member 2 Photo",
                    is_leader: false,
                },
                {
                    team_id: team[0].team_id,
                    full_name: "Member 3 Full Name",
                    nim: "Member 3 NIM",
                    batch: "Member 3 batch",
                    email: "Member 3 Email",
                    phone_number: "Member 3 WhatsApp",
                    line_id: "Member 3 Line ID",
                    twibbon_and_poster_link: "Member 3 Twibbon Link",
                    ktm: "Member 3 KTM",
                    active_student_letter: "Member 3 Active Student Letter",
                    photo: "Member 3 Photo",
                    is_leader: false,
                },
            ],
            {}
        );

        await queryInterface.bulkInsert(
            "dosbim",
            [
                {
                    team_id: team[0].team_id,
                    full_name: "Advisor Full Name",
                    nip: "Advisor NIPA",
                    email: "Advisor Email",
                    phone_number: "Advisor WhatsApp",
                    photo: "Advisor Photo",
                },
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete("sbc", null, {});
        await queryInterface.bulkDelete("teams", null, {});
        await queryInterface.bulkDelete("members", null, {});
        await queryInterface.bulkDelete("dosbim", null, {});
    },
};

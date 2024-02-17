"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            "teams",
            [
                {
                    team_name: "CIC Finnovate",
                    event_id: 4,
                    institution_name: "Universitas Gadjah Mada",
                    payment_proof: "http://example.com/payment_proof.jpg",
                    user_id: 1,
                },
            ],
            {}
        );

        const team = await queryInterface.sequelize.query(
            `SELECT team_id from teams WHERE team_name = 'CIC Finnovate';`
        );

        if (!team || !team[0] || !team[0][0] || !team[0][0].team_id) {
            throw new Error("Team not found");
        }

        const teamId = parseInt(team[0][0].team_id, 10);

        return queryInterface.bulkInsert(
            "Members",
            [
                {
                    team_id: teamId,
                    full_name: "Wildan Dzaky",
                    department: "Department 1",
                    batch: "Batch 1",
                    phone_number: "1234567890",
                    line_id: "lineid1",
                    email: "leader1@example.com",
                    ktm: "http://example.com/ktm1.pdf",
                    active_student_letter:
                        "http://example.com/active_student_letter1.pdf",
                    photo: "http://example.com/photo1.jpg",
                    twibbon_and_poster_link:
                        "http://example.com/twibbon_and_poster1.jpg",
                    is_leader: 1,
                },
                {
                    team_id: teamId,
                    full_name: "Darriel Markerizal",
                    department: "Department 1",
                    batch: "Batch 1",
                    phone_number: "1234567891",
                    line_id: "lineid2",
                    email: "member1@example.com",
                    ktm: "http://example.com/ktm2.pdf",
                    active_student_letter:
                        "http://example.com/active_student_letter2.pdf",
                    photo: "http://example.com/photo2.jpg",
                    twibbon_and_poster_link:
                        "http://example.com/twibbon_and_poster2.jpg",
                    is_leader: 0,
                },
                {
                    team_id: teamId,
                    full_name: "Nawal Rizky Kautsar",
                    department: "Department 1",
                    batch: "Batch 1",
                    phone_number: "1234567892",
                    line_id: "lineid3",
                    email: "member2@example.com",
                    ktm: "http://example.com/ktm3.pdf",
                    active_student_letter:
                        "http://example.com/active_student_letter3.pdf",
                    photo: "http://example.com/photo3.jpg",
                    twibbon_and_poster_link:
                        "http://example.com/twibbon_and_poster3.jpg",
                    is_leader: 0,
                },
                {
                    team_id: teamId,
                    full_name: "Muhammad Rizky Aziz",
                    department: "Department 1",
                    batch: "Batch 1",
                    phone_number: "1234567893",
                    line_id: "lineid4",
                    email: "member3@example.com",
                    ktm: "http://example.com/ktm4.pdf",
                    active_student_letter:
                        "http://example.com/active_student_letter4.pdf",
                    photo: "http://example.com/photo4.jpg",
                    twibbon_and_poster_link:
                        "http://example.com/twibbon_and_poster4.jpg",
                    is_leader: 0,
                },
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete("members", null, {});
        return queryInterface.bulkDelete("teams", null, {});
    },
};

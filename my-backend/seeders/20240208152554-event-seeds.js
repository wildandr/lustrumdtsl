"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "events",
            [
                {
                    event_name: "FCEC",
                },
                {
                    event_name: "Craft",
                },
                {
                    event_name: "SBC",
                },
                {
                    event_name: "CIC",
                },
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Events", null, {});
    },
};

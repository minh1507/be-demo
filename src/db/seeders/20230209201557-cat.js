"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("cats", [
      {
        name: "cat1",
        age: 1,
      },
      {
        name: "cat2",
        age: 2,
      },
      {
        name: "cat3",
        age: 3,
      },
    ]);
    await queryInterface.bulkInsert("roles", [
      {
        name: "admin",
        note: "admin site",
      },
      {
        name: "user",
        note: "user site",
      },
    ]);
    await queryInterface.bulkInsert("users", [
      {
        roleId: 1,
        username: "duongdoican@gmail.com",
        password: "$2a$12$OQHHb/D9JAs6tyclVzPWMeSVkbcR2tSmmMq9VHaqnWm3C/UKPYyNm",
        accessToken: "",
        refreshToken: "",
        date: "2023-05-25"
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
     await queryInterface.bulkDelete('cats', null, {where: {name: "cat1"}});
     await queryInterface.bulkDelete('cats', null, {where: {name: "cat2"}});
     await queryInterface.bulkDelete('cats', null, {where: {name: "cat3"}});
  },
};

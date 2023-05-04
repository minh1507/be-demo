'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable("roles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: Sequelize.STRING,
      note: Sequelize.TEXT,
    });
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable("roles");
  },
};

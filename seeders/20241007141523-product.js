"use strict";

const product = require("../models/product");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          product_name: "Nike Air Jordan",
          product_stock: 1,
          product_price: 1000000,
          product_desc: "Lorem ipsum dolor sit amet",
          isActive: true,
          created_by: 1,
          updated_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_name: "Adidas Stan Smith",
          product_stock: 10,
          product_price: 5000000,
          product_desc: "Lorem ipsum dolor sit amet",
          isActive: true,
          created_by: 1,
          updated_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

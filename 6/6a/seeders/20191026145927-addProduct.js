'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Products', [
      {
        name: 'Latte',
        price: 10000,
        id_category: 1,
        id_cashier: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cake',
        price: 20000,
        id_category: 2,
        id_cashier: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Fried Rice',
        price: 13000,
        id_category: 2,
        id_cashier: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gudeg',
        price: 11000,
        id_category: 2,
        id_cashier: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ice Tea',
        price: 5000,
        id_category: 1,
        id_cashier: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gado-gado',
        price: 12000,
        id_category: 2,
        id_cashier: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Products', null, {});
  }
};

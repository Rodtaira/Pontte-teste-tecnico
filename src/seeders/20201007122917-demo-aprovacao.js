'use strict';
const { v4: uuidv4 } = require('uuid');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('Aprovacoes', [{
        id: uuidv4(),
        status: false,
        CriacoesID: '2ccf00c7-0fe8-4533-a624-a00326788e4e', 
        createdAt: new Date(), 
        updatedAt: new Date()
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

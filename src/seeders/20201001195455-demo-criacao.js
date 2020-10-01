'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Criacoes', [
       {
        id: uuidv4(),
        name: 'John Doe',
        email: 'john@doe.com', 
        cpf: '568.630.440-800', 
        loanValue: 20000, 
        monthlyIncome: 4000,
        birthDate: new Date(1977,8, 22), 
        maritalStatus: 'Single', 
        address: 'Mr John Smith 132, My Street, Kingston, New York 12401 United States', 
        createdAt: new Date(), 
        updatedAt: new Date()
     }
    ], {});
  
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

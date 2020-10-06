'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('UploadImages', [
       {
        id: '76044b04-cacb-494f-a736-acae26a45c48',
        documentoImage: 'http://127.0.0.1:3000/images/95766a60-0717-11eb-a994-ddbcd58cdebacnh-modelo.jpeg', 
        comprovanteRendaImage: 'http://127.0.0.1:3000/images/95766a60-0717-11eb-a994-ddbcd58cdebacomprovante-de-renda.jpeg',
        imovelImage: 'http://127.0.0.1:3000/images/95766a60-0717-11eb-a994-ddbcd58cdebaimovel.jpeg', 
        CriacaoID: '2ccf00c7-0fe8-4533-a624-a00326788e4e', 
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

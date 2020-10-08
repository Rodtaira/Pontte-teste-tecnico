'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UploadImages', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      documentoImage: {
        type: Sequelize.STRING,
        allowNull: false, 
        validate: {
          notNull: { msg: "Documento Obrigatório" },
        } 
      },
      comprovanteRendaImage: {
        type: Sequelize.STRING
      },
      imovelImage: {
        type: Sequelize.STRING
      },
      CriacoesID: {
        allowNull: false,
        type: Sequelize.UUID,
        references: { model: 'Criacoes', key: 'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('UploadImages')
  }
};
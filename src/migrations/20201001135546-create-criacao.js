'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Criacoes', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      name: {
        type: Sequelize.STRING, 
        allowNull: false, 
        validate: {
          notNull: { msg: "name is required" },
        }
      },
      email: {
        type: Sequelize.STRING, 
        allowNull: false, 
        validate: {
          notNull: { msg: "email is required" },
        }
      },
      cpf: {
        type: Sequelize.STRING, 
        allowNull: false, 
        validate: {
          notNull: { msg: "CPF is required" },
        }
      },
      loanValue: {
        type: Sequelize.INTEGER, 
        allowNull: false, 
        validate: {
          notNull: { msg: "Loan Value is required" },
        } 
      },
      monthlyIncome: {
        type: Sequelize.INTEGER
      },
      birthDate: {
        type: Sequelize.DATE
      },
      maritalStatus: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Criacoes');
  }
};
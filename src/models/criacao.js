module.exports = (sequelize, DataTypes) => {
  const Criacoes = sequelize.define('Criacoes', {
    id:
      { unique: true, 
        allowNull: false, 
        primaryKey: true,
        type: DataTypes.UUID
      }, 
    name: 
      {
        type: DataTypes.STRING, 
        allowNull:false
      },
    email: 
      {
        unique: true,  
        allowNull: false, 
        unique: true, 
        type: DataTypes.STRING
      },      
    cpf: 
      {
        unique: true, 
        type: DataTypes.STRING, 
        allowNull: false, 
      },
    loanValue: 
      {
        type: DataTypes.INTEGER, 
        allowNull: false
      },
    monthlyIncome: 
      {
        type: DataTypes.INTEGER
      },
    birthDate: 
      {
        type: DataTypes.DATE
      },
    maritalStatus: 
      {
        type: DataTypes.STRING
      },
    address: 
      {
        type: DataTypes.STRING
      }
  }, {});
  Criacoes.associate = function(models) {
    // associations can be defined here
  };
  return Criacoes;
};
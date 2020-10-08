module.exports = (sequelize, DataTypes) => {
  const Criacoes = sequelize.define('Criacoes', {
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
  }, {})
  Criacoes.associate = function(models) {
    Criacoes.hasOne(models.UploadImages, {
      foreignKey: 'CriacoesID'
    })
    Criacoes.hasOne(models.Aprovacoes, {
      foreignKey: 'CriacoesID'
    })
  }
  return Criacoes;
}
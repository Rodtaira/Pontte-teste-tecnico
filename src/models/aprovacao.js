
module.exports = (sequelize, DataTypes) => {
  const Aprovacoes = sequelize.define('Aprovacoes', {
    status: 
    {
      type: DataTypes.BOOLEAN, 
      allowNull:false
    },
    CriacoesID: {
      allowNull: false,
      type: DataTypes.UUID,
      references: { model: 'Criacoes', key: 'id'}
    }
  }, {})
  Aprovacoes.associate = function(models) {
    Aprovacoes.belongsTo(models.Criacoes,  {foreignKey: 'CriacoesID'})
  }
  return Aprovacoes
}
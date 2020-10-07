
module.exports = (sequelize, DataTypes) => {
  const Aprovacoes = sequelize.define('Aprovacoes', {
    id:
    { unique: true, 
      allowNull: false, 
      primaryKey: true,
      type: DataTypes.UUID
    }, 
    status: 
    {
      type: DataTypes.BOOLEAN, 
      allowNull:false
    },
    CriacaoID: {
      allowNull: false,
      type: DataTypes.UUID,
      references: { model: 'Criacoes', key: 'id'}
    }
  }, {})
  Aprovacoes.associate = function(models) {
    Aprovacoes.belongsTo(models.Criacoes)
  }
  return Aprovacoes
}
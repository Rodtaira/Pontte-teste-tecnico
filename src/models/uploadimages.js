
module.exports = (sequelize, DataTypes) => {
  const UploadImages = sequelize.define('UploadImages', {
    documentoImage: 
    {
      type: DataTypes.STRING, 
      allowNull:false
    },
    comprovanteRendaImage: 
    {
      type: DataTypes.STRING
    },
    imovelImage: 
    {
      type: DataTypes.STRING
    },
    CriacoesID: {
      allowNull: false,
      type: DataTypes.UUID,
      references: { model: 'Criacoes', key: 'id'}
    }
  }, {})
  UploadImages.associate = function(models) {
    UploadImages.belongsTo(models.Criacoes,  {foreignKey: 'CriacoesID'})
  }
  return UploadImages
}
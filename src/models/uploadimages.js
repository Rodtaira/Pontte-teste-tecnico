
module.exports = (sequelize, DataTypes) => {
  const UploadImages = sequelize.define('UploadImages', {
    id:
    { unique: true, 
      allowNull: false, 
      primaryKey: true,
      type: DataTypes.UUID
    }, 
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
    CriacaoID: {
      allowNull: false,
      type: DataTypes.UUID,
      references: { model: 'Criacoes', key: 'id'}
    }
  }, {})
  UploadImages.associate = function(models) {
    UploadImages.belongsTo(models.Criacoes)
  }
  return UploadImages
}
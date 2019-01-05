module.exports = (sequelize, DataTypes) => (
  sequelize.define('board1', {
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    text: {
      type: DataTypes.STRING(100),
      allowNull: false,
    }
  },{
    timestamps: true,
    paranoid: true,
  })
)

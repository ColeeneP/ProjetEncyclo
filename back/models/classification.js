const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('classification', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    taxon: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    identification: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    refs: {
        type: DataTypes.TEXT,
        allowNull: true
    }
  }, {
    sequelize,
    tableName: 'classification',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "taxon",
        using: "BTREE",
        fields: [
          { name: "taxon" },
        ]
      },
    ]
  });
};
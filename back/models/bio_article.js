const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bio_article', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vulgary_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    classification: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    img: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    article_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    lifestyle: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    biotop: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    alimentation: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    reproduction: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    autres: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    refs: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATETIME,
      allowNull: false
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    modifiedAt: {
      type: DataTypes.DATETIME,
      allowNull: true
    },
    modifiedBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'bio_article',
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
        name: "classification",
        using: "BTREE",
        fields: [
          { name: "classification" },
        ]
      },
      {
        name: "createdBy",
        using: "BTREE",
        fields: [
          { name: "createdBy" },
        ]
      },
      {
        name: "modifiedBy",
        using: "BTREE",
        fields: [
          { name: "modifiedBy" },
        ]
      },
    ]
  });
};

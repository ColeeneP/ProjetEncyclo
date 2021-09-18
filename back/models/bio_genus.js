const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bio_genus', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fk_id_family: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'bio_family',
        key: 'id'
      }
    },
    genus_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    identification: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    refs: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'bio_genus',
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
        name: "fk_id_family",
        using: "BTREE",
        fields: [
          { name: "fk_id_family" },
        ]
      },
    ]
  });
};

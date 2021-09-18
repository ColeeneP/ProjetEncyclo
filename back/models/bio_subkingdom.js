const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bio_subkingdom', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fk_id_kingdom: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'bio_kingdom',
        key: 'id'
      }
    },
    subkingdom_name: {
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
    tableName: 'bio_subkingdom',
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
        name: "fk_id_kingdom",
        using: "BTREE",
        fields: [
          { name: "fk_id_kingdom" },
        ]
      },
    ]
  });
};

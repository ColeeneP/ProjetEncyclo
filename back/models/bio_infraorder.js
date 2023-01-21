const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bio_infraorder', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fk_id_order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'bio_order',
        key: 'id'
      }
    },
    infraorder_name: {
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
    tableName: 'bio_infraorder',
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
        name: "fk_id_order",
        using: "BTREE",
        fields: [
          { name: "fk_id_order" },
        ]
      },
    ]
  });
};

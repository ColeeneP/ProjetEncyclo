const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bio_subdomain', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fk_id_domain: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'bio_domain',
        key: 'id'
      }
    },
    subdomain_name: {
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
    tableName: 'bio_subdomain',
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
        name: "fk_id_domain",
        using: "BTREE",
        fields: [
          { name: "fk_id_domain" },
        ]
      },
    ]
  });
};

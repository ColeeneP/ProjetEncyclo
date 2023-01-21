const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bio_article', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fk_id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    vulgary_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    fk_id_domain: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'bio_domain',
        key: 'id'
      }
    },
    fk_id_subdomain: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'bio_subdomain',
        key: 'id'
      }
    },
    fk_id_kingdom: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'bio_kingdom',
        key: 'id'
      }
    },
    fk_id_subkingdom: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'bio_subkingdom',
        key: 'id'
      }
    },
    fk_id_rameau: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'bio_rameau',
        key: 'id'
      }
    },
    fk_id_infrakingdom: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'bio_infrakingdom',
        key: 'id'
      }
    },
    fk_id_superphylum: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fk_id_phylum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'bio_phylum',
        key: 'id'
      }
    },
    fk_id_subphylum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'bio_subphylum',
        key: 'id'
      }
    },
    fk_id_infraphylum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'bio_infraphylum',
        key: 'id'
      }
    },
    fk_id_microphylum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'bio_microphylum',
        key: 'id'
      }
    },
    fk_id_superclass: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'bio_superclass',
        key: 'id'
      }
    },
    fk_id_class: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'bio_class',
        key: 'id'
      }
    },
    fk_id_subclass: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'bio_subclass',
        key: 'id'
      }
    },
    fk_id_infraclass: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'bio_infraclass',
        key: 'id'
      }
    },
    fk_id_superorder: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'bio_superorder',
        key: 'id'
      }
    },
    fk_id_order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'bio_order',
        key: 'id'
      }
    },
    fk_id_suborder: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'bio_superorder',
        key: 'id'
      }
    },
    fk_id_infraorder: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'bio_infraorder',
        key: 'id'
      }
    },
    fk_id_microorder: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'bio_microorder',
        key: 'id'
      }
    },
    fk_id_superfamily: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'bio_superfamily',
        key: 'id'
      }
    },
    fk_id_family: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'bio_family',
        key: 'id'
      }
    },
    fk_id_subfamily: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'bio_subfamily',
        key: 'id'
      }
    },
    fk_id_tribe: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'bio_tribe',
        key: 'id'
      }
    },
    fk_id_subtribe: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'bio_subtribe',
        key: 'id'
      }
    },
    fk_id_genus: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'bio_genus',
        key: 'id'
      }
    },
    fk_id_subgenus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'bio_subgenus',
        key: 'id'
      }
    },
    fk_id_section: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'bio_section',
        key: 'id'
      }
    },
    fk_id_subsection: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'bio_subsection',
        key: 'id'
      }
    },
    fk_id_species: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'bio_species',
        key: 'id'
      }
    },
    fk_id_subspecies: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'bio_subspecies',
        key: 'id'
      }
    },
    fk_id_variety: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'bio_variety',
        key: 'id'
      }
    },
    fk_id_subvariety: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'bio_subvariety',
        key: 'id'
      }
    },
    fk_id_form: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'bio_form',
        key: 'id'
      }
    },
    fk_id_subform: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'bio_subform',
        key: 'id'
      }
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
      allowNull: false
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
        name: "fk_id_user",
        using: "BTREE",
        fields: [
          { name: "fk_id_user" },
        ]
      },
      {
        name: "fk_id_domain",
        using: "BTREE",
        fields: [
          { name: "fk_id_domain" },
        ]
      },
      {
        name: "fk_id_subdomain",
        using: "BTREE",
        fields: [
          { name: "fk_id_subdomain" },
        ]
      },
      {
        name: "fk_id_kingdom",
        using: "BTREE",
        fields: [
          { name: "fk_id_kingdom" },
        ]
      },
      {
        name: "fk_id_subkingdom",
        using: "BTREE",
        fields: [
          { name: "fk_id_subkingdom" },
        ]
      },
      {
        name: "fk_id_rameau",
        using: "BTREE",
        fields: [
          { name: "fk_id_rameau" },
        ]
      },
      {
        name: "fk_id_infrakingdom",
        using: "BTREE",
        fields: [
          { name: "fk_id_infrakingdom" },
        ]
      },
      {
        name: "fk_id_phylum",
        using: "BTREE",
        fields: [
          { name: "fk_id_phylum" },
        ]
      },
      {
        name: "fk_id_subphylum",
        using: "BTREE",
        fields: [
          { name: "fk_id_subphylum" },
        ]
      },
      {
        name: "fk_id_infraphylum",
        using: "BTREE",
        fields: [
          { name: "fk_id_infraphylum" },
        ]
      },
      {
        name: "fk_id_microphylum",
        using: "BTREE",
        fields: [
          { name: "fk_id_microphylum" },
        ]
      },
      {
        name: "fk_id_superclass",
        using: "BTREE",
        fields: [
          { name: "fk_id_superclass" },
        ]
      },
      {
        name: "fk_id_class",
        using: "BTREE",
        fields: [
          { name: "fk_id_class" },
        ]
      },
      {
        name: "fk_id_subclass",
        using: "BTREE",
        fields: [
          { name: "fk_id_subclass" },
        ]
      },
      {
        name: "fk_id_infraclass",
        using: "BTREE",
        fields: [
          { name: "fk_id_infraclass" },
        ]
      },
      {
        name: "fk_id_superorder",
        using: "BTREE",
        fields: [
          { name: "fk_id_superorder" },
        ]
      },
      {
        name: "fk_id_order",
        using: "BTREE",
        fields: [
          { name: "fk_id_order" },
        ]
      },
      {
        name: "fk_id_suborder",
        using: "BTREE",
        fields: [
          { name: "fk_id_suborder" },
        ]
      },
      {
        name: "fk_id_infraorder",
        using: "BTREE",
        fields: [
          { name: "fk_id_infraorder" },
        ]
      },
      {
        name: "fk_id_microorder",
        using: "BTREE",
        fields: [
          { name: "fk_id_microorder" },
        ]
      },
      {
        name: "fk_id_superfamily",
        using: "BTREE",
        fields: [
          { name: "fk_id_superfamily" },
        ]
      },
      {
        name: "fk_id_family",
        using: "BTREE",
        fields: [
          { name: "fk_id_family" },
        ]
      },
      {
        name: "fk_id_subfamily",
        using: "BTREE",
        fields: [
          { name: "fk_id_subfamily" },
        ]
      },
      {
        name: "fk_id_tribe",
        using: "BTREE",
        fields: [
          { name: "fk_id_tribe" },
        ]
      },
      {
        name: "fk_id_subtribe",
        using: "BTREE",
        fields: [
          { name: "fk_id_subtribe" },
        ]
      },
      {
        name: "fk_id_genus",
        using: "BTREE",
        fields: [
          { name: "fk_id_genus" },
        ]
      },
      {
        name: "fk_id_subgenus",
        using: "BTREE",
        fields: [
          { name: "fk_id_subgenus" },
        ]
      },
      {
        name: "fk_id_section",
        using: "BTREE",
        fields: [
          { name: "fk_id_section" },
        ]
      },
      {
        name: "fk_id_subsection",
        using: "BTREE",
        fields: [
          { name: "fk_id_subsection" },
        ]
      },
      {
        name: "fk_id_species",
        using: "BTREE",
        fields: [
          { name: "fk_id_species" },
        ]
      },
      {
        name: "fk_id_subspecies",
        using: "BTREE",
        fields: [
          { name: "fk_id_subspecies" },
        ]
      },
      {
        name: "fk_id_variety",
        using: "BTREE",
        fields: [
          { name: "fk_id_variety" },
        ]
      },
      {
        name: "fk_id_subvariety",
        using: "BTREE",
        fields: [
          { name: "fk_id_subvariety" },
        ]
      },
      {
        name: "fk_id_form",
        using: "BTREE",
        fields: [
          { name: "fk_id_form" },
        ]
      },
      {
        name: "fk_id_subform",
        using: "BTREE",
        fields: [
          { name: "fk_id_subform" },
        ]
      },
    ]
  });
};

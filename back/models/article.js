"use strict"

module.exports = (Sequelize , sequelize) => {
const Articles = sequelize.define(
    "Articles",
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          idUSERS: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
              model: 'Users',
              key: 'id'
            }
          },
          attachment: {
            allowNull: false,
            type: Sequelize.STRING
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
          }
    },
    {
        sequelize,
        tableName: "Articles",
        timestamps: false,
        indexes: [
            {
                name: 'PRIMARY',
                unique: true,
                using: 'BTREE',
                fields: [{name: 'id'}]
            },
            {
                name: 'order',
                using: 'BTREE',
                fields: [{name: 'createdAt'}]
            },
            {
                name: 'fk_articles_users_idx',
                using: 'BTREE',
                fields: [{name: 'idUSERS'}]
            }
        ]
    }
);

return Articles;
}
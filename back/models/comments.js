"use strict"

module.exports = (Sequelize , sequelize) => {
const Comments = sequelize.define(
    "Comments",
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          idARTICLES: {
            allowNull: false,
            type: Sequelize.INTEGER
          },
          idUSERS: {
            allowNull: false,
            type: Sequelize.INTEGER
          },
          content: {
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
        tableName: "Comments",
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
                name: 'fk_comments_users_idx',
                using: 'BTREE',
                fields: [{name: 'idUSERS'}]
            },
            {
                name: 'fk_comments_articles_idx',
                using: 'BTREE',
                fields: [{name: 'idARTICLES'}]
            }
        ]
    }
);

return Comments;
}
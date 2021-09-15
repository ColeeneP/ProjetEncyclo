"use strict"

module.exports = (Sequelize , sequelize) => {
const Users = sequelize.define(
    "Users",
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          firstname: {
            allowNull: false,
            type: Sequelize.STRING
          },
          name: {
            allowNull: false,
            type: Sequelize.STRING
          },
          email: {
            allowNull: false,
            type: Sequelize.STRING,
            unique: 'email_UNIQUE'
          },
          password: {
            allowNull: false,
            type: Sequelize.STRING
          },
          bio: {
            allowNull: true,
            type: Sequelize.STRING
          },
          imgprofile: {
            allowNull: true,
            type: Sequelize.STRING,
            defaultValue: 'https://images.assetsdelivery.com/compings_v2/gmast3r/gmast3r1710/gmast3r171002127.jpg'
          },
          isAdmin: {
            allowNull: false,
            type: Sequelize.BOOLEAN,
            defaultValue: false
          },
          isCreator: {
            allowNull: false,
            type: Sequelize.BOOLEAN,
            defaultValue: false
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
        tableName: "Users",
        timestamps: false,
        indexes: [
            {
                name: 'PRIMARY',
                unique: true,
                using: 'BTREE',
                fields: [{name: 'id'}]
            },
            {
                name: 'email_UNIQUE',
                unique: true,
                using: 'BTREE',
                fields: [{name: 'email'}]
            }
        ]
    }
);

return Users;
}
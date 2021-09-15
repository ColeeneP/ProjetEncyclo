"use strict";
require("dotenv").config();
const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB,
  process.env.USERS,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
  }
);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
module.exports = db
db.Users = require('./users')(Sequelize, sequelize);
db.Comments = require('./comments')(Sequelize, sequelize);
db.Articles = require('./articles')(Sequelize, sequelize);

db.Users.hasMany(db.Messages, {
  foreignKey: 'idUSERS',
  as: 'users_articles'
});
db.Messages.belongsTo(db.Users, {
  foreignKey: 'idUSERS',
  as: 'users_articles'
});

db.Users.hasMany(db.Comments, {
  foreignKey: 'idUSERS',
  as: 'users_comments'
});
db.Comments.belongsTo(db.Users, {
  foreignKey: 'idUSERS',
  as: 'users_comments'
});
db.Messages.hasMany(db.Comments, {
  foreignKey: 'idARTICLES',
  as: 'articles_comments'
});
db.Comments.belongsTo(db.Messages, {
  foreignKey: 'idARTICLES',
  as: 'articles_comments'
});

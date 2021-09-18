require("dotenv").config();
const cors = require('cors');
const Sequelize = require('sequelize');
const db = require("./models");
const path = require('path');
const helmet = require('helmet'); // middleware tier d'express pour la sécurisation
const express = require('express');
const app = express();
// const userRoutes = require('./routes/user');
// const articlesRoutes = require('./routes/articles');

// création tables

// db.sequelize.sync();
// db.sequelize.sync({force: true})

// connexion à la BDD

const sequelize = new Sequelize(process.env.DB, process.env.USERS, process.env.PASSWORD, {
  host: process.env.HOST,
  port: 3306,
  dialect: 'mysql',
  loggin: false
});

module.exports = sequelize;
global.sequelize = sequelize;

sequelize.authenticate ((err) => {
  if (err) throw err;
  console.log ('Connecté!');
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(cors());
app.use(helmet());
app.use(express()); //remplace app.use(bodyParser())

// Appel des routers
// app.use('/images', express.static(path.join(__dirname, 'images')));
// app.use('/api/user', userRoutes);
// app.use('/api/message', articlesRoutes);

module.exports = app;
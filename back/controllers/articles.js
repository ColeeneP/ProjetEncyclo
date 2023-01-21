const Model = require('../models/');
const fs = require('fs');
const decodedToken = require("../middleware/auth.js");


// Création d'un article
exports.createArticle = (req, res) => {
    const userId = Number(req.user.userId);
    const message = ({
      idUSERS: userId,
      content: req.body.content,
    })
    if (req.file) {
      message.attachment = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    }
    console.log(message);
      Model.Article.create({
        idUSERS: userId,
        attachment: message.attachment
      }).then(
        () => {
          res.status(201).json({ message: 'Message créé !' }); }
      ).catch(
        (error) => {
          res.status(400).json({ error: error });}
      );
    };

// Afficher tous les articles
exports.getAllArticles = (req, res) => {
    Model.Article.findAll({
      order: [["createdAt", "DESC"]],
      attributes: ['id', 'idUSERS', 'attachment'],
      include: [{
        model: Model.Users,
        attributes: ['id', 'name', 'firstname', 'imgprofile'],
        as: 'users_articles'
      }]})
    .then((things) => {
      console.log(things);
      res.status(200).json(things);
    })
    .catch((error) => {res.status(400).json({error: error});
    });
  };

  exports.getOneArticle = (req, res) => {
    const id = Number(req.params.id);
    Model.Article.findOne({
      where: {id: id},
      include : [{
        model: Model.bio_class,
        as: ''
      }]
    })
    .then((things) => {
      console.log(things);
      res.status(200).json(things);
    })
    .catch((error) => {res.status(400).json({error: error});
    });
  };

// Modifier un article
exports.modifyArticle = (req, res) => {
  const idPost = Number(req.params.id);  
  const message = ({
    idMESSAGES: idPost,
    attachment: req.body.attachment,
  })
  if (req.file) {
    message.attachment = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  }
      Model.Article.update(message, {where: {id: idPost}})
      .then(() => res.status(200).json({ message: 'Message modifié !'}))
      .catch(error => res.status(400).json({ message: error.message }));
  };

//Supprimer un article
exports.deleteArticle = (req, res) => {
  const idMessage = Number(req.params.id);
  const userId = Number(req.user.userId);
  console.log(idMessage);
      Model.Article.findOne({ where: {id : idMessage}})
      .then(thing => {
      Model.Users.findOne({ where: {id: userId}})
        .then(userFound => {
          if (userFound.isAdmin == 1 || userFound.id == thing.idUSERS) {
              if(thing.attachment != null) {
                        const filename = thing.attachment.split('/images/')[1];
            fs.unlink(`images/${filename}`, () => {
              Model.Messages.destroy({ where: {id : idMessage}})
                .then(() => res.status(200).json({ message: 'Message supprimé !'}))
                .catch(error => res.status(400).json({  message: error.message }));
            });
              } else {
                Model.Messages.destroy({ where: {id : idMessage}})
                .then(() => res.status(200).json({ message: 'Message supprimé !'}))
                .catch(error => res.status(400).json({  message: error.message }));
              }
          } else {
            return res.status(403).json({ message: 'Autorisation refusée' });
          }
        })
      })
      .catch(error => res.status(500).json({ message: error.message }))
  };

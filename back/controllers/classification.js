const Model = require('../models/');
const fs = require('fs');
const decodedToken = require("../middleware/auth.js");

/**
 * Function to add a line in a classification table (bio section)
 * @param {object} req 
 * @param {new database line} res 
 */
// Création d'une classification
  exports.createClassification = (req, res) => {
      const message = {
      name: req.body.name,
      taxon: req.body.taxon,
      identification: req.body.identification,
      refs: req.body.refs
      }
          Model.classification.create(...message)
          .then(() => res.status(201).json({ message: 'Classification créée !' }))
          .catch((error) => {res.status(400).json({ message: error.message });})
      };

/**
 * Function to get a specific classification (bio section)
 * @param {object} req 
 * @param {new database line} res 
 */
  exports.getOneClassification = (req, res) => {
    const id = Number(req.params.id);
    Model.classification.findOne({
      attributes: ['id', 'taxon', 'name', 'identification', 'refs'],
      where: {id: id},
    })
    .then((things) => {res.status(200).json(things)})
    .catch((error) => {res.status(400).json({error: error.message})});
  };

/**
 * Function to get all classifications (bio section)
 * @param {new database line} res 
 */
  exports.getAllClassifications = (res) => {
    Model.classification.findAll({
      order: [["name", "ASC"]],
      attributes: ['id', 'taxon', 'name'],
    })
    .then((things) => {res.status(200).json(things)})
    .catch((error) => {res.status(400).json({error: error.message})});
  };

/**
 * Function to modify a classification table (bio section)
 * @param {object} req 
 * @param {modify database line} res 
 */ 
// Modifier une classification
exports.modifyClassification = (req, res) => {
  const id = Number(req.params.id);  
  const message = ({
    id: id,
    taxon: req.body.taxon,
    name: req.body.name,
    identification: req.body.identification,
    refs: req.body.refs
  })
      Model.classification.update(...message, {where: {id: id}})
      .then(() => res.status(200).json({ message: 'Modification effectuée !' }))
      .catch((error) => {res.status(400).json({ message: error.message });})
  };
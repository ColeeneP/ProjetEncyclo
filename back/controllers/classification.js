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
                .then((res) => res.status(201).json({ message: 'Classification créée !' }))
                .catch((error) => {res.status(400).json({ message: error.message });})
            };

  exports.getOneClassification = (req, res) => {
    const id = Number(req.params.id);
    Model.bio_kingdom.findOne({
      attributes: ['id', 'name'],
      where: {id: id},
      include: [{
        model: Model.bio_domain,
        as: 'fk_id_domain_bio_domain',        
        attributes: ['id', 'name', 'identification', 'refs']
      }]})
    .then((things) => {
      console.log(things);
      res.status(200).json(things);
    })
    .catch((error) => {res.status(400).json({error: error});
    });
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
      .then((res) => res.status(200).json({ message: 'Modification effectuée !' }))
      .catch((error) => {res.status(400).json({ message: error.message });})
  };
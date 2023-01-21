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
            try {
              if (req.body.name == "domain") {
                Model.bio_domain.create(...message)
                res.status(201).json({ message: 'Domaine créé !' })
              } else if (req.body.name == "subdomain") {
                Model.bio_subdomain.create(...message)
                res.status(201).json({ message: 'Sous-domaine créé !' })
              } else if (req.body.name == "kingdom") {
                Model.bio_kingdom.create(...message)
                res.status(201).json({ message: 'Règne créé !' })
              } else if (req.body.name == "subkingdom") {
                Model.bio_subkingdom.create(...message)
                res.status(201).json({ message: 'Sous-règne créé !' })
              } else if (req.body.name == "rameau") {
                Model.bio_rameau.create(...message)
                res.status(201).json({ message: 'Rameau créé !' })
              } else if (req.body.name == "infrakingdom") {
                Model.bio_infrakingdom.create(...message)
                res.status(201).json({ message: 'Infra-règne créé !' })
              }else if (req.body.name == "superphylum") {
                Model.bio_superphylum.create(...message)
                res.status(201).json({ message: 'Super-embranchement créé !' })
              } else if (req.body.name == "phylum") {
                Model.bio_phylum.create(...message)
                res.status(201).json({ message: 'Embranchement créé !' })
              } else if (req.body.name == "subphylum") {
                Model.bio_subphylum.create(...message)
                res.status(201).json({ message: 'Sous-embranchement créé !' })
              } else if (req.body.name == "infraphylum") {
                Model.bio_infraphylum.create(...message)
                res.status(201).json({ message: 'Infra-embranchement créé !' })
              } else if (req.body.name == "microphylum") {
                Model.bio_microphylum.create(...message)
                res.status(201).json({ message: 'Micro-embranchement créé !' })
              } else if (req.body.name == "superclass") {
                Model.bio_superclass.create(...message)
                res.status(201).json({ message: 'Super-classe créée !' })
              } else if (req.body.name == "class") {
                Model.bio_class.create(...message)
                res.status(201).json({ message: 'Classe créée !' })
              } else if (req.body.name == "subclass") {
                Model.bio_subclass.create(...message)
                res.status(201).json({ message: 'Sous-classe créée !' })
              } else if (req.body.name == "infraclass") {
                Model.bio_infraclass.create(...message)
                res.status(201).json({ message: 'Infra-classe créée !' })
              } else if (req.body.name == "superorder") {
                Model.bio_superorder.create(...message)
                res.status(201).json({ message: 'Super-ordre créé !' })
              } else if (req.body.name == "order") {
                Model.bio_order.create(...message)
                res.status(201).json({ message: 'Ordre créé !' })
              } else if (req.body.name == "suborder") {
                Model.bio_suborder.create(...message)
                res.status(201).json({ message: 'Sous-ordre créé !' })
              } else if (req.body.name == "infraorder") {
                Model.bio_infraorder.create(...message)
                res.status(201).json({ message: 'Infra-ordre créé !' })
              } else if (req.body.name == "microorder") {
                Model.bio_microorder.create(...message)
                res.status(201).json({ message: 'Micro-ordre créé !' })
              } else if (req.body.name == "superfamily") {
                Model.bio_superfamily.create(...message)
                res.status(201).json({ message: 'Super-famille créée !' })
              }else if (req.body.name == "family") {
                Model.bio_family.create(...message)
                res.status(201).json({ message: 'Famille créée !' })
              } else if (req.body.name == "subfamily") {
                Model.bio_subfamily.create(...message)
                res.status(201).json({ message: 'Sous-famille créée !' })
              } else if (req.body.name == "tribe") {
                Model.bio_tribe.create(...message)
                res.status(201).json({ message: 'Tribu créée !' })
              } else if (req.body.name == "subtribe") {
                Model.bio_subtribe.create(...message)
                res.status(201).json({ message: 'Sous-tribu créée !' })
              } else if (req.body.name == "genus") {
                Model.bio_genus.create(...message)
                res.status(201).json({ message: 'Genre créé !' })
              } else if (req.body.name == "subgenus") {
                Model.bio_subgenus.create(...message)
                res.status(201).json({ message: 'Sous-genre créé !' })
              } else if (req.body.name == "section") {
                Model.bio_section.create(...message)
                res.status(201).json({ message: 'Section créée !' })
              } else if (req.body.name == "subsection") {
                Model.bio_subsection.create(...message)
                res.status(201).json({ message: 'Sous-section créée !' })
              } else if (req.body.name == "species") {
                Model.bio_species.create(...message)
                res.status(201).json({ message: 'Espèce créée !' })
              } else if (req.body.name == "subspecies") {
                Model.bio_subspecies.create(...message)
                res.status(201).json({ message: 'Sous-espèce créée !' })
              } else if (req.body.name == "variety") {
                Model.bio_variety.create(...message)
                res.status(201).json({ message: 'Variety créée !' })
              } else if (req.body.name == "subvariety") {
                Model.bio_subvariety.create(...message)
                res.status(201).json({ message: 'Sous-variété créée !' })
              } else if (req.body.name == "form") {
                Model.bio_form.create(...message)
                res.status(201).json({ message: 'Forme créée !' })
              } else if (req.body.name == "subform") {
                Model.bio_subform.create(...message)
                res.status(201).json({ message: 'Sous-forme créée !' })
              }
            } catch (domain) {
              (error) => {
                res.status(400).json({ message: error.message });}
              }
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
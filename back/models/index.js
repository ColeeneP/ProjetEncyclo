var DataTypes = require("sequelize").DataTypes;
var _bio_class = require("./bio_class");
var _bio_domain = require("./bio_domain");
var _bio_family = require("./bio_family");
var _bio_genus = require("./bio_genus");
var _bio_kingdom = require("./bio_kingdom");
var _bio_order = require("./bio_order");
var _bio_phylum = require("./bio_phylum");
var _bio_species = require("./bio_species");
var _bio_subclass = require("./bio_subclass");
var _bio_subdomain = require("./bio_subdomain");
var _bio_subkingdom = require("./bio_subkingdom");
var _bio_suborder = require("./bio_suborder");
var _bio_subphylum = require("./bio_subphylum");
var _bio_superclass = require("./bio_superclass");
var _bio_superorder = require("./bio_superorder");
var _bio_superphylum = require("./bio_superphylum");
var _lexique = require("./lexique");

function initModels(sequelize) {
  var bio_class = _bio_class(sequelize, DataTypes);
  var bio_domain = _bio_domain(sequelize, DataTypes);
  var bio_family = _bio_family(sequelize, DataTypes);
  var bio_genus = _bio_genus(sequelize, DataTypes);
  var bio_kingdom = _bio_kingdom(sequelize, DataTypes);
  var bio_order = _bio_order(sequelize, DataTypes);
  var bio_phylum = _bio_phylum(sequelize, DataTypes);
  var bio_species = _bio_species(sequelize, DataTypes);
  var bio_subclass = _bio_subclass(sequelize, DataTypes);
  var bio_subdomain = _bio_subdomain(sequelize, DataTypes);
  var bio_subkingdom = _bio_subkingdom(sequelize, DataTypes);
  var bio_suborder = _bio_suborder(sequelize, DataTypes);
  var bio_subphylum = _bio_subphylum(sequelize, DataTypes);
  var bio_superclass = _bio_superclass(sequelize, DataTypes);
  var bio_superorder = _bio_superorder(sequelize, DataTypes);
  var bio_superphylum = _bio_superphylum(sequelize, DataTypes);
  var lexique = _lexique(sequelize, DataTypes);

  bio_order.belongsTo(bio_class, { as: "fk_id_class_bio_class", foreignKey: "fk_id_class"});
  bio_class.hasMany(bio_order, { as: "bio_orders", foreignKey: "fk_id_class"});
  bio_subclass.belongsTo(bio_class, { as: "fk_id_class_bio_class", foreignKey: "fk_id_class"});
  bio_class.hasMany(bio_subclass, { as: "bio_subclasses", foreignKey: "fk_id_class"});
  bio_superorder.belongsTo(bio_class, { as: "fk_id_class_bio_class", foreignKey: "fk_id_class"});
  bio_class.hasMany(bio_superorder, { as: "bio_superorders", foreignKey: "fk_id_class"});
  bio_kingdom.belongsTo(bio_domain, { as: "fk_id_domain_bio_domain", foreignKey: "fk_id_domain"});
  bio_domain.hasMany(bio_kingdom, { as: "bio_kingdoms", foreignKey: "fk_id_domain"});
  bio_subdomain.belongsTo(bio_domain, { as: "fk_id_domain_bio_domain", foreignKey: "fk_id_domain"});
  bio_domain.hasMany(bio_subdomain, { as: "bio_subdomains", foreignKey: "fk_id_domain"});
  bio_genus.belongsTo(bio_family, { as: "fk_id_family_bio_family", foreignKey: "fk_id_family"});
  bio_family.hasMany(bio_genus, { as: "bio_genus", foreignKey: "fk_id_family"});
  bio_species.belongsTo(bio_genus, { as: "fk_id_genus_bio_genu", foreignKey: "fk_id_genus"});
  bio_genus.hasMany(bio_species, { as: "bio_species", foreignKey: "fk_id_genus"});
  bio_phylum.belongsTo(bio_kingdom, { as: "fk_id_kingdom_bio_kingdom", foreignKey: "fk_id_kingdom"});
  bio_kingdom.hasMany(bio_phylum, { as: "bio_phylums", foreignKey: "fk_id_kingdom"});
  bio_subkingdom.belongsTo(bio_kingdom, { as: "fk_id_kingdom_bio_kingdom", foreignKey: "fk_id_kingdom"});
  bio_kingdom.hasMany(bio_subkingdom, { as: "bio_subkingdoms", foreignKey: "fk_id_kingdom"});
  bio_superphylum.belongsTo(bio_kingdom, { as: "fk_id_kingdom_bio_kingdom", foreignKey: "fk_id_kingdom"});
  bio_kingdom.hasMany(bio_superphylum, { as: "bio_superphylums", foreignKey: "fk_id_kingdom"});
  bio_family.belongsTo(bio_order, { as: "fk_id_order_bio_order", foreignKey: "fk_id_order"});
  bio_order.hasMany(bio_family, { as: "bio_families", foreignKey: "fk_id_order"});
  bio_suborder.belongsTo(bio_order, { as: "fk_id_order_bio_order", foreignKey: "fk_id_order"});
  bio_order.hasMany(bio_suborder, { as: "bio_suborders", foreignKey: "fk_id_order"});
  bio_class.belongsTo(bio_phylum, { as: "fk_id_phylum_bio_phylum", foreignKey: "fk_id_phylum"});
  bio_phylum.hasMany(bio_class, { as: "bio_classes", foreignKey: "fk_id_phylum"});
  bio_subphylum.belongsTo(bio_phylum, { as: "fk_id_phylum_bio_phylum", foreignKey: "fk_id_phylum"});
  bio_phylum.hasMany(bio_subphylum, { as: "bio_subphylums", foreignKey: "fk_id_phylum"});
  bio_superclass.belongsTo(bio_phylum, { as: "fk_id_phylum_bio_phylum", foreignKey: "fk_id_phylum"});
  bio_phylum.hasMany(bio_superclass, { as: "bio_superclasses", foreignKey: "fk_id_phylum"});

  return {
    bio_class,
    bio_domain,
    bio_family,
    bio_genus,
    bio_kingdom,
    bio_order,
    bio_phylum,
    bio_species,
    bio_subclass,
    bio_subdomain,
    bio_subkingdom,
    bio_suborder,
    bio_subphylum,
    bio_superclass,
    bio_superorder,
    bio_superphylum,
    lexique,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

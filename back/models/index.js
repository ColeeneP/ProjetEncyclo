var DataTypes = require("sequelize").DataTypes;
var _bio_article = require("./bio_article");
var _bio_class = require("./bio_class");
var _bio_domain = require("./bio_domain");
var _bio_family = require("./bio_family");
var _bio_form = require("./bio_form");
var _bio_genus = require("./bio_genus");
var _bio_infraclass = require("./bio_infraclass");
var _bio_infrakingdom = require("./bio_infrakingdom");
var _bio_infraorder = require("./bio_infraorder");
var _bio_infraphylum = require("./bio_infraphylum");
var _bio_kingdom = require("./bio_kingdom");
var _bio_microorder = require("./bio_microorder");
var _bio_microphylum = require("./bio_microphylum");
var _bio_order = require("./bio_order");
var _bio_phylum = require("./bio_phylum");
var _bio_rameau = require("./bio_rameau");
var _bio_section = require("./bio_section");
var _bio_species = require("./bio_species");
var _bio_subclass = require("./bio_subclass");
var _bio_subdomain = require("./bio_subdomain");
var _bio_subfamily = require("./bio_subfamily");
var _bio_subform = require("./bio_subform");
var _bio_subgenus = require("./bio_subgenus");
var _bio_subkingdom = require("./bio_subkingdom");
var _bio_suborder = require("./bio_suborder");
var _bio_subphylum = require("./bio_subphylum");
var _bio_subsection = require("./bio_subsection");
var _bio_subspecies = require("./bio_subspecies");
var _bio_subtribe = require("./bio_subtribe");
var _bio_subvariety = require("./bio_subvariety");
var _bio_superclass = require("./bio_superclass");
var _bio_superfamily = require("./bio_superfamily");
var _bio_superorder = require("./bio_superorder");
var _bio_superphylum = require("./bio_superphylum");
var _bio_tribe = require("./bio_tribe");
var _bio_variety = require("./bio_variety");
var _lexique = require("./lexique");
var _user = require("./user");

function initModels(sequelize) {
  var bio_article = _bio_article(sequelize, DataTypes);
  var bio_class = _bio_class(sequelize, DataTypes);
  var bio_domain = _bio_domain(sequelize, DataTypes);
  var bio_family = _bio_family(sequelize, DataTypes);
  var bio_form = _bio_form(sequelize, DataTypes);
  var bio_genus = _bio_genus(sequelize, DataTypes);
  var bio_infraclass = _bio_infraclass(sequelize, DataTypes);
  var bio_infrakingdom = _bio_infrakingdom(sequelize, DataTypes);
  var bio_infraorder = _bio_infraorder(sequelize, DataTypes);
  var bio_infraphylum = _bio_infraphylum(sequelize, DataTypes);
  var bio_kingdom = _bio_kingdom(sequelize, DataTypes);
  var bio_microorder = _bio_microorder(sequelize, DataTypes);
  var bio_microphylum = _bio_microphylum(sequelize, DataTypes);
  var bio_order = _bio_order(sequelize, DataTypes);
  var bio_phylum = _bio_phylum(sequelize, DataTypes);
  var bio_rameau = _bio_rameau(sequelize, DataTypes);
  var bio_section = _bio_section(sequelize, DataTypes);
  var bio_species = _bio_species(sequelize, DataTypes);
  var bio_subclass = _bio_subclass(sequelize, DataTypes);
  var bio_subdomain = _bio_subdomain(sequelize, DataTypes);
  var bio_subfamily = _bio_subfamily(sequelize, DataTypes);
  var bio_subform = _bio_subform(sequelize, DataTypes);
  var bio_subgenus = _bio_subgenus(sequelize, DataTypes);
  var bio_subkingdom = _bio_subkingdom(sequelize, DataTypes);
  var bio_suborder = _bio_suborder(sequelize, DataTypes);
  var bio_subphylum = _bio_subphylum(sequelize, DataTypes);
  var bio_subsection = _bio_subsection(sequelize, DataTypes);
  var bio_subspecies = _bio_subspecies(sequelize, DataTypes);
  var bio_subtribe = _bio_subtribe(sequelize, DataTypes);
  var bio_subvariety = _bio_subvariety(sequelize, DataTypes);
  var bio_superclass = _bio_superclass(sequelize, DataTypes);
  var bio_superfamily = _bio_superfamily(sequelize, DataTypes);
  var bio_superorder = _bio_superorder(sequelize, DataTypes);
  var bio_superphylum = _bio_superphylum(sequelize, DataTypes);
  var bio_tribe = _bio_tribe(sequelize, DataTypes);
  var bio_variety = _bio_variety(sequelize, DataTypes);
  var lexique = _lexique(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  bio_article.belongsTo(bio_class, { as: "fk_id_class_bio_class", foreignKey: "fk_id_class"});
  bio_class.hasMany(bio_article, { as: "bio_articles", foreignKey: "fk_id_class"});
  bio_infraclass.belongsTo(bio_class, { as: "fk_id_class_bio_class", foreignKey: "fk_id_class"});
  bio_class.hasMany(bio_infraclass, { as: "bio_infraclasses", foreignKey: "fk_id_class"});
  bio_order.belongsTo(bio_class, { as: "fk_id_class_bio_class", foreignKey: "fk_id_class"});
  bio_class.hasMany(bio_order, { as: "bio_orders", foreignKey: "fk_id_class"});
  bio_subclass.belongsTo(bio_class, { as: "fk_id_class_bio_class", foreignKey: "fk_id_class"});
  bio_class.hasMany(bio_subclass, { as: "bio_subclasses", foreignKey: "fk_id_class"});
  bio_superorder.belongsTo(bio_class, { as: "fk_id_class_bio_class", foreignKey: "fk_id_class"});
  bio_class.hasMany(bio_superorder, { as: "bio_superorders", foreignKey: "fk_id_class"});
  bio_article.belongsTo(bio_domain, { as: "fk_id_domain_bio_domain", foreignKey: "fk_id_domain"});
  bio_domain.hasMany(bio_article, { as: "bio_articles", foreignKey: "fk_id_domain"});
  bio_kingdom.belongsTo(bio_domain, { as: "fk_id_domain_bio_domain", foreignKey: "fk_id_domain"});
  bio_domain.hasMany(bio_kingdom, { as: "bio_kingdoms", foreignKey: "fk_id_domain"});
  bio_subdomain.belongsTo(bio_domain, { as: "fk_id_domain_bio_domain", foreignKey: "fk_id_domain"});
  bio_domain.hasMany(bio_subdomain, { as: "bio_subdomains", foreignKey: "fk_id_domain"});
  bio_article.belongsTo(bio_family, { as: "fk_id_family_bio_family", foreignKey: "fk_id_family"});
  bio_family.hasMany(bio_article, { as: "bio_articles", foreignKey: "fk_id_family"});
  bio_genus.belongsTo(bio_family, { as: "fk_id_family_bio_family", foreignKey: "fk_id_family"});
  bio_family.hasMany(bio_genus, { as: "bio_genus", foreignKey: "fk_id_family"});
  bio_subfamily.belongsTo(bio_family, { as: "fk_id_family_bio_family", foreignKey: "fk_id_family"});
  bio_family.hasMany(bio_subfamily, { as: "bio_subfamilies", foreignKey: "fk_id_family"});
  bio_subtribe.belongsTo(bio_family, { as: "fk_id_family_bio_family", foreignKey: "fk_id_family"});
  bio_family.hasMany(bio_subtribe, { as: "bio_subtribes", foreignKey: "fk_id_family"});
  bio_tribe.belongsTo(bio_family, { as: "fk_id_family_bio_family", foreignKey: "fk_id_family"});
  bio_family.hasMany(bio_tribe, { as: "bio_tribes", foreignKey: "fk_id_family"});
  bio_article.belongsTo(bio_form, { as: "fk_id_form_bio_form", foreignKey: "fk_id_form"});
  bio_form.hasMany(bio_article, { as: "bio_articles", foreignKey: "fk_id_form"});
  bio_article.belongsTo(bio_genus, { as: "fk_id_genus_bio_genu", foreignKey: "fk_id_genus"});
  bio_genus.hasMany(bio_article, { as: "bio_articles", foreignKey: "fk_id_genus"});
  bio_section.belongsTo(bio_genus, { as: "fk_id_genus_bio_genu", foreignKey: "fk_id_genus"});
  bio_genus.hasMany(bio_section, { as: "bio_sections", foreignKey: "fk_id_genus"});
  bio_species.belongsTo(bio_genus, { as: "fk_id_genus_bio_genu", foreignKey: "fk_id_genus"});
  bio_genus.hasMany(bio_species, { as: "bio_species", foreignKey: "fk_id_genus"});
  bio_subgenus.belongsTo(bio_genus, { as: "fk_id_genus_bio_genu", foreignKey: "fk_id_genus"});
  bio_genus.hasMany(bio_subgenus, { as: "bio_subgenus", foreignKey: "fk_id_genus"});
  bio_subsection.belongsTo(bio_genus, { as: "fk_id_genus_bio_genu", foreignKey: "fk_id_genus"});
  bio_genus.hasMany(bio_subsection, { as: "bio_subsections", foreignKey: "fk_id_genus"});
  bio_article.belongsTo(bio_infraclass, { as: "fk_id_infraclass_bio_infraclass", foreignKey: "fk_id_infraclass"});
  bio_infraclass.hasMany(bio_article, { as: "bio_articles", foreignKey: "fk_id_infraclass"});
  bio_article.belongsTo(bio_infrakingdom, { as: "fk_id_infrakingdom_bio_infrakingdom", foreignKey: "fk_id_infrakingdom"});
  bio_infrakingdom.hasMany(bio_article, { as: "bio_articles", foreignKey: "fk_id_infrakingdom"});
  bio_article.belongsTo(bio_infraorder, { as: "fk_id_infraorder_bio_infraorder", foreignKey: "fk_id_infraorder"});
  bio_infraorder.hasMany(bio_article, { as: "bio_articles", foreignKey: "fk_id_infraorder"});
  bio_article.belongsTo(bio_infraphylum, { as: "fk_id_infraphylum_bio_infraphylum", foreignKey: "fk_id_infraphylum"});
  bio_infraphylum.hasMany(bio_article, { as: "bio_articles", foreignKey: "fk_id_infraphylum"});
  bio_article.belongsTo(bio_kingdom, { as: "fk_id_kingdom_bio_kingdom", foreignKey: "fk_id_kingdom"});
  bio_kingdom.hasMany(bio_article, { as: "bio_articles", foreignKey: "fk_id_kingdom"});
  bio_infrakingdom.belongsTo(bio_kingdom, { as: "fk_id_kingdom_bio_kingdom", foreignKey: "fk_id_kingdom"});
  bio_kingdom.hasMany(bio_infrakingdom, { as: "bio_infrakingdoms", foreignKey: "fk_id_kingdom"});
  bio_phylum.belongsTo(bio_kingdom, { as: "fk_id_kingdom_bio_kingdom", foreignKey: "fk_id_kingdom"});
  bio_kingdom.hasMany(bio_phylum, { as: "bio_phylums", foreignKey: "fk_id_kingdom"});
  bio_rameau.belongsTo(bio_kingdom, { as: "fk_id_kingdom_bio_kingdom", foreignKey: "fk_id_kingdom"});
  bio_kingdom.hasMany(bio_rameau, { as: "bio_rameaus", foreignKey: "fk_id_kingdom"});
  bio_subkingdom.belongsTo(bio_kingdom, { as: "fk_id_kingdom_bio_kingdom", foreignKey: "fk_id_kingdom"});
  bio_kingdom.hasMany(bio_subkingdom, { as: "bio_subkingdoms", foreignKey: "fk_id_kingdom"});
  bio_superphylum.belongsTo(bio_kingdom, { as: "fk_id_kingdom_bio_kingdom", foreignKey: "fk_id_kingdom"});
  bio_kingdom.hasMany(bio_superphylum, { as: "bio_superphylums", foreignKey: "fk_id_kingdom"});
  bio_article.belongsTo(bio_microorder, { as: "fk_id_microorder_bio_microorder", foreignKey: "fk_id_microorder"});
  bio_microorder.hasMany(bio_article, { as: "bio_articles", foreignKey: "fk_id_microorder"});
  bio_article.belongsTo(bio_microphylum, { as: "fk_id_microphylum_bio_microphylum", foreignKey: "fk_id_microphylum"});
  bio_microphylum.hasMany(bio_article, { as: "bio_articles", foreignKey: "fk_id_microphylum"});
  bio_article.belongsTo(bio_order, { as: "fk_id_order_bio_order", foreignKey: "fk_id_order"});
  bio_order.hasMany(bio_article, { as: "bio_articles", foreignKey: "fk_id_order"});
  bio_family.belongsTo(bio_order, { as: "fk_id_order_bio_order", foreignKey: "fk_id_order"});
  bio_order.hasMany(bio_family, { as: "bio_families", foreignKey: "fk_id_order"});
  bio_infraorder.belongsTo(bio_order, { as: "fk_id_order_bio_order", foreignKey: "fk_id_order"});
  bio_order.hasMany(bio_infraorder, { as: "bio_infraorders", foreignKey: "fk_id_order"});
  bio_microorder.belongsTo(bio_order, { as: "fk_id_order_bio_order", foreignKey: "fk_id_order"});
  bio_order.hasMany(bio_microorder, { as: "bio_microorders", foreignKey: "fk_id_order"});
  bio_suborder.belongsTo(bio_order, { as: "fk_id_order_bio_order", foreignKey: "fk_id_order"});
  bio_order.hasMany(bio_suborder, { as: "bio_suborders", foreignKey: "fk_id_order"});
  bio_superfamily.belongsTo(bio_order, { as: "fk_id_order_bio_order", foreignKey: "fk_id_order"});
  bio_order.hasMany(bio_superfamily, { as: "bio_superfamilies", foreignKey: "fk_id_order"});
  bio_article.belongsTo(bio_phylum, { as: "fk_id_phylum_bio_phylum", foreignKey: "fk_id_phylum"});
  bio_phylum.hasMany(bio_article, { as: "bio_articles", foreignKey: "fk_id_phylum"});
  bio_class.belongsTo(bio_phylum, { as: "fk_id_phylum_bio_phylum", foreignKey: "fk_id_phylum"});
  bio_phylum.hasMany(bio_class, { as: "bio_classes", foreignKey: "fk_id_phylum"});
  bio_infraphylum.belongsTo(bio_phylum, { as: "fk_id_phylum_bio_phylum", foreignKey: "fk_id_phylum"});
  bio_phylum.hasMany(bio_infraphylum, { as: "bio_infraphylums", foreignKey: "fk_id_phylum"});
  bio_microphylum.belongsTo(bio_phylum, { as: "fk_id_phylum_bio_phylum", foreignKey: "fk_id_phylum"});
  bio_phylum.hasMany(bio_microphylum, { as: "bio_microphylums", foreignKey: "fk_id_phylum"});
  bio_subphylum.belongsTo(bio_phylum, { as: "fk_id_phylum_bio_phylum", foreignKey: "fk_id_phylum"});
  bio_phylum.hasMany(bio_subphylum, { as: "bio_subphylums", foreignKey: "fk_id_phylum"});
  bio_superclass.belongsTo(bio_phylum, { as: "fk_id_phylum_bio_phylum", foreignKey: "fk_id_phylum"});
  bio_phylum.hasMany(bio_superclass, { as: "bio_superclasses", foreignKey: "fk_id_phylum"});
  bio_article.belongsTo(bio_rameau, { as: "fk_id_rameau_bio_rameau", foreignKey: "fk_id_rameau"});
  bio_rameau.hasMany(bio_article, { as: "bio_articles", foreignKey: "fk_id_rameau"});
  bio_article.belongsTo(bio_section, { as: "fk_id_section_bio_section", foreignKey: "fk_id_section"});
  bio_section.hasMany(bio_article, { as: "bio_articles", foreignKey: "fk_id_section"});
  bio_article.belongsTo(bio_species, { as: "fk_id_species_bio_specy", foreignKey: "fk_id_species"});
  bio_species.hasMany(bio_article, { as: "bio_articles", foreignKey: "fk_id_species"});
  bio_form.belongsTo(bio_species, { as: "fk_id_species_bio_specy", foreignKey: "fk_id_species"});
  bio_species.hasMany(bio_form, { as: "bio_forms", foreignKey: "fk_id_species"});
  bio_subform.belongsTo(bio_species, { as: "fk_id_species_bio_specy", foreignKey: "fk_id_species"});
  bio_species.hasMany(bio_subform, { as: "bio_subforms", foreignKey: "fk_id_species"});
  bio_subspecies.belongsTo(bio_species, { as: "fk_id_species_bio_specy", foreignKey: "fk_id_species"});
  bio_species.hasMany(bio_subspecies, { as: "bio_subspecies", foreignKey: "fk_id_species"});
  bio_subvariety.belongsTo(bio_species, { as: "fk_id_species_bio_specy", foreignKey: "fk_id_species"});
  bio_species.hasMany(bio_subvariety, { as: "bio_subvarieties", foreignKey: "fk_id_species"});
  bio_variety.belongsTo(bio_species, { as: "fk_id_species_bio_specy", foreignKey: "fk_id_species"});
  bio_species.hasMany(bio_variety, { as: "bio_varieties", foreignKey: "fk_id_species"});
  bio_article.belongsTo(bio_subclass, { as: "fk_id_subclass_bio_subclass", foreignKey: "fk_id_subclass"});
  bio_subclass.hasMany(bio_article, { as: "bio_articles", foreignKey: "fk_id_subclass"});
  bio_article.belongsTo(bio_subdomain, { as: "fk_id_subdomain_bio_subdomain", foreignKey: "fk_id_subdomain"});
  bio_subdomain.hasMany(bio_article, { as: "bio_articles", foreignKey: "fk_id_subdomain"});
  bio_article.belongsTo(bio_subfamily, { as: "fk_id_subfamily_bio_subfamily", foreignKey: "fk_id_subfamily"});
  bio_subfamily.hasMany(bio_article, { as: "bio_articles", foreignKey: "fk_id_subfamily"});
  bio_article.belongsTo(bio_subform, { as: "fk_id_subform_bio_subform", foreignKey: "fk_id_subform"});
  bio_subform.hasMany(bio_article, { as: "bio_articles", foreignKey: "fk_id_subform"});
  bio_article.belongsTo(bio_subgenus, { as: "fk_id_subgenus_bio_subgenu", foreignKey: "fk_id_subgenus"});
  bio_subgenus.hasMany(bio_article, { as: "bio_articles", foreignKey: "fk_id_subgenus"});
  bio_article.belongsTo(bio_subkingdom, { as: "fk_id_subkingdom_bio_subkingdom", foreignKey: "fk_id_subkingdom"});
  bio_subkingdom.hasMany(bio_article, { as: "bio_articles", foreignKey: "fk_id_subkingdom"});
  bio_article.belongsTo(bio_subphylum, { as: "fk_id_subphylum_bio_subphylum", foreignKey: "fk_id_subphylum"});
  bio_subphylum.hasMany(bio_article, { as: "bio_articles", foreignKey: "fk_id_subphylum"});
  bio_article.belongsTo(bio_subsection, { as: "fk_id_subsection_bio_subsection", foreignKey: "fk_id_subsection"});
  bio_subsection.hasMany(bio_article, { as: "bio_articles", foreignKey: "fk_id_subsection"});
  bio_article.belongsTo(bio_subspecies, { as: "fk_id_subspecies_bio_subspecy", foreignKey: "fk_id_subspecies"});
  bio_subspecies.hasMany(bio_article, { as: "bio_articles", foreignKey: "fk_id_subspecies"});
  bio_article.belongsTo(bio_subtribe, { as: "fk_id_subtribe_bio_subtribe", foreignKey: "fk_id_subtribe"});
  bio_subtribe.hasMany(bio_article, { as: "bio_articles", foreignKey: "fk_id_subtribe"});
  bio_article.belongsTo(bio_subvariety, { as: "fk_id_subvariety_bio_subvariety", foreignKey: "fk_id_subvariety"});
  bio_subvariety.hasMany(bio_article, { as: "bio_articles", foreignKey: "fk_id_subvariety"});
  bio_article.belongsTo(bio_superclass, { as: "fk_id_superclass_bio_superclass", foreignKey: "fk_id_superclass"});
  bio_superclass.hasMany(bio_article, { as: "bio_articles", foreignKey: "fk_id_superclass"});
  bio_article.belongsTo(bio_superfamily, { as: "fk_id_superfamily_bio_superfamily", foreignKey: "fk_id_superfamily"});
  bio_superfamily.hasMany(bio_article, { as: "bio_articles", foreignKey: "fk_id_superfamily"});
  bio_article.belongsTo(bio_superorder, { as: "fk_id_superorder_bio_superorder", foreignKey: "fk_id_superorder"});
  bio_superorder.hasMany(bio_article, { as: "bio_articles", foreignKey: "fk_id_superorder"});
  bio_article.belongsTo(bio_superorder, { as: "fk_id_suborder_bio_superorder", foreignKey: "fk_id_suborder"});
  bio_superorder.hasMany(bio_article, { as: "fk_id_suborder_bio_articles", foreignKey: "fk_id_suborder"});
  bio_article.belongsTo(bio_tribe, { as: "fk_id_tribe_bio_tribe", foreignKey: "fk_id_tribe"});
  bio_tribe.hasMany(bio_article, { as: "bio_articles", foreignKey: "fk_id_tribe"});
  bio_article.belongsTo(bio_variety, { as: "fk_id_variety_bio_variety", foreignKey: "fk_id_variety"});
  bio_variety.hasMany(bio_article, { as: "bio_articles", foreignKey: "fk_id_variety"});
  bio_article.belongsTo(user, { as: "fk_id_user_user", foreignKey: "fk_id_user"});
  user.hasMany(bio_article, { as: "bio_articles", foreignKey: "fk_id_user"});

  return {
    bio_article,
    bio_class,
    bio_domain,
    bio_family,
    bio_form,
    bio_genus,
    bio_infraclass,
    bio_infrakingdom,
    bio_infraorder,
    bio_infraphylum,
    bio_kingdom,
    bio_microorder,
    bio_microphylum,
    bio_order,
    bio_phylum,
    bio_rameau,
    bio_section,
    bio_species,
    bio_subclass,
    bio_subdomain,
    bio_subfamily,
    bio_subform,
    bio_subgenus,
    bio_subkingdom,
    bio_suborder,
    bio_subphylum,
    bio_subsection,
    bio_subspecies,
    bio_subtribe,
    bio_subvariety,
    bio_superclass,
    bio_superfamily,
    bio_superorder,
    bio_superphylum,
    bio_tribe,
    bio_variety,
    lexique,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

var DataTypes = require("sequelize").DataTypes;
var _bio_article = require("./bio_article");
var _taxon = require("./taxon");
var _classification = require("./classification");
var _lexique = require("./lexique");
var _user = require("./user");

function initModels(sequelize) {
  var bio_article = _bio_article(sequelize, DataTypes);
  var taxon = _taxon(sequelize, DataTypes);
  var classification = _classification(sequelize, DataTypes);
  var lexique = _lexique(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  bio_article.belongsTo(user, { as: "createdBy", foreignKey: "createdBy"});
  user.hasMany(bio_article, { as: "bio_articles", foreignKey: "createdBy"});

  bio_article.belongsTo(user, { as: "modifiedBy", foreignKey: "modifiedBy"});
  user.hasMany(bio_article, { as: "bio_articles", foreignKey: "modifiedBy"});

  bio_article.belongsTo(classification, { as: "classification", foreignKey: "classification"});
  classification.hasMany(bio_article, { as: "bio_articles", foreignKey: "classification"});

  classification.belongsTo(taxon, { as: "taxon", foreignKey: "taxon"});
  taxon.hasMany(classification, { as: "classifications", foreignKey: "taxon"});

  return {
    bio_article,
    classification,
    taxon,
    lexique,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

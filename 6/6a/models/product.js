'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Product extends Model{}
    Product.init({
    name: DataTypes.STRING,
    // price: DataTypes.INTEGER,
    // id_category: DataTypes.INTEGER,
    // id_cashier: DataTypes.INTEGER
  }, { sequelize });
  Product.associate = function(models) {
    // associations can be defined here
    // Product.belongsTo(models.Category, { foreignKey: 'CategoryId' })
    // Product.belongsTo(models.Cashier, { foreignKey: 'CashierId' })
  };
  return Product;
};
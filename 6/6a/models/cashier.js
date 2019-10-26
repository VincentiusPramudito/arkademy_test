'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Cashier extends Model{}
    Cashier.init({
    name: DataTypes.STRING,
  }, { sequelize });
  Cashier.associate = function(models) {
    // associations can be defined here
    Cashier.hasMany(models.Product, {foreignKey: 'CashierId'})
  };
  return Cashier;
};
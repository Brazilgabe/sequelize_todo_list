'use strict';
module.exports = function(sequelize, DataTypes) {
  var contacts = sequelize.define('contacts', {
    username: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // contacts.hasMany(models.lists,{
        //   foreignKey: 'id',
        //   as: 'listkey'
        // })
      }
    }
  });
  return contacts;
};

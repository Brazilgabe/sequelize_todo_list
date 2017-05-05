'use strict';
module.exports = function(sequelize, DataTypes) {
  var Contact = sequelize.define('Contact', {
    userName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Contact.hasMany(models.List,{
          foreignKey: 'user_key',
          as: 'lists'
        })
      }
    }
  });
  return Contact;
};

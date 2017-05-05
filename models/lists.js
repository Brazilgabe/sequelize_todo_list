'use strict';
module.exports = function(sequelize, DataTypes) {
  var List = sequelize.define('List', {
    user_key: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        List.belongsTo(models.Contact,{
          foreignKey: 'user_key',
          onDelete: 'CASCADE'
        })
        List.hasMany(models.Task,{
          foreignKey: 'list_key',
          as: 'tasks'
        })
      }
    }
  });
  return List;
};

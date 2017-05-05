'use strict';
module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define('Task', {
    user_key: DataTypes.INTEGER,
    list_key: DataTypes.INTEGER,
    task: DataTypes.STRING,
    duedate: DataTypes.DATE,
    notes: DataTypes.STRING,
    completed: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        Task.belongsTo(models.List,{
          foreignKey: 'list_key',
          onDelete: 'CASCADE'
        })
      }
    }
  });
  return Task;
};

'use strict';
module.exports = function(sequelize, DataTypes) {
  var tasks = sequelize.define('tasks', {
    user_key: DataTypes.INTEGER,
    list_key: DataTypes.INTEGER,
    task: DataTypes.STRING,
    duedate: DataTypes.DATE,
    notes: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // tasks.belongsTo(models.lists,{
        //   foreignKey: 'list_key',
        //   onDelete: 'CASCADE'
        // })
      }
    }
  });
  return tasks;
};

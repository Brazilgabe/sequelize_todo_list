'use strict';
module.exports = function(sequelize, DataTypes) {
  var lists = sequelize.define('lists', {
    user_key: DataTypes.INTEGER,
    task_key: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // lists.hasMany(models.tasks,{
        //   foreignKey: 'list_key',
        //   as: 'tasks'
        // })
        // lists.hasMany(models.tasks,{
        //   foreignKey: 'id',
        //   as: 'taskkey'
        // })
      }
    }
  });
  return lists;
};



// contactId: {   // <- This is the new section to add
//       type: Sequelize.INTEGER,
//       onDelete: 'CASCADE',
//       references: {
//         model: 'Contacts',
//         key: 'id',
//         as: 'contactId'
//       }
//
//       classMethods: {
//      associate: function(models) {
//        Contact.hasMany(models.Phone,{
//          foreignKey: 'contactId',
//          as: 'phones'

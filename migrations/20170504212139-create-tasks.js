'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_key: {
        type: Sequelize.INTEGER
      },
      list_key: {
        type: Sequelize.INTEGER,
        // onDelete: 'CASCADE',
        // references: {
        //   model: 'lists',
        //   key: 'id',
        //   as: 'list_key'
        // }
      },
      task: {
        type: Sequelize.STRING
      },
      duedate: {
        type: Sequelize.DATE
      },
      notes: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('tasks');
  }
};

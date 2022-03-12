'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('BlogPosts', {
     id: {
       allowNull: false,
       primaryKey: true,
       autoIncrement: true,
       type: Sequelize.INTEGER
     },
     title: {
       allowNull: false,
       type: Sequelize.STRING
     },
     content: {
       allowNull: false,
       type: Sequelize.STRING
     },
     userId: {
       allowNull: false,
       type: Sequelize.INTEGER,
       onUpdate: 'CASCADE',
       onDelete: 'CASCADE',
       references: {
         model: 'Users',
         key: 'id',
        },
      },
      updated: Sequelize.DATE,
      published: Sequelize.DATE,
   });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('BlogPosts')
  }
};

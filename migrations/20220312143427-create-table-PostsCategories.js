'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('PostsCategories', {
     postId: {
      type : Sequilize.INTEGER,
      allowNull: false,
      references: {
        model: 'BlogPosts',
        key : 'id'
      },
     },
     categoryId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Categories',
        key: 'id'
      },
     },
   });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('PostsCategories')
  }
};

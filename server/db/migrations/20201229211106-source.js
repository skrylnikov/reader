'use strict';

module.exports = {
  /**
   * 
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize')} Sequelize 
   */
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('source', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        defaultValue: false,
        allowNull: false,
      },
      type: {
        type: Sequelize.DataTypes.ENUM('rss'),
        allowNull: false,
        defaultValue: false,
      },
      url: {
        type: Sequelize.DataTypes.STRING(256),
        allowNull: false,
        defaultValue: false,
      },
      name: {
        type: Sequelize.DataTypes.STRING(256),
        allowNull: false,
        defaultValue: false,
      },
      logo: {
        type: Sequelize.DataTypes.STRING(256),
        allowNull: false,
        defaultValue: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('source');
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable('translates', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      translated: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      word_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'words',
          key: 'id',
          onDelete: 'CASCADE',
        },
        allowNull: false,
      },
      languages_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'languages',
          key: 'id',
        },
        allowNull: false,
      },
      favorite: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('translates');
  },
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('words', 'project_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'projects',
        key: 'id',
        onDelete: 'CASCADE',
      },
      allowNull: true,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('words', 'project_id');
  },
};

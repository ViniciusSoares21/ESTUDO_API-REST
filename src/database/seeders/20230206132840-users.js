'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        username: 'Gustavo Silva',
        email: 'gustavinho@silva.com',
        password: '123456'
      },
      {
        username: 'Fernanda Correia',
        email: 'fer@correia.com',
        password: '654321', 
      },
      {
        username: 'Caio Tenello',
        email: 'caio@toneliin.com',
        password: '147258', 
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};

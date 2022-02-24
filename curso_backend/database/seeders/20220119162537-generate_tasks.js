'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('tasks', [
        {id:1,description:'Grabar',createdAt:new Date(),updatedAt:new Date()},
        {id:2,description:'Editar',createdAt:new Date(),updatedAt:new Date()},
        {id:3,description:'Subir',createdAt:new Date(),updatedAt:new Date()}
      ], {});
   
  },

  async down (queryInterface, Sequelize) {
  
      await queryInterface.bulkDelete('tasks', null, {});
    
  }
};

//sequelize seed:generate --name example_example 
 
//sequelize db:seed:all

//sequelize db:seed:undo revierte el ultimo seeder
//sequelize db:seed:undo:all revierte todos los seeders
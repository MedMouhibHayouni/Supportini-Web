'use strict';
const  {role}= require('../models')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('roles', [{
      type:'admin'
    },{
      type:'entrainé'
    },{
      type:'coach'
    },{
      type:'propriétaire de la salle'
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('roles', null, {});
  }
};

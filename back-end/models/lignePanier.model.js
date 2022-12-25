const {STRING} = require("sequelize");
module.exports = (sequelize, Sequelize) =>{
    const lignePanier = sequelize.define("lignePanier", {

        quantite :
            {type:Sequelize.INTEGER,
        allowNull :false},
        prix:{
             type:Sequelize.FLOAT,
            allowNull:false
         }},
        {
            timestamps: false,




})
    return lignePanier ;}
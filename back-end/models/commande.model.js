const {STRING} = require("sequelize");
module.exports = (sequelize, Sequelize) =>{
    const commande = sequelize.define("commande", {
        nom_Produit: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    prix:{
            type:Sequelize.FLOAT,
        allowNull: false
    },
    id_user:{
            type:Sequelize.INTEGER,
        allowNull:false
    },
        id_Panier :{
            type:Sequelize.INTEGER,
            allowNull:false
        }},
        {
            timestamps: false,

    });
    return commande;
}
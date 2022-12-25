
module.exports = (sequelize, Sequelize) =>{
    const produit = sequelize.define("produit", {
        nomproduit:{
            type: Sequelize.STRING,
            allowNull: false
        },

        prix :{
            type:Sequelize.INTEGER,
            allowNull:false
        },
        quantite:{
            type:Sequelize.INTEGER,
        allowNull :false,
        },
        imageProduit:{
            type: Sequelize.STRING,
            allowNull: false
        },

        description :{
        type :Sequelize.STRING,
        allowNull: false ,
        }},
        {
            timestamps: false,
            freezeTableName: true,

            }      );
    return produit;
}
const {STRING} = require("sequelize");
module.exports = (sequelize, Sequelize) =>{
    const panier = sequelize.define("panier",
        {
            prix_tot: {
                type:Sequelize.FLOAT,
                allowNull :false
            },},
        {
            timestamps: false,

        })
    return panier;
}
module.exports = (sequelize, Sequelize) => {
    const produitimage = sequelize.define("imagesproduit", {
        imageProduit:{
            type:Sequelize.STRING,
            allowNull: false
        },},
        {
            timestamps: false,
    });
    return produitimage;
}
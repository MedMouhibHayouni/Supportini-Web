module.exports = (sequelize, Sequelize) => {
    const imagesalle = sequelize.define("imagesalledesport", {
        imageVitrine:{
            type:Sequelize.STRING,
            allowNull: false
        },},
        {
            timestamps: false,
    });
    return imagesalle;
}
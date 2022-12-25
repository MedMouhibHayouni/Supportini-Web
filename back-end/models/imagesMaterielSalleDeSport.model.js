module.exports = (sequelize, Sequelize) => {
    const imagemateriel = sequelize.define("imagematerielsalledesport", {
        imageMateriel:{
            type:Sequelize.STRING,
            allowNull: false
        },},
        {
            timestamps: false,
    });
    return imagemateriel;
}
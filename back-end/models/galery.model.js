module.exports = (sequelize, Sequelize) => {
        const Galery = sequelize.define("galerie", {
        image:{
            type:Sequelize.STRING,
            allowNull: false
        },},
            {
                timestamps: false,

    });
    return Galery;
}
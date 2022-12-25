module.exports = (sequelize, Sequelize) => {
    const materialsalle = sequelize.define("materialsalle", {
        nomMaterial:{
            type:Sequelize.STRING,
            allowNull: false
        },
        specialite: {
            type:Sequelize.STRING,
            allowNull:false
        },
        quantite: {
            type:Sequelize.INTEGER,
            allowNull:true
        },
        description: {
            type:Sequelize.STRING,
            allowNull:false
        },
        imageVitrine: {
            type:Sequelize.STRING,
            allowNull:true
        },},
        {
            timestamps: false,
    });
    return materialsalle;
}
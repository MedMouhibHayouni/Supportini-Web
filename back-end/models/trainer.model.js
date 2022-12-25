module.exports = (sequelize, Sequelize) => {
    const Trainer = sequelize.define("entrainees", {
        age:{
            type:Sequelize.INTEGER,
            allowNull: false
        },
        taille:{
            type:Sequelize.INTEGER,
            allowNull: false
        },
        poids:{
            type:Sequelize.INTEGER,
            allowNull: false
        },
        sexe:{
            type:Sequelize.STRING,
            allowNull: false
        }},
        {
            timestamps: false,
    });
    return Trainer;
}
module.exports = (sequelize, Sequelize) => {
    const Suivi = sequelize.define("suivi", {
    nom:{
        type:Sequelize.STRING,
        allowNull: false
    },
    prenom:{
        type:Sequelize.STRING,
        allowNull: false
    },
    age:{
        type:Sequelize.INTEGER,
        allowNull: false
    },
    poids:{
        type:Sequelize.INTEGER,
        allowNull: false
    },
    taille:{
        type:Sequelize.INTEGER,
        allowNull: false
    },
    imc:{
        type:Sequelize.DOUBLE,
        allowNull: false
    },
    date_suivi:{
        type:Sequelize.DATE,
        allowNull: false
    },},
    {
        timestamps: false,
        freezeTableName: true
    });
return Suivi;
}

module.exports = (sequelize, Sequelize) =>{
    const annonce = sequelize.define("annonce", {


          titre:{
              type: Sequelize.STRING,
              allowNull: false
          },
        discipline:{
            type: Sequelize.STRING,
            allowNull: false
        },

        prix:{
            type: Sequelize.INTEGER,
            allowNull: false
        },

        type:{
            type: Sequelize.STRING,
            allowNull: true
        },
        rue: {
            type:Sequelize.STRING,
            allowNull:false
        },
        codePostal: {
            type:Sequelize.STRING,
            allowNull:false
        },
        ville:{
            type: Sequelize.STRING,
            allowNull: true
        },
        description:{
            type: Sequelize.STRING

        },
        image:{
            type: Sequelize.STRING,
            allowNull: false
        },
        capacite:{
            type: Sequelize.INTEGER,
            allowNull: false
        },

        dateDebut: {
            type: Sequelize.DATEONLY,
        },
        dateFin: {
            type: Sequelize.DATEONLY,
        }},
        {
            timestamps: false,
            freezeTableName: true
    });
    return annonce;
}
module.exports = (sequelize, Sequelize) => {
    const sallesport = sequelize.define("salledessport", {
        nomSalle:{
            type:Sequelize.STRING,
            allowNull: true
        },
        numTel: {
            type:Sequelize.INTEGER,
            allowNull:true
        },
        ville: {
            type:Sequelize.STRING,
            allowNull:true
        },
        rue: {
            type:Sequelize.STRING,
            allowNull:true
        },
        codePostal: {
            type:Sequelize.STRING,
            allowNull:true
        },
            description: {
            type:Sequelize.STRING,
            allowNull:true
        },
        prix: {
            type:Sequelize.FLOAT,
            allowNull:true
        },
       duration:{
             type:Sequelize.STRING,
             allowNull:true
            },
        url: {
            type:Sequelize.STRING,
            allowNull: true
            
        },
        imageVitrine: {
            type:Sequelize.STRING,
            allowNull: true

        },},
    {
        timestamps: false,
    });
    return sallesport;
}

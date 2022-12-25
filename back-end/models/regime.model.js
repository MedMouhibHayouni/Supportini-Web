
module.exports = (sequelize, Sequelize) =>{
    const regime = sequelize.define("regime", {
        nom:{
            type: Sequelize.STRING,

        },
        type:{
            type: Sequelize.STRING,

        },
        nbrkg:{
            type: Sequelize.INTEGER,

        },
        petidej:{
            type: Sequelize.STRING,

        },
        dejeuner:{
            type: Sequelize.STRING,

        },
        dinner:{
            type: Sequelize.STRING,

        },},
        {
            timestamps: false,
            freezeTableName: true
    })
return regime
}
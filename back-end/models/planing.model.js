module.exports = (sequelize, Sequelize) =>{
    const planing = sequelize.define("planing", {



        discipline:{
            type: Sequelize.STRING,

        },
        CoachingDate: {
            type: Sequelize.DATEONLY,
        },
        heureDebut: {
            type: Sequelize.INTEGER,
        },
        heureFin: {
            type: Sequelize.INTEGER,
        }},
        {
            timestamps: false,


    });
    return planing;
}
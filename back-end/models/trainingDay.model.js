
module.exports = (sequelize, Sequelize) =>{
    const trainingday = sequelize.define("trainingday", {

        day: {
            type: Sequelize.DATEONLY,
        },
        heureDebut: {
            type: Sequelize.INTEGER,
        },
        heureFin: {
            type: Sequelize.INTEGER,
        },
        discipline:{
            type: Sequelize.STRING,
            allowNull: false
        }},
        {
            timestamps: false,
    });
    return trainingday;
}
module.exports = (sequelize, Sequelize) =>{
    const eventsModel = sequelize.define("events", {
        start:{
            type: Sequelize.DATEONLY,

        },
        end: {
            type: Sequelize.DATEONLY,
        },
        title: {
            type: Sequelize.STRING,
        },},
        {
            timestamps: false,
            freezeTableName: true
        });
    return eventsModel;
    }
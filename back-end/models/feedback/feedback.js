module.exports = (sequelize, Sequelize) => {
    const Suivi = sequelize.define("feedback", {
    feedback:{
        type:Sequelize.STRING,
        allowNull: false
    },
   },
    {
        timestamps: false,
        freezeTableName: true
    });
return Suivi;
}
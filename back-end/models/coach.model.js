const User = require("./user.model")

module.exports = (sequelize, Sequelize) => {
    const Coach = sequelize.define("coachs", {
        specialite:{
            type:Sequelize.STRING,
            allowNull: false
        }},
        {
            timestamps: false,
        // ,
        // fk_idUser: {
        //     type:Sequelize.INTEGER,
        //     allowNull:false
        // }
    });


    return Coach;
}
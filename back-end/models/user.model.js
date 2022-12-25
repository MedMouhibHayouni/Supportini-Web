
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("utilisateurs", {
        nom: {
            type: Sequelize.STRING,
            allowNull: false
        },
        prenom: {
            type: Sequelize.STRING,
            allowNull: false
        },
        cin: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        phone : {
            type:Sequelize.STRING,
            allowNull: false
        },
        image_name:{
            type:Sequelize.STRING,
            defaultValue: "default.png",
        },
        status:{
            type:Sequelize.INTEGER,
            allowNull: false,
                defaultValue: 1,
        },
        tokenReset : {
            type:Sequelize.STRING,
            allowNull: true

        },
        fk_idRole: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 2
        }},
        {
            timestamps: false,
              freezeTableName: true

    });

    return User;
};
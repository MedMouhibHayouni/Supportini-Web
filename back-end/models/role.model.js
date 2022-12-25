module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("roles", {
        type:{
            type:Sequelize.STRING,
        }},
        {
            timestamps: false,
    });
    return Role;
}
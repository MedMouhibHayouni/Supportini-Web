module.exports = (sequelize, Sequelize) => {
    const categorie = sequelize.define("categorie", {
        nom: {
            type: Sequelize.STRING,
            allowNull: false,
        }},
        {
            timestamps: false,
            freezeTableName: true
    });
    return categorie;
}
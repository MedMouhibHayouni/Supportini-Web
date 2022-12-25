
module.exports = (sequelize, Sequelize) => {
    const ResetPassword = sequelize.define("reset_password", {
            code: {
                type: Sequelize.STRING,
                allowNull: false
            },
            date_time: {
                type: 'TIMESTAMP',
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                allowNull: false
            },
            date_exp: {
                type: 'TIMESTAMP',
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                allowNull: false
            }},
        {
            timestamps: false,
        });

    return ResetPassword;
};
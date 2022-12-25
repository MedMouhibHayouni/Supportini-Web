const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.galery=require("./galery.model.js") (sequelize, Sequelize);
db.trainer=require("./trainer.model.js") (sequelize, Sequelize);
db.coach=require("./coach.model.js")(sequelize, Sequelize);
db.role = require("./role.model.js")(sequelize, Sequelize);
db.user = require("./user.model.js")(sequelize, Sequelize);

db.suiviModel=require("./suiviModels/suivi.js") (sequelize, Sequelize);
db.feedbackModel=require("./feedback/feedback.js") (sequelize, Sequelize);

db.sallesport = require("./salledessport.model")(sequelize,Sequelize);
db.materialsalle = require("./materialsalle.model")(sequelize,Sequelize);
db.imagesalle = require("./imagesalledesport.model")(sequelize,Sequelize);
db.annonce= require("./annonce.model")(sequelize,Sequelize);
db.regime=require("./regime.model")(sequelize,Sequelize);
db.planing=require("./planing.model")(sequelize,Sequelize);
db.trainingday=require("./trainingDay.model")(sequelize,Sequelize);
db.eventsModel=require("./Events/events.model")(sequelize,Sequelize);




db.categorie=require("./categorie.model")(sequelize,Sequelize);
db.produit=require("./produit.model")(sequelize,Sequelize);
db.produitimg=require("./produitimg.model")(sequelize,Sequelize);
db.lignePanier=require("./lignePanier.model")(sequelize,Sequelize);
db.panier=require("./panier.model")(sequelize,Sequelize);
db.reset = require("./resetPassword")(sequelize,Sequelize);
db.galery.belongsTo(db.user,{
    foreignKey:"fk_idUser"
})
db.user.hasMany(db.galery,{
    foreignKey:"fk_idUser"
})
db.user.hasMany(db.reset,{
    foreignKey:"fk_idUser"
})
db.reset.belongsTo(db.user,{
    foreignKey:"fk_idUser"
})
db.suiviModel.belongsTo(db.trainer,{
    foreignKey:"fk_id_entr"
})
db.trainer.hasMany(db.suiviModel, {
    foreignKey:"fk_id_entr"
    })

db.suiviModel.belongsTo(db.coach,{
    foreignKey:"fk_id_coach"
})

db.coach.hasMany(db.suiviModel, {
    foreignKey:"fk_id_coach"
})

db.feedbackModel.belongsTo(db.suiviModel,{
    foreignKey:"id_suivi"
})

db.suiviModel.hasMany(db.feedbackModel,{
    foreignKey:"id_suivi"
})
db.coach.belongsTo(db.user,{
    foreignKey:"fk_idUser"
})
db.user.hasMany(db.coach,{
    foreignKey:"fk_idUser",

})
db.role.hasMany(db.user,
    {
        foreignKey:"fk_idRole"
    })
db.user.belongsTo(db.role,
    {
        foreignKey: "fk_idRole",
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
        defaultValue: 2
    })
db.trainer.belongsTo(db.user,{
    foreignKey:"fk_idUser"
})
db.user.hasMany(db.trainer,{
    foreignKey:"fk_idUser"
})

db.sallesport.belongsTo(db.user, {
    foreignKey: 'fk_idUser'
});
db.user.hasMany(db.sallesport, {
    foreignKey: 'fk_idUser',
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
});

db.imagesalle.belongsTo(db.sallesport, {
    foreignKey: 'fk_idsallesport'});
db.sallesport.hasMany(db.imagesalle,{
    foreignKey: 'fk_idsallesport'});

db.materialsalle.belongsTo(db.sallesport,{
    foreignKey: 'fk_idSalle'});
db.sallesport.hasMany(db.materialsalle,{
    foreignKey: 'fk_idSalle'});





db.annonce.belongsTo(db.coach,{
    foreignKey:'fk_idcoach'
});
db.coach.hasMany(db.annonce,{
    foreignKey:'fk_idcoach'
})
db.regime.belongsTo(db.annonce,{
    foreignKey:'fk_idannonce'
});
db.annonce.hasMany(db.regime,{
    foreignKey:'fk_idannonce'
})
db.planing.belongsTo(db.trainer,{
    foreignKey:'fk_idtrainer'
})
db.trainer.hasMany(db.planing,{
    foreignKey:'fk_idtrainer'
})
db.planing.belongsTo(db.annonce,{
    foreignKey:'fk_idannonce'
})
db.annonce.hasMany(db.planing,{
    foreignKey:'fk_idannonce'
})

db.planing.belongsTo(db.coach,{
    foreignKey:'fk_idcoach'
})
db.coach.hasMany(db.planing,{
    foreignKey:'fk_idcoach'
})

db.eventsModel.belongsTo(db.user,{
    foreignKey:'fk_idUser'
})
db.user.hasMany(db.eventsModel,{
    foreignKey:'fk_idUser'
})




db.trainingday.belongsTo(db.annonce,{
    foreignKey:'fk_idannonce'
})
db.annonce.hasMany(db.trainingday,
    {
        foreignKey:'fk_idannonce'  ,  onDelete: 'CASCADE'
    })

db.trainingday.belongsTo(db.coach,{
    foreignKey:'fk_idcoach'
});
db.coach.hasMany(db.trainingday,{
    foreignKey:'fk_idcoach'
})


///////////////////////////////////////////

db.produit.belongsTo(db.categorie,{

});
db.categorie.hasMany(db.produit,{

} );
db.lignePanier.belongsTo(db.produit,{

});
db.produit.hasMany(db.lignePanier,{

});
db.lignePanier.belongsTo(db.panier,{

});
db.panier.hasMany(db.lignePanier,{

});
db.panier.belongsTo(db.user,{

});
db.user.hasOne(db.panier,{
});
db.produit.hasMany(db.produitimg,{

});
db.produitimg.belongsTo(db.produit,{

});


module.exports = db
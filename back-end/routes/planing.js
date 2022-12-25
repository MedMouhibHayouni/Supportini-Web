var express = require('express');
var router = express.Router();
const {userAuth
    ,

    checkRole,
    serializeUser
} = require("../utils/Auth");
const planing= require('../controllers/planing/planingController')



 router.get('/getPlanningByAnnonce/:annonceId',planing.getAllPlaningByAnnonce)

 router.get('/affichePlaning',planing.getAll)

router.get('/getsevenDayOfTrainer',userAuth,planing.getsevenDayOfTrainer)
router.get('/getsevenDayOfCoach',userAuth,planing.getsevenDayOfCoach)

// router.get('/getAllPlaningOfTrainer',userAuth,planing.getAllPlaningByIdEntr)
//
//
// router.get('/afficheTrainer/:annonceId',planing.getTrainerByAnnonce)

module.exports = router;
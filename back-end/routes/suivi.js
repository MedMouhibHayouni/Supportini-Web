var express = require('express');
var router = express.Router();
const suiviModel= require('../controllers/suivi/suiviController');
const {userAuth
    ,

    checkRole,
    serializeUser
} = require("../utils/Auth");
/* Suivi listing. */
router.get('/affiche',suiviModel.getAllSuivi);
router.get('/afficheAsc',userAuth,suiviModel.getAllSuiviAscendant);
router.get('/afficheById/:suiviId',suiviModel.getOneSuivi);
router.get('/afficheByEntr',userAuth,suiviModel.getByEntrainer);
router.get('/afficheByIdEntr/:idEntr',suiviModel.getByIdEntrainer);
router.get('/afficheOneByEntr',userAuth,suiviModel.getOneByEntrainer);
router.get('/afficheByCoach',userAuth,suiviModel.getByCoach);
router.get('/afficheFirstSuivi',userAuth,suiviModel.getFirstSuiviByCoach)
router.get('/afficheEntr',userAuth,suiviModel.getFirstSuiviByCoach)
router.get('/findSuiviByNameEntr?',userAuth,suiviModel.findEntrNameByLettreForCoach)
router.get('/afficheUserBySuivi/:idCoach',suiviModel.getUserBySuivi)
router.get('/afficheTrainerByUser',userAuth,suiviModel.getCurrentTrainer);

/* Suivi Creation */
//router.post('/create',suiviModel.createSuivi);
router.post('/create/:coachId',userAuth,suiviModel.createSuivi);

/* Suivi Delete */
router.delete('/delete/:suiviId',suiviModel.deleteSuivi);

/* Suivi Update */
router.put('/update/:suiviId',suiviModel.updateSuivi);

module.exports = router;
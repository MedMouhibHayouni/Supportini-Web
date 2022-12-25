var express = require('express');
var router = express.Router();
//const validate = require('../middlewares/validatorGym')
const annonce= require('../controllers/annonce/annonceController');
const {uploadAnnonce} = require("../middlewares/UploadImageAnnonce");
const {
    userAuth,

    checkRole,
    serializeUser
} = require("../utils/Auth");


/* CREATE annonce listing. */
router.post('/create',userAuth,uploadAnnonce, annonce.createAnnonce);
router.get('/participer/:idAnnonce',userAuth, annonce.participer);
router.get('/affiche', annonce.getAllAnnonces);
router.get('/afficheById/:annonceId', annonce.getOneAnnonce);
router.delete('/deleteById/:annonceId', annonce.deleteAnnonce);
router.put('/update/:annonceId', annonce.updateAnnonce);
router.get('/getSortedByPriceDesc', annonce.getSortedByPriceDesc);
router.get('/getSortedByPriceAsc', annonce.getSortedByPriceAsc);
router.get('/getdByVille/:ville', annonce.getByVille);
router.put('/sinscrire/:annonceId', annonce.incremeterInscription);
router.get('/getAnnonceByCoach',userAuth, annonce.getAnnonceByCoach);
router.get('/affichetopten', annonce.gettoptenAnnonce);
router.post('/filter', annonce.filter);
router.get('/afficheTrainerByAnnonce/:annonceId', annonce.getTrainerByAnnonce);
router.get('/getCoachInformationByIdAnnonce/:annonceId', annonce.getCoachInformationByIdAnnonce);


module.exports = router;
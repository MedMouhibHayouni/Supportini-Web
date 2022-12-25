var express = require('express');
var router = express.Router();

const panier= require('../controllers/panier/panierController')
const {
    userAuth,

    checkRole,

    serializeUser
} = require("../utils/Auth");
/* CREATE panier listing. */
router.post('/create/:id',userAuth, panier.createPanier);
router.get('/affiche', userAuth,panier.getPanier);
// router.get('/afficheById',userAuth, panier.getOnePanier);
router.delete('/delete/:idLignePanier',userAuth, panier.deletePanier);
router.put('/update/: panierid', panier.updatePanier);
router.post('/updatequantite/:idPro',panier.updatequantite);
module.exports = router;

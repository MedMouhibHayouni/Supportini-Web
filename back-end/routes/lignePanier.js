var express = require('express');
var router = express.Router();

const lignePanier= require('../controllers/lignePanier/lignePanierController')

/* CREATE lignePanier listing. */
router.post('/create', lignePanier.createLignePanier);
router.get('/affiche', lignePanier.getAllLignePanier);
router.get('/afficheById/: Lpanierid', lignePanier.getOneLignePanier);
router.delete('/delete/: Lpanierid', lignePanier.deleteLignePanier);
router.put('/update/: Lpanierid', lignePanier.updateLignePanier);
module.exports = router;

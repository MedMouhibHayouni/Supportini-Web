var express = require('express');
var router = express.Router();

const commande= require('../controllers/commande/commandeController')

/* CREATE commande listing. */
router.post('/create', commande.createCommande);
router.get('/affiche', commande.getAllCommande);
router.get('/afficheById/:  commandeid', commande.getOneCommande);
router.delete('/delete/:  commandeid', commande.deleteCommande);
router.put('/update/:  commandeid', commande.updateCommande);
module.exports = router;

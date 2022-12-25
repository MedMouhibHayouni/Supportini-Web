var express = require('express');
var router = express.Router();

const categorie= require('../controllers/categorie/categorieController')

/* CREATE categorie listing. */
router.post('/create',categorie.createCategorie);
router.get('/affiche', categorie.getAllCategorie);
router.get('/afficheById/:id', categorie.getOneCategorie);
router.delete('/:categorieid', categorie.deleteCategorie);
router.put('/update/:categorieid', categorie.updateCategorie);
module.exports = router;

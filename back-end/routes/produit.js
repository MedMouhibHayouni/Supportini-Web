var express = require('express');
var router = express.Router();

const {
    userAuth,

    checkRole,
    serializeUser
} = require("../utils/Auth");
const produit= require('../controllers/produit/produitController')
const {uploadImageProduit} = require("../middlewares/ImagesProduit");



/* CREATE produit listing. */
router.post('/create',userAuth,uploadImageProduit, produit.createProduct);
router.get('/affiche', produit.getAllProduct);
router.get('/afficheById/:id', produit.getOneProduct);
router.delete('/delete/:id', produit.deleteProduct);
router.put('/update/:id', produit.updateProduct);

router.get('/get-sorted-desc-price' , produit.getSortedProdWithPriceDesc);
router.get('/get-sorted-asc-price' , produit.getSortedProdWithPriceAsc);
 router.get( '/search?', produit.findProdNameByLettre);
 router.get('/afficheImages/:id',produit.getProduitImages)
module.exports = router;

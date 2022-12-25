var express = require('express');
var router = express.Router();
const validate = require('../middlewares/validatorGym')
const {upload} = require ('../middlewares/UploadImage')
const gym= require('../controllers/gym/gymController')
const {userAuth,
    checkRole,
    serializeUser
} = require("../utils/Auth");
const {uploadGym} = require("../middlewares/UploadImageGym");
/* CREATE users listing. */
router.post('/create',userAuth,upload,gym.createGym);
router.get('/affiche', gym.getAllGym);
 router.get('/afficheById/:id', gym.getGym);
router.delete('/delete/:id', gym.deleteGym);
router.put('/update/:id', gym.updateGym);
router.get('/get-sorted-desc-price', gym.getSortedGymWithPriceDesc);
router.get('/get-sorted-asc-price', gym.getSortedGymWithPriceAsc);
router.get('/get-gym-par-name', gym.getGymByFullName);
router.get('/get-gym-par-lettre-name?', gym.findGymNameByLettre)
router.get('/afficheByIdUser',userAuth,gym.getAllGymWithIdUser)
router.get('/afficheLastFiveGum',gym.gettLastFiveGym)
router.post('/updateImageGym/:id',uploadGym,gym.postImageGym)
router.get('/imagesGym/:id',gym.getGymImages)
module.exports = router;
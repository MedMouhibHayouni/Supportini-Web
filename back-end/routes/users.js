var express = require('express');
var router = express.Router();
const usersControllers = require('../controllers/user/userController.js');
const {uploadGaleryUser} = require("../middlewares/GaleryUser");
const {
    userAuth,

    checkRole,
    serializeUser
} = require("../utils/Auth");
const validate = require('../middlewares/validatorRegister')
const {uploadUser} = require("../middlewares/UploadImageUser");
/* GET Current User listing. */
router.get('/getcurrent', userAuth, usersControllers.getCurrentUser)
/* GET users listing. */
router.get('/get', userAuth, checkRole([1]), usersControllers.getAllUsers);
/* GET user  with profil listing. */
router.get('/getOwnerProfil', userAuth, usersControllers.getUserWithProfile)
/* ban user */
router.get('/ban/:id', userAuth, checkRole([1]), usersControllers.banUser)
/* create profil */
router.post('/create-profile/:check', usersControllers.createProfile)
/*get user by id role */
router.get('/getByRole/:idRole', userAuth, checkRole([1]), usersControllers.getByRole)
/* update profil */
router.put('/update_profile', userAuth, usersControllers.updateProfile)
/* update  user */
router.put('/update', userAuth, validate, usersControllers.updateUser)
/* add Image Profil*/
router.post("/addImage",userAuth,uploadUser,usersControllers.postImageProfil)
/* add Image Profil*/
router.post("/updateImageUser/:id",userAuth, checkRole([1]),uploadUser,usersControllers.updateAdminImageProfil)
/*add img galery*/
router.post('/addGalery', userAuth, uploadGaleryUser, usersControllers.addGalery)
/*add img galery*/
router.delete('/delete-image/:id', userAuth, usersControllers.deleteImageGallery)

/* get id of coach by id of user*/
router.get('/getIdCoachByIdUser',userAuth,usersControllers.getIdCoachByIdUser)


router.put('/update-specialite',userAuth,usersControllers.updateProfile)

router.get('/getCoachInformationById/:idCoach',usersControllers.getCoachInformation)

module.exports = router;

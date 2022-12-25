var express = require('express');
var router = express.Router();
const validate = require('../middlewares/validatorRegister')
const validateSendLink= require('../middlewares/validatorSendLink')
const validateReset=require('../middlewares/validateReset')
const auth= require('../controllers/auth/index')
const {uploadUser} = require("../middlewares/UploadImageUser");
/* CREATE users listing. */
router.post('/register',validate, auth.register);
router.post('/login',auth.login)
router.post ("/password_reset",validateSendLink,auth.sendLink)
router.post('/password_reset/:userId/:token',validateReset,auth.passwordReset)

module.exports = router;
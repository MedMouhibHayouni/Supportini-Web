var express = require('express');
const email = require("../controllers/SendEmail/SendMail");
var router = express.Router();
const {
    userAuth,

    checkRole,
    serializeUser
} = require("../utils/Auth");


router.post('/send', email.envoyer);
router.post('/sendtovisitor',userAuth, email.sendMailToVisitor);

module.exports = router;
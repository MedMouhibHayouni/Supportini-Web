var express = require('express');
var router = express.Router();
const trainingday= require('../controllers/trainingdate/trainingdateController')


router.post('/create/:annonceId', trainingday.update);







module.exports = router;
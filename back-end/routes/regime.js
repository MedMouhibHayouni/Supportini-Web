var express = require('express');
var router = express.Router();
//const validate = require('../middlewares/validatorGym')
const regime= require('../controllers/regime/regimeController')

/* CREATE annonce listing. */
router.post('/create/:id', regime.createRegime);

router.get('/afficheById/:coachingId', regime.getOneRegime);
router.delete('/delete/:regimeId', regime.deleteRegime);
router.put('/update/:regimeId', regime.updateRegime);
module.exports = router;
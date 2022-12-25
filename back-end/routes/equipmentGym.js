var express = require('express');
var router = express.Router();

const equipmentGym= require('../controllers/equipmentGym/equipmentGymController')
const {uploadMateriel} = require("../middlewares/UploadImageMateriel");


router.post('/create/:id',uploadMateriel, equipmentGym.createEquipmentGym);
router.post('/delete/:id', equipmentGym.deleteEquipmentGym);
router.put('/update/:id', equipmentGym.updateEquipmentGym);
router.get('/affiche/:id',equipmentGym.getEquipementGym);
module.exports = router;
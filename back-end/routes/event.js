var express = require('express');
var router = express.Router();
const eventsController= require('../controllers/Events/eventsController');
const {userAuth
    ,

    checkRole,
    serializeUser
} = require("../utils/Auth");


router.get('/afficheEventsByEntr',userAuth,eventsController.getEventByEntrainer);
router.get('/getEventToDelete',userAuth,eventsController.getEventToDelete);
router.post('/createEvent',userAuth,eventsController.createEvents);
router.delete('/deleteEvent/:eventId',eventsController.deleteEvent);

module.exports = router;
var express = require('express');
var router = express.Router();
const feedback= require('../controllers/feedback/feedbackController');

/* Feedback listing. */
router.get('/affiche',feedback.getAllFeedback);
router.get('/afficheById/:feedbackId', feedback.getOneFeedback);
router.get('/getBySuivi/:suiviId',feedback.getBySuivi);
router.get('/getFeedbackBySuivi/:idSuivi',feedback.getOneFeedbackSuivi)

/* Feedback Creation */
router.post('/create',feedback.createfeedback);
router.post('/createFeedbackSuivi/:suiviId',feedback.createfeedbackSuivi);

/* Feedback Delete */
router.delete('/deleteById/:feedbackId', feedback.deleteFeedback);

/* Feedback Update */
router.put('/update/:feedbackId', feedback.updateFeedback);

module.exports = router;
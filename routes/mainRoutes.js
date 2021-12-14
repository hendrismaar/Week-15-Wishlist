const express = require('express');
const mainController = require('../controllers/mainController');

const router = express.Router();

router.get('/', mainController.getMainPage);

router.get('/getdate', mainController.getDate);

router.get('/weekday', mainController.getWeekday);

router.post('/', mainController.postWish)
router.post('/deletewish', mainController.deleteWish)

module.exports = router;

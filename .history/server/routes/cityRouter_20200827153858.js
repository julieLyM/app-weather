const router = require('express').Router();
const weatherCityCtrl = require('../controllers/weatherCityCtrl');

router.get('/', weatherCityCtrl.test);
router.get('/', weatherCityCtrl.weatherByCity);
router.get('/cityDays', weatherCityCtrl.weatherFiveDays);

module.exports = router;

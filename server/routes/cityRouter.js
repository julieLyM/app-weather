const router = require('express').Router();
const weatherCityCtrl = require('../controllers/weatherCityCtrl');

router.get('/', weatherCityCtrl.weatherByCity);
router.get('/forecast', weatherCityCtrl.weatherFiveDays);

module.exports = router;

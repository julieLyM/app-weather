const router = require('express').Router();
const weatherCityCtrl = require('../controllers/weatherCityCtrl');


router.get('/', )
router.get('/city', weatherCityCtrl.weatherByCity);
router.get('/cityDays', weatherCityCtrl.weatherFiveDays);

module.exports = router;

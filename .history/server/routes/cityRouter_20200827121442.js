const router = require('express').Router();
const weatherCityCtrl = require('../controllers/weatherCityCtrl');

router.get('/city', weatherCityCtrl.weatherByCity);
router.get('/citiesDays', weatherCityCtrl.weatherFiveDays);

module.exports = router;

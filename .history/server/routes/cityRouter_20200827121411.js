const router = require('express').Router();

const {
  weatherByCity,
  weatherFiveDays,
} = require('./controllers/weatherCityCtrl');
const weatherCityCtrl = require('../controllers/weatherCityCtrl');

router.get('/', )
router.get('/city',weatherCityCtrl.weatherByCity )
router.get('/cityDays',weatherFiveDays.weatherByCity )


module.exports = router;

const router = require('express').Router();

const {
  weatherByCity,
  weatherFiveDays,
} = require('./controllers/weatherCityCtrl');
const weatherCityCtrl = require('../controllers/weatherCityCtrl');

router.get('/', )
router.get('/city',weatherCityCtrl.weatherByCity )


module.exports = router;

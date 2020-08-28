const router = require('express').Router();
const weatherCityCtrl = require('../controllers/weatherCityCtrl');
router.get('/', (req, res) => {
  res.send('test');
});
router.get('/city', weatherCityCtrl.weatherByCity);
router.get('/cityDays', weatherCityCtrl.weatherFiveDays);

module.exports = router;

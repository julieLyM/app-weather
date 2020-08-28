const router = require('express').Router();

const {
  getWeatherByCity,
  getWeatherForFiveDaysByCity,
} = require('./../stores/weather');
router.get('/', async (req, res) => {
  const { data } = await getWeatherByCity(req.query.q);
  res.send(data);
});

router.get('/forecast', async (req, res) => {
  const { data } = await getWeatherForFiveDaysByCity(req.query.q);
  res.send(data);
});

module.exports = router;

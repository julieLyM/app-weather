const router = require('express').Router();

const {
  weatherByCity,
  weatherFiveDays,
} = require('./controllers/weatherCityCtrl');

module.exports = router;

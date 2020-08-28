const router = require('express').Router();

const { weatherByCity,
  weatherFiveDays} = require('./controllers/')

module.exports = router;

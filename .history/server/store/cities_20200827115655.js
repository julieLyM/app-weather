const express = require('express');
const router = express.Router();
const axios = require('axios');

const {
  getWeatherByCity,
  getWeatherForFiveDaysByCity,
} = require('./../stores/weather');

  const { data } = await getWeatherByCity(req.query.q);
  res.send(data);
});

function 
  const { data } = await getWeatherForFiveDaysByCity(req.query.q);
  res.send(data);
});

const express = require('express');
const router = express.Router();
const axios = require('axios');

  const { data } = await axios.get()u
  res.send(data);
});

function getWeatherForFiveDaysByCity
  const { data } = await getWeatherForFiveDaysByCity(req.query.q);
  res.send(data);
});

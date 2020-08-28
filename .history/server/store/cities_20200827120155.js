const axios = require('axios');
const apiKey = require('./auth');

const URL = `http://api.openweathermap.org/data/2.5`;

const getWeather = async (query) => {
  return await axios.get(`${URL}/weather`, {
    params: { q: query, units: 'metric', APPID: apiKey },
  });
};

const getWeather = async query => {
  return await axios.get(`${URL}/forecast`, {
    params: { q: query, units: 'metric', APPID: apiKey },
  });
};

module.exports = { getWeatherByCity, getWeatherForFiveDaysByCity };

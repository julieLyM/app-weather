const axios = require('axios');
const apiKey = require('./auth');

const URL = `http://api.openweathermap.org/data/2.5`;

const getWeatherByCity = async (query) => {
  return await axios.get(`${URL}/weather${query}`, {
    params: { q: query, units: 'metric', APPID: apiKey },
  });
};

const getWeatherFiveDays = async (query) => {
  return await axios.get(`${URL}/forecast`, {
    params: { q: query, units: 'metric', APPID: apiKey },
  });
};

module.exports = { getWeatherByCity, getWeatherFiveDays };

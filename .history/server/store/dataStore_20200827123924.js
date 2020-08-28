const axios = require('axios');
const apiKey = require('./auth');

const URL = `http://api.openweathermap.org/data/2.5`;

const getWeatherByCity = async (query) => {
  return await axios.get(`${URL}/weather?q=paris&appid=5db8aec4fc00d9ceb7ddb31865f39e46`, {
    params: { q: query, units: 'metric', APPID: apiKey },
  });
};

const getWeatherFiveDays = async (query) => {
  return await axios.get(`${URL}/forecast`, {
    params: { q: query, units: 'metric', APPID: apiKey },
  });
};

module.exports = { getWeatherByCity, getWeatherFiveDays };

const axios = require('axios');
const apiKey = require('./auth');

const URL = `http://api.openweathermap.org/data/2.5`;

const getWeatherByCity = async (query) => {
  const { data } = await axios.get(
    `${URL}/weather?q=${query}&units=metric&appid=${apiKey}`
  );
  return data;
};

const getWeatherFiveDays = async (query) => {
  return await axios.get(`${URL}/forecast`, {
    params: { q: query, units: 'metric', APPID: apiKey },
  });
};

module.exports = { getWeatherByCity, getWeatherFiveDays };

const axios = require('axios');
const apiKey = require('./auth');

const URL = `http://api.openweathermap.org/data/2.5`;

const getWeatherByCity = async query => {
  return await axios.get(`${URL}/weather`, {
    params: { q: query, units: 'metric', appid: apiKey },
  });
};

const fetchBrandsByTheme = async theme => {
  return await axios.get(`${BASE_URL}/brand/search`, {
    params: { query: theme, appId: auth.appId, appKey: auth.appKey },
  });
};

const getWeatherFiveDays = async (query) => {
  // return await axios.get(
  //   `${URL}/forecast?q=${query}&units=metric&appid=${apiKey}`
  // );
};

module.exports = { getWeatherByCity, getWeatherFiveDays };

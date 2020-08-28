const axios = require('axios');
const apiKey = require('./auth');

const URL = `http://api.openweathermap.org/data/2.5`;

const getWeather = async (query) => {
  const {
    data: {
      data: { results: data },
    },
    return await axios.get(`${URL}/weather`, {
      params: { q: query, units: 'metric', APPID: apiKey },
    });
  });
  return data;
};

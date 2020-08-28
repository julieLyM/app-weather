const axios = require('axios');
const apiKey = require('./auth');

const URL = `http://api.openweathermap.org/data/2.5`;

const getCharacters = async (page, offset) => {
  const {
    data: {
      data: { results: data },
    },
  } = await axios.get(`http://gateway.marvel.com/v1/public/characters`, {
    params: {
      ...generatorMarvelAuth(),
      offset: page,
    },
  });
  return data;
};

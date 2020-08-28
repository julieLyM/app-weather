const express = require('express');
const router = express.Router();
const axios = require('axios');

  const { data } = await axios.get(url)
  res.send(data);
});

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
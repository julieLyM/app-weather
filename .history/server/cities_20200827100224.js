const express = require('express');
const router = express.Router();
const axios = require('axios');
const api_key = require('./auth');
const url = 'http://api.openweathermap.org/data/2.5/';

router.get('/', async function (req, res) {
  const { data } = await axios.get(
    `${url}weather?&appid=5db8aec4fc00d9ceb7ddb31865f39e46&units=metric`,
    {
      params: {
        q: req.query.q,
      },
    }
  );
  console.log('test');
  res.send(data);
});

module.exports = router;

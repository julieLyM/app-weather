const dataStore = require('../store/dataStore');

const weatherByCity = async (req, res) => {
  const { query } = req.query.q;
  console.log(req.query.q);
  try
  const data  = await dataStore.getWeatherByCity(query);
  console.log('ctrl ');
  res.send(data);
};

const weatherFiveDays = async (req, res) => {
  const { query } = req.query;
  const data = await dataStore.getWeatherFiveDays(query);
  res.send(data);
};

module.exports = {
  weatherByCity,
  weatherFiveDays,
};

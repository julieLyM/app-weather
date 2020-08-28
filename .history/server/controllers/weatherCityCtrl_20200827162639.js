const dataStore = require('../store/dataStore');

const weatherByCity = async (req, res) => {
  const { query } = req.query.q;
  const { data } = await dataStore.getWeatherByCity(query);
  res.send(data);
};

const weatherFiveDays = async (req, res) => {
  const { query } = req.query;
  const { data } = await dataStore.getWeatherFiveDays(query);
  res.send(data);
};

module.exports = {
  weatherByCity,
  weatherFiveDays,
};

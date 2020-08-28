const dataStore = require('../store/dataStore');

const weatherByCity = async (req, res) => {
  const { q } = req.query;
  console.log(req.query.q);

  try {
    const { data } = await dataStore.getWeatherByCity(q);
    res.send(data);
  } catch (e) {
    console.error(e);
  }
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

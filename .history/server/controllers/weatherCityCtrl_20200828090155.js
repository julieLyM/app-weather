const dataStore = require('../store/dataStore');

const weatherByCity = async (req, res) => {
  const { query,units } = req.query
  console.log(req.query.q);

  try {
    const {data} = await dataStore.getWeatherByCity(query,units);
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

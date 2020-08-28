const dataStore = require('../store/dataStore');

const weatherByCity = async (req, res) => {
  const { q } = req.query;
  try {
    const { data } = await dataStore.getWeatherByCity(q);
    res.send(data);
  } catch (e) {
    console.error(e);
  }
};

const weatherFiveDays = async (req, res) => {
    const { q } = req.query;
    try {
      const { data } = await dataStore.getWeatherByCity(q);
      res.send(data);
    } catch (e) {
      console.error(e);
    }
};

module.exports = {
  weatherByCity,
  weatherFiveDays,
};

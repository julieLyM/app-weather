const dataStore = require('../store/dataStore');

const test = async (req, res) => {
  res.send('hello');
};

const weatherByCity = async (res, req) => {
  const {
    params: { query },
  } = req;
  try {
    const weather = await dataStore.getWeatherByCity(query.q);
    res.json(weather);
  } catch (e) {
    console.error(e);
  }
};

const weatherFiveDays = async (res, req) => {
  try {
    const weatherFive = await dataStore.getWeatherFiveDays();
    res.json(weatherFive);
  } catch (e) {
    console.error(e);
  }
};
module.exports = {
  test,
  weatherByCity,
  weatherFiveDays,
};

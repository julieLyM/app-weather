const dataStore = require('../store/dataStore');

const test = async (req, res) => {
  res.send('hello');
};

const weatherByCity = async (res, req) => {
  const { params: q } = req;
  console.log('hello ctrl');
  try {
    const weather = await dataStore.getWeatherByCity(query);
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

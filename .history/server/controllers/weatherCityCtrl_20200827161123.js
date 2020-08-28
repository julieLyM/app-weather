const dataStore = require('../store/dataStore');

const weatherByCity =  (res, req) => {
  try {
    const { data } = await dataStore.getWeatherByCity();
    res.json(data);
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
  weatherByCity,
  weatherFiveDays,
};

const dataStore = require('../store/dataStore');

const weatherByCity = async (req, res) => {
  const { query } = req.query;
  const  data  = await dataStore.getWeatherByCity(query);
  res.send(brandsList);
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

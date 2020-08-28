const dataStore = require('../store/dataStore');

const weatherByCity = (res, req) => {
  try {
    const { data } = dataStore.getWeatherByCity();
    res.json(data);
  } catch (e) {
    console.error(e);
  }
};

const weatherByCity = async (req, res) => {
    const { query } = req.query;
    const {
      data: { hits: brandsList },
    } = await dataStore.getWeatherByCity(query);
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

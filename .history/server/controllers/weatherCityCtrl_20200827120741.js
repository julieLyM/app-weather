const dataStore = require('./store/dataStore');

const weatherBycity = async (res, req) => {
  try {
    const weather = await dataStore.getWeatherByCity();
    res.json(weather);
  } catch (e) {
    console.error(e);
  }
};

const weatheFiveDays = await dataStore.get

module.exports = {
  weatherBycity,
};

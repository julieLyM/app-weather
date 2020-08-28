const dataStore = require('./store/dataStore');

const weatherBycity = async (res, req) => {
  try {
    const weather = await dataStore.getWeatherByCity();
    res.json(weather);
  } catch (e) {
    console.error(e);
  }
};

const weatheFiveDays = async (res, req) => {
  const weatherFive = await dataStore.getWeatherFiveDays();
  try {
  }
  catch(e)
};
module.exports = {
  weatherBycity,
};

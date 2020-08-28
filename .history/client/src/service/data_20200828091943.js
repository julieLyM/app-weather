import axios from 'axios';

export const getWeatherByCity = async (cityName) => {
  return await axios.get(`api/v1/weatherCity`, { params: { q: cityName } });
};

export const getWeatherForFiveDaysByCity = async (cityName) => {
  return await axios.get(`${url}/city/forecast`, { params: { q: cityName } });
};

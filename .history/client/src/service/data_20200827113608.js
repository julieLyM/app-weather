import axios from 'axios';


const url = 'http://localhost:4242/cities`';

export const getWeatherByCity = async cityName => {
  return await axios.get(`${url}/city`, { params: { q: cityName } });
};

export const getWeatherForFiveDaysByCity = async cityName => {
  return await axios.get(`${url}/city/forecast`, { params: { q: cityName } });
};
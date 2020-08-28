import axios from 'axios';

export const dataCities = async (query) => {
  const res = await axios.get(`http://localhost:4242/cities`, {
    params: {
      q: query,
    },
  });
  console.log(res.dataCities);
  return res.data;
};

const url = 'http://localhost:4242/cities`';

export const getWeatherByCity = async cityName => {
  return await axios.get(`${url}/city`, { params: { q: cityName } });
};

export const getWeatherForFiveDaysByCity = async cityName => {
  return await axios.get(`${url}/city/forecast`, { params: { q: cityName } });
};
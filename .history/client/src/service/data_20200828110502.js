import axios from 'axios';

export const getWeatherByCity = async (cityName) => {
  console.log('ca pass ou pas');
  const data = await axios.get(`/api/v1/weatherCity`, {
    params: { q: cityName },
  });
  console.log('hello data');
  return data;
};

export const getWeatherForFiveDaysByCity = async (cityName) => {
  const { data } = await axios.get(`api/v1/weatherCity/forecast`, {
    params: { q: cityName },
  });
  return data;
};

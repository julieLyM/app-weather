import axios from 'axios';

export const getWeatherByCity = async (cityName) => {
  const data = await axios.get(`/api/v1/weatherCity/`, {
    params: { q: cityName },
  });
  return data;
};

export const getWeatherForFiveDaysByCity = async (cityName) => {
  const { data } = await axios.get(`api/v1/weatherCity/forecast`, {
    params: { q: cityName },
  });
  return data;
};

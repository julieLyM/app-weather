import axios from 'axios';

export const getWeatherByCity = async (cityName) => {
const {data} =  await axios.get(`api/v1/weatherCity`, { params: { q: cityName } }
return data);
};

export const searchCityData = async (query) => {
  const { data } = await axios.get(`/api/v1/weatherCity/${query}`);
  return data;
};


export const getWeatherForFiveDaysByCity = async (cityName) => {
  return await axios.get(`api/v1/weatherCity/forecast`, {
    params: { q: cityName },
  });
};

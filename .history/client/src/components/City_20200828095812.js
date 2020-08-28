import React from 'react';
import {getWeatherByCity} from './'

export const City = () => {
  const [city, setCity] = useState([]);

  const getData = async () => {
    const cityData = await getWeatherByCity();
    setCity(cityData);
  };

  return <div></div>;
};

import React, { useState } from 'react';
import { getWeatherByCity } from '../service/data';

export const City = () => {
  const [city, setCity] = useState([]);

  const getData = async () => {
    const cityData = await getWeatherByCity();
    setCity(cityData);
  };

  return <div></div>;
};

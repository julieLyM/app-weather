import React, { useState } from 'react';
import { getWeatherByCity } from '../service/data';

export const City = () => {
  const [city, setCity] = useState('');


  return <div>test{city}</div>;
};

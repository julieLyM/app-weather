import React, { useState } from 'react';
import { getWeatherByCity } from '../service/data';

export const City = () => {
  const [city, setCity] = useState('');

  onChange = ({ target: { value: city } }) => {
    this.setState({ city });
  };

  return <div>test{city}</div>;
};

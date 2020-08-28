import React from 'react';

export const City = () => {
  const [city, setCity] = useState([]);

  const (async () => {
    const cityData = await getWeatherByCity();
    setCity(cityData);
  }
  return <div></div>;
};

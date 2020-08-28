import React from 'react';

export const City = () => {
  const [city, setCity] = useState([]);

  useEffect( async() => {
    const cityData = getWeatherByCity();
  }, []);
  return <div></div>;
};

import React from 'react';

export const City = () => {
  const [city, setCity] = useState([]);

  useEffect(() => {
    const cityData = getWeatherByCity();
  }, []);
  return <div></div>;
};

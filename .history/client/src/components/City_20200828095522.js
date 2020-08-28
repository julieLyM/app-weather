import React from 'react';

export const City = () => {
  const [city, setCity] = useState([]);

  useEffect(() => {
    const city = getWeatherByCity();
  }, []);
  return <div></div>;
};

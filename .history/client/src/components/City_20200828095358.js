import React from 'react';

export const City = () => {
  const [city, setCity] = useState([]);

  useEffect(() => {
    const getCity = getWeatherByCity();
  }, []);
  return <div></div>;
};

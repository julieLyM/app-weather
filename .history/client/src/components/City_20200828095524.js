import React from 'react';

export const City = () => {
  const [city, setCity] = useState([]);

  useEffect(() => {
    const cit = getWeatherByCity();
  }, []);
  return <div></div>;
};

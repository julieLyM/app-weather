import React from 'react';

export const City = () => {
  const [city, setCity] = useState([]);

  useEffect( async() => {
    const cityData = await getWeatherByCity()

  }, []);
  return <div></div>;
};

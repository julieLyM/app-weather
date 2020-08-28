import React from 'react';

export const City = () => {
  const [city, setCity] = useState([]);

  useEffect( async() => {
    const getCity = await getWeatherByCity()
    };
  }, [input]);
  return <div></div>;
};

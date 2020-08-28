import React from 'react';

export const Results = ({ resultCity }) => {
  const {
    name,
    weather,
    main: { temp, feels_like, temp_min, temp_max, humidity } = {},
    wind: { speed } = {},
    sys: { sunrise, sunset } = {},
  } = resultCity;
  return (
    <div>
      <h3>result component enfant</h3>
      <p>{name}</p>
      <div>
        {weather.map(({ main, description, icon }) => (
          <div key={id}>
            <div>
              <img src={icon} alt="weather today" />
            </div>
            <div>{main}</div>
            <div>{description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

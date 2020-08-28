import React from 'react';
import moment from 'moment';

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
        {weather.map(({ main, description }) => (
          <div key={main}>
            <div>
              <img src={icon} alt="weather today" />
            </div>
            <div>{main}</div>
            <div>{description}</div>
          </div>
        ))}
      </div>
      <div>
        <h2>Temperatures</h2>
        <div>Temp: {temp}°C</div>
        <div>Feels like : {feels_like}°C</div>
        <div>
          Temp min : {temp_min}°C, Temp max : {temp_max}°C
        </div>
        <div>Humidity : {humidity}</div>
      </div>
      <div>
        <h2>Wind</h2>
        <div>Speed : {speed}</div>
      </div>
      <div>
        <h2>Sun infos</h2>
        <div>
          Sun rises at {moment(sunrise).format('HH:mm:ss')} and downs at{' '}
          {moment(sunset).format('HH:mm:ss')}
        </div>
      </div>
    </div>
  );
};

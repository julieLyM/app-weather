import React from 'react';
import moment from 'moment';

import { Forecast } from './Forecast';

import { StyledResults } from './styles';

export const Results = ({
  city,
  weatherResults,
  forecastResults,
  startForecastSearch,
}) => {
  const {
    weather,
    main: { temp, feels_like, temp_min, temp_max, humidity } = {},
    wind: { speed } = {},
    sys: { sunrise, sunset } = {},
    name,
  } = weatherResults;
  return (
    <div>
      <h1>Weather in {name} </h1>
      <div>
        {weather.map(({ main, description, icon }) => (
          <div>
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
      <div>
        <button onClick={startForecastSearch}>Get weather for 5 days </button>
        {forecastResults && (
          <Forecast city={city} forecastResults={forecastResults} />
        )}
      </div>
    </div>
  );
};

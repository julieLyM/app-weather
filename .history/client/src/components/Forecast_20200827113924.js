import React from 'react';
import moment from 'moment';

export const Forecast = ({ city, forecastResults }) => {
  console.log(forecastResults);
  const {
    list,
    city: { name },
  } = forecastResults;
  return (
    <div>
      <h1>{name} Weather Forecast</h1>
      <div>
        {list.map(
          ({
            main: { temp, feels_like, temp_min, temp_max, humidity },
            weather,
            wind: { speed },
            dt_txt,
          }) => (
            <div>
              <div>
                <h2>{dt_txt}</h2>
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
                  <h3>Temperature</h3>
                  <div>Temp: {temp}°C</div>
                  <div>Feels like : {feels_like}°C</div>
                  <div>
                    Temp min : {temp_min}°C, Temp max : {temp_max}°C
                  </div>
                  <div>Humidity : {humidity}</div>
                </div>
                <div>
                  <h3>Wind</h3>
                  <div>Speed : {speed}</div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
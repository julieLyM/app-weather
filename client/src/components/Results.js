import React from 'react';
import moment from 'moment';
import Forecast from './Forecast';

export const Results = ({
  resultCity,
  resultForecast,
  forecastSearch,
  city,
}) => {
  const {
    name,
    weather,
    main: { temp, feels_like, temp_min, temp_max, humidity } = {},
    wind: { speed } = {},
    sys: { sunrise, sunset } = {},
  } = resultCity;
  return (
    <div>
      <div className="tile is-parent">
        <article className="tile is-child notification is-info">
          <p className="title">{name}</p>
          <div
            className="content"
            style={{
              display: 'flex',
              flexDirection: 'column',
              margin: '10px',
            }}
          >
            <div>
              {weather.map(({ main, description, icon, dt_txt }) => (
                <div key={main}>
                  <div className="subtitle">
                    {moment(dt_txt).format('llll')}
                  </div>
                  <img
                    src={`http://openweathermap.org/img/w/${icon}.png`}
                    alt=""
                  />
                  <div>{description}</div>
                </div>
              ))}
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                marginTop: '20px',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ margin: '10px' }}>
                <h2 className="title is-5">Temperature</h2>
                <div>Temp: {temp}°C</div>
                <div>Feels like : {feels_like}°C</div>
                <p> Temp min : {temp_min}°C </p>
                <p> Temp max : {temp_max}°C</p>
                <p>Humidity : {humidity}</p>
              </div>

              <div>
                <h2 className="title is-5">Wind</h2>
                <div>Speed : {speed}</div>
              </div>

              <div>
                <h2 className="title is-5">Sun infos</h2>
                <div>
                  Sun rises at {moment(sunrise).format('HH:mm:ss')} and downs at{' '}
                  {moment(sunset).format('HH:mm:ss')}
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div>
        <button onClick={forecastSearch} className="button is-primary">
          forecast next days
        </button>

        {resultForecast && (
          <div className="tile is-parent">
            <article className="tile is-child notification is-danger">
              <div className="content">
                {' '}
                <Forecast city={city} resultForecast={resultForecast} />
              </div>
            </article>
          </div>
        )}
      </div>
    </div>
  );
};

import React from 'react';
import moment from 'moment';

const Forecast = ({ resultForecast, city }) => {
  const {
    list,
    city: { name },
  } = resultForecast;
  return (
    <div>
      <p className="title">{name} weather forecast</p>

      <div>
        {list.map(
          ({
            id,
            main: { temp, feels_like, temp_min, temp_max, humidity },
            weather,
            wind: { speed },
            dt_txt,
          }) => (
            <div key={id}>
              <div>
                <div>{moment(dt_txt).format('llll')}</div>
                <div>
                  {weather.map(({ main, description, id, icon }) => (
                    <div key={id}>
                      <div>{main}</div>
                      <img
                        src={`http://openweathermap.org/img/w/${icon}.png`}
                        alt=""
                      />

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

export default Forecast;

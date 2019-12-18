import React from "react";

const CityDetail = ({ weatherDetail }) => {
  const {
    weather = [],
    name,
    main: { temp, feels_like, humidity, pressure } = {}
  } = weatherDetail;
  return (
    <div>
      <p>name:{name}</p>
      <p>temperature:{temp}</p>
      <p>feel:{feels_like}</p>
      <p>humidity:{humidity}</p>
      <p>pressure:{pressure}</p>

      {weather.map(element => (
        <div key={element.id}>
          <p>main: {element.main}</p>
          <p>description: {element.description}</p>
          <img src={`http://openweathermap.org/img/w/${element.icon}.png`} />
        </div>
      ))}
    </div>
  );
};

export default CityDetail;

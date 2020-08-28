import React from 'react';

export const Results = ({ resultCity, city }) => {
  const {
    name,
    main: { temp, feels_like, temp_min, temp_max, humidity } = {},
    wind: { speed } = {},
    sys: { sunrise, sunset } = {},
  } = resultCity;
  return (
    <div>
      <h3>result component enfant</h3>
      <p>{name}</p>
      <div>
        {}
      </div>
    </div>
  );
};

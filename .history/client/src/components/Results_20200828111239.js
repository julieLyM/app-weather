import React from 'react';

export const Results = ({ resultCity, city }) => {
  const {
    weather,
    name,
  } = resultCity;
  return (
    <div>
      <h3>result component enfant</h3>
      <p>
        {name}

      </p>
    </div>
  );
};

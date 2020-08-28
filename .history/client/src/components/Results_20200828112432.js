import React from 'react';

export const Results = ({ resultCity }) => {
  const {
    name,
    main
    wind: { speed } = {},
    sys: { sunrise, sunset } = {},
  } = resultCity;
  return (
    <div>
      <h3>result component enfant</h3>
      <p>{name}</p>
      <div>{main}</div>
    </div>
  );
};

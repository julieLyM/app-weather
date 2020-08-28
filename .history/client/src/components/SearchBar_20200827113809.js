import React from 'react';

export const SearchBar = ({ onChange, onKeyDown }) => {
  return (
    <div>
      <h1>Enter a city name to get its weather:</h1>
      <input onChange={onChange} onKeyDown={onKeyDown}></input>
    </div>
  );
};

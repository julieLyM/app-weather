import React from 'react';

import { StyledSearchBar, StyledP, StyledInput } from './styles';

export const SearchBar = ({ onChange, onKeyDown }) => {
  return (
    <div>
      <h1>Enter a city name to get its weather:</h1>
      <input onChange={onChange} onKeyDown={onKeyDown}></input>
    </div>
  );
};

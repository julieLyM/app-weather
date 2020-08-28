import React from 'react';

import { StyledSearchBar, StyledP, StyledInput } from './styles';

export const SearchBar = ({ onChange, onKeyDown }) => {
  return (
    <div>
      <h1>Enter a city name to get its weather:</StyledP>
      <StyleidInput onChange={onChange} onKeyDown={onKeyDown}></StyledInput>
    </div>
  );
};

import React from 'react';

import { StyledSearchBar, StyledP, StyledInput } from './styles';

export const SearchBar = ({ onChange, onKeyDown }) => {
  return (
    <div>
      <StyledP>Enter a city name to get its weather:</StyledP>
      <StyledInput onChange={onChange} onKeyDown={onKeyDown}></StyledInput>
    </StyledSearchBar>
  );
};

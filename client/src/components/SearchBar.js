import React from 'react';

export const SearchBar = ({ onChange, onKeyDown }) => {
  return (
    <div>
      <h3>component search bar</h3>
      <input onKeyDown={onKeyDown} onChange={onChange}></input>
    </div>
  );
};

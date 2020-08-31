import React from 'react';

export const SearchBar = ({ onChange, onKeyDown, citySearch }) => {
  return (
    <div
      className="columns"
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <input
        style={{ width: '260px' }}
        className="input is-info is-normal is-rounded"
        type="text"
        placeholder="Put a city"
        onKeyDown={onKeyDown}
        onChange={onChange}
      ></input>
      <button className="button is-primary is-rounded" onClick={citySearch}>
        search
      </button>
    </div>
  );
};

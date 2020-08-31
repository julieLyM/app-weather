import React from 'react';

export const SearchBar = ({ onChange, onKeyDown, citySearch }) => {
  return (
    <div className="columns">
      <div class="column">
        <input
          className="input is-info is-normal is-rounded"
          type="text"
          placeholder="Put a city"
          onKeyDown={onKeyDown}
          onChange={onChange}
        ></input>
      </div>
      <div class="column is-3">
        <button className="button is-primary is-rounded" onClick={citySearch}>
          search
        </button>
      </div>
    </div>
  );
};

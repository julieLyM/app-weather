import React, { Component } from 'react';

import { Results } from './Results';
import { SearchBar } from './SearchBar';

import { getWeatherByCity } from '../service/data';

export default class City extends Component {
  state = {
    city: '',
    resultCity: null,
  };

  onChange = ({ target: { value: city } }) => {
    this.setState({ city });
  };

  searchCity = async () => {
    const { data } = async () => {
      await getWeatherByCity(this.state.city);
      this.setState({ resultCity: data });
    };
  };

  onKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.searchCity();
    }
  };

  render() {
    return (
      <div>
        <h1>component city home</h1>
        <SearchBar onKeyDown={resul} />
        <Results />
      </div>
    );
  }
}

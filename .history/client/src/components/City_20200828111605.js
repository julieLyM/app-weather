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

  startSearch = async () => {
    const  data } = await getWeatherByCity(this.state.city);
    this.setState({ weatherResults: data });
  };

  onKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.startSearch();
    }
  };

  render() {
    const { resultCity, city } = this.state;
    return (
      <div>
        <h1>component city home</h1>
        <SearchBar onKeyDown={this.onKeyDown} onChange={this.onChange} />
        {resultCity && <Results city={city} resultCity={resultCity} />}
      </div>
    );
  }
}

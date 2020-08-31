import React, { Component } from 'react';

import { Results } from './Results';
import { SearchBar } from './SearchBar';

import { getWeatherByCity, getWeatherForFiveDaysByCity } from '../service/data';

export default class City extends Component {
  state = {
    city: '',
    resultCity: null,
    resultForecast: null,
  };

  onChange = ({ target: { value: city } }) => {
    this.setState({ city });
  };

  citySearch = async () => {
    const data = await getWeatherByCity(this.state.city);
    this.setState({ resultCity: data });
  };

  forecastSearch = async () => {
    const data = await getWeatherForFiveDaysByCity(this.state.city);
    this.setState({ resultForecast: data });
  };

  onKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.citySearch();
    }
  };

  onSearchCity = () => {
    this.citySearch();
  };

  render() {
    const { resultCity, city, resultForecast } = this.state;
    return (
      <div>
        <h1 className="title is-1">Weather App</h1>
        <SearchBar
          onKeyDown={this.onKeyDown}
          onChange={this.onChange}
          citySearch={this.citySearch}
        />
        <div
          class="container is-fluid is-widescreen"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <div style={{ width: '800px' }}>
            {resultCity && (
              <div class="notification">
                <Results
                  city={city}
                  resultCity={resultCity}
                  resultForecast={resultForecast}
                  forecastSearch={this.forecastSearch}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

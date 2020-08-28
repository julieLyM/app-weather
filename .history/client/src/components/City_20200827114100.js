import React, { Component } from 'react';
import { getWeatherByCity, getWeatherForFiveDaysByCity } from '../service/data';
import CityDetail from './CityDetail';

import { SearchBar } from './SearchBar';
import { Results } from './Results';
export default class Cities extends Component {
  state = {
    city: '',
    weatherResults: null,
    forecastResults: null,
  };

  onChange = ({ target: { value: city } }) => {
    this.setState({ city });
  };
  startSearch = async () => {
    const { data } = await getWeatherByCity(this.state.city);
    this.setState({ weatherResults: data });
  };

  startForecastSearch = async () => {
    const { data } = await getWeatherForFiveDaysByCity(this.state.city);
    this.setState({ forecastResults: data });
  };

  onKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.startSearch();
    }
  };

  render() {
    const { city, weatherResults, forecastResults } = this.state;
    return (
      <div>
        <h1>Look for a city weather</h1>
        <div>
          <SearchBar onChange={this.onChange} onKeyDown={this.onKeyDown} />
          {weatherResults && (
            <Results
              city={city}
              weatherResults={weatherResults}
              forecastResults={forecastResults}
              startForecastSearch={this.startForecastSearch}
            />
          )}
        </div>
      </div>
    );
  }
}

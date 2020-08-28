import React, { Component } from 'react';
import { Results } from './Results';
import { getWeatherByCity } from '../service/data';

export default class City extends Component {
  state = {
    city: '',
  };

  onChange = ({ target: { value: city } }) => {
    this.setState({ city });
  };

  searchCity = async () => {
    const { data } = async () => {
      await getWeatherByCity(this.state.city);
      this.setState({res})
    };
  };

  render() {
    return (
      <div>
        <h1>component city home</h1>
        <input></input>
        <Results />
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Results } from './Results';

export default class City extends Component {
  state = {
    city: '',
  };

  onChange = ({ target: { value: city } }) => {
    this.setState({ city });
  };
  
  searchCity = 

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

import React, { Component } from 'react';
import {Results} from './'

export default class City extends Component {
  state = {
    city: '',
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

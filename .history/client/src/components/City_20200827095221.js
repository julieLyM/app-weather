import React, { Component } from 'react';
import { dataCities } from '../service/data';
import CityDetail from './CityDetail';

export default class Cities extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weatherCity: {},
      query: null,
      isLoading: false,
      valueEmpty: '',
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const data = await dataCities(this.state.query);
    this.setState({
      weatherCity: data,
      isLoading: true,
      valueTest: '',
    });
  };

  onInputSearch = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  onSubmitSearch = (query) => {
    this.fetchData(query);
  };

  render() {
    const { weatherCity, isLoading, valueEmpty } = this.state;
    console.log(this.state);
    return (
      <div>
        <h1>Look for a city weather</h1>
        <input onChange={this.onInputSearch} value={valueEmpty} />
        <button onClick={this.onSubmitSearch}>search</button>

        {!isLoading ? (
          <div></div>
        ) : (
          <div>
            <CityDetail weatherDetail={weatherCity} />
          </div>
        )}
      </div>
    );
  }
}

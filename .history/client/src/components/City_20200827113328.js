import React, { Component } from 'react';
import { dataCities } from '../service/data';
import CityDetail from './CityDetail';

export default class Cities extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      weatherResults: null,
      forecastResults: null,
    };
  }

  componentDidMount() {
    this.fetchData();
    console.log(this.fetchData);
  }

  fetchData = async () => {
    const data = await dataCities(this.state.query);
    this.setState({
      weatherCity: data,
      query: '',
    });
  };

  onChange = ({ target: { value: city } }) => {
    this.setState({ city });
  };

  onSubmitSearch = (query) => {
    this.fetchData(query);
  };

  render() {
    const { weatherCity, isLoading } = this.state;
    return (
      <div>
        <h1>Look for a city weather</h1>
        <input onChange={this.onInputSearch.bind(this)} />
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

import React, { Component } from 'react';
import fetchWeather from '../services/api-helpers';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      weather: null
    };
  };

  async componentDidMount() {
    await fetchWeather()
  }


render() {
  return (
    <h1>Form Component</h1>
    );
  };
};
export default Form;

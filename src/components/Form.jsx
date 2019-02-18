import React, { Component } from 'react';
import WeatherData from './WeatherData'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      zip: '',
      weather: null,
      isLoading: true,
      error: null
    };
    this.handleChange = this.handleChange.bind(this)
  };

  async componentDidMount() {
    await this.fetchWeather();
  };

   fetchWeather(zip) {
    const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?zip=10029,us&units=imperial`;
    const API_KEY = `8aac04ebc33f3c51fa258b707bf5bd1a`;
    fetch(`${BASE_URL}&appid=${API_KEY}`)
    .then(res => res.json())
    .then(data =>
    this.setState({
        weather: null
      })
    )
    .catch(error => this.setState({
      error, isLoading: false
    }));
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      zip: e.target.value
    })
  }

  // handleSubmit(e) {
  //   e.preventDefault;
  // }


render() {
  return (
      <form action="GET">
        <input
        type="text"
        placeholder="Enter ZipCode..."
        value={this.state.zip}
        onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    );
  };
};
export default Form;

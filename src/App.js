import React, { Component } from 'react';
import Form from './components/Form';
import WeatherData from './components/WeatherData';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      location: '',
      currentTemp: '',
      lowTemp: '',
      highTemp: '',
      sunrise: '',
      sunset: '',
      description: ''
    }
  }

  getWeather = async (e) => {
    e.preventDefault();
    const zipcode = e.target.elements.zipcode.value;
    console.log({zipcode});
    try {
      await axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
      .then(res => {
        console.log('this is res.data', res.data)
        this.setState({
          location: ' ' + res.data.name,
          currentTemp: ' ' + Math.round((res.data.main.temp - 273.15) * 9/5 + 32),
          lowTemp: ' ' + Math.round((res.data.main.temp_min - 273.15) * 9/5 + 32),
          highTemp: ' ' + Math.round((res.data.main.temp_max - 273.15) * 9/5 + 32),
          description: ' ' + res.data.weather[0].description.charAt(0).toUpperCase() + res.data.weather[0].description.slice(1),
          sunrise: ' ' + res.data.sys.sunrise,
          sunset: ' ' + res.data.sys.sunset
        });
      })
    } catch(error) {
      console.log(error)
    }
  }

  render() {
    const {
      currentTemp,
      location,
      lowTemp,
      highTemp,
      description,
      sunrise,
      sunset
    } = this.state
    return (
      <div className="App">
        <WeatherData
          temperature={currentTemp}
          location={location}
          lowTemp={lowTemp}
          highTemp={highTemp}
          description={description}
          sunrise={sunrise}
          sunset={sunset}
        />
        <Form getWeather={this.getWeather}/>
      </div>
    );
  }
}

export default App;

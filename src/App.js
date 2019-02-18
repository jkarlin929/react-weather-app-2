import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import fetchWeather from './services/api-helpers';

class App extends Component {
  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}

export default App;

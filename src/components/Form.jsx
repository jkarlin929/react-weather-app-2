import React from 'react';

const Form = props => (
  <form onSubmit={props.getWeather}>
    <input type="text" name="zipcode" placeholder="ZipCode..." />
    <button>Get Weather</button>
  </form>
)

export default Form;

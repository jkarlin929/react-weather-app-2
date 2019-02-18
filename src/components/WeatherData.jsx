import React, { Component, Fragment } from 'react';
import moment from 'moment';

class WeatherData extends Component {

  render() {
    const sunsetTzOffset = moment.utc("1970-01-01T00:00:00").add(this.props.sunset, 'seconds').format();
    const sunriseTzOffset = moment.utc("1970-01-01T00:00:00").add(this.props.sunrise, 'seconds').format();
    const sunset = moment(sunsetTzOffset).format("h:mm a");
    const sunrise = moment(sunriseTzOffset).format("h:mm a");
    return (
  (
  <div>
    {
      this.props.temperature &&
    <p>Temperature:
      <span>{this.props.temperature}º</span>
    </p>
    }
    {
      this.props.location &&
    <p>Location:
      <span>{this.props.location}</span>
    </p>
    }
    {
      this.props.lowTemp &&
    <p>Low Temp:
      <span>{this.props.lowTemp}º</span>
    </p>
    }
    {
      this.props.highTemp &&
    <p>High Temp:
      <span>{this.props.highTemp}º</span>
    </p>
    }
    {
      this.props.description &&
    <p>Description:
      <span>{this.props.description}</span>
    </p>
    }
    {
      this.props.sunset &&
    <Fragment>
    <p>Sunrise:
      <span>{sunrise}</span>
    </p>
    <p>Sunset:
      <span>{sunset}</span>
    </p>
    </Fragment>
    }
  </div>
    )
  )
}
}

export default WeatherData;

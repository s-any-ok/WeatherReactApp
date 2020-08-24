import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div>
        {this.props.city && (
          <div>
            <p>
              Location: {this.props.city}, {this.props.country}
            </p>
            <p>Temperature: {this.props.temp}</p>
            <p>Sunrise: {this.props.sunrise}</p>
            <p>Sunset: {this.props.sunset}</p>
            <p>Pressure: {this.props.pressure}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Weather;

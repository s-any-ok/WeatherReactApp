import React from "react";

const Weather = (props) => (
  <div>
    {props.city && (
      <div>
        <p>
          Location: {props.city}, {props.country}
        </p>
        <p>Temperature: {props.temp}</p>
        <p>Sunrise: {props.sunrise}</p>
        <p>Sunset: {props.sunset}</p>
        <p>Pressure: {props.pressure}</p>
      </div>
    )}
    <p>{props.error}</p>
  </div>
);

export default Weather;

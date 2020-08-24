import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";
const helpers = require("./helpers/setTime");

const API_KEY = "63727d15d625c9021eabba131b97b69e";
class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    pressure: undefined,
    error: undefined,
  };

  getWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;

    if (city) {
      const apiUrl = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await apiUrl.json();

      const sunsetDate = helpers.getSunTime(data.sys.sunset);
      const sunriseDate = helpers.getSunTime(data.sys.sunrise);

      this.setState({
        temp: Math.round(data.main.temp),
        city: data.name,
        country: data.sys.country,
        sunrise: sunriseDate,
        sunset: sunsetDate,
        pressure: data.main.pressure,
        error: "",
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        pressure: undefined,
        error: "Enter the name of the city",
      });
    }
  };
  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 info">
                <Info />
              </div>
              <div className="col-sm-7 form">
                <Form getWeather={this.getWeather} />
                <Weather
                  temp={this.state.temp}
                  city={this.state.city}
                  country={this.state.country}
                  sunrise={this.state.sunrise}
                  sunset={this.state.sunset}
                  pressure={this.state.pressure}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

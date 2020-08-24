import React from "react";

const Form = (props) => (
  <form onSubmit={props.getWeather}>
    <input type="text" name="city" placeholder="City" />
    <button>Get weather</button>
  </form>
);

export default Form;

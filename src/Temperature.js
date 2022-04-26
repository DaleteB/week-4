import React from "react";
import "./Temperature.css";

export default function Temperature() {
  return (
    <div class="clearfix weather-temperature">
      <img
        src="https://openweathermap.org/img/wn/04d@2x.png "
        alt=""
        id="icon"
        class="float:left"
      />
      <div class="float:left temperature">
        <strong id="temp">11</strong>
        <span class="units">°C</span>
      </div>
    </div>
  );
}
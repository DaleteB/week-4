import React from "react";
import "./Units.css";

export default function Units() {
  return (
    <div className="Units">
      <ul>
        <li>
          <i class="fa-solid fa-droplet"></i>
          Humidity: <span id="humidity">66</span>%
        </li>
        <li>
          <i class="fa-solid fa-wind"></i>
          Wind: <span id="wind">6</span> km/h
        </li>
      </ul>
    </div>
  );
}
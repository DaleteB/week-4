import React from "react";
import "./Header";

export default function Header() {
  return (
    <div class="Header">
      <h1 id="city">Lisbon</h1>
      <ul>
        <li id="date">Tuesday 18:36</li>
        <li class="descriptionNow" id="description">
          Sunny
        </li>
      </ul>
    </div>
  );
}
import React from "react";
import Search from "./Search";
import Header from "./Header";
import Temperature from "./Temperature";
import Units from "./Units";
import Footer from "./Footer";
import Forecast from "./Forecast";
import "./Weather.css";
import "./Search.css";
import "./Header.css";
import "./Temperature.css";
import "./Units.css";
import "./Footer.css";


export default function Weather() {
    return (
      <div className="container">
        <div class="weather-app-wrapper">
          <Search />
          <hr />
          <div class="overview">
            <Header />
            <div class="row">
              <div class="col-6">
                <Temperature />
              </div>
              <div class="col-6">
                <Units />
              </div>
            </div>
           <hr /> 
           <Forecast />
          </div>
          
        </div>
        <Footer />
      </div>
    );
  }
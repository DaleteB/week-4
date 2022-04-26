import React from "react";
import "./Forecast.css";

export default function Forecast(){
    return (
        <div className="Forecast container">
            <div className="row item-center">
                <div class="col-2">
                    <p>Tue</p>
                    <img src="https://openweathermap.org/img/wn/09d@2x.png " alt="" id="icon" class="img-list"/>
                    <strong>19°</strong> /
                    <span>12°</span>
                </div>
                <div class="col-2">
                    <p>Wed</p>
                    <img src="https://openweathermap.org/img/wn/02d@2x.png " alt="" id="icon" class="img-list"/>
                    <strong>19°</strong> /
                    <span>12°</span>
                </div>
                <div class="col-2">
                    <p>Thu</p>
                    <img src="https://openweathermap.org/img/wn/01d@2x.png " alt="" id="icon" class="img-list"/>
                    <strong>22°</strong> /
                    <span>13°</span>
                </div>
                <div class="col-2">
                    <p>Fri</p>
                    <img src="https://openweathermap.org/img/wn/02d@2x.png " alt="" id="icon" class="img-list"/>
                    <strong>25°</strong> /
                    <span>14°</span>
                </div>
                <div class="col-2">
                    <p>Sat</p>
                    <img src="https://openweathermap.org/img/wn/02d@2x.png " alt="" id="icon" class="img-list"/>
                    <strong>24°</strong> /
                    <span>13°</span>
                </div>
                <div class="col-2">
                    <p>Sun</p>
                    <img src="https://openweathermap.org/img/wn/02d@2x.png " alt="" id="icon" class="img-list"/>
                    <strong>23°</strong> /
                    <span>13°</span>
                </div>
            </div>
        </div>
    )
}   
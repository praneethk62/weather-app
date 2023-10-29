import React, { useState } from 'react'
import './weatherapp.css'
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import humidity_icon from '../assets/humidity.png'
import rain_icon from "../assets/rain.png";
import search_icon from '../assets/search.png'
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";

const Weatherapp = () => {

  const api_key = "40875d2181a7f28d8f46fee5349c2856";
  
  const[wicon,setWicon]=useState(cloud_icon)

    const search =async () => {
        const element = document.getElementsByClassName("cityInput");
        if (element[0].value === "")
        {
            return 0;
      }
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
      let response = await fetch(url)
      let data =await response.json();
      const humidity = document.getElementsByClassName("humidity-percentage");
      const wind = document.getElementsByClassName("wind_rate");
      const temprature = document.getElementsByClassName("weather-temp");
      const location = document.getElementsByClassName("weather-location");
    
      humidity[0].innerHTML = data.main.humidity+"%";
      wind[0].innerHTML =Math.floor (data.wind.speed)+"Km/h";
      temprature[0].innerHTML = Math.floor(data.main.temp )+"°C";
      location[0].innerHTML = data.name;
    
      if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
        setWicon(clear_icon);
      } else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
        setWicon(cloud_icon);
      } else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
        setWicon(drizzle_icon);
      } else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
        setWicon(drizzle_icon);
      } else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
        setWicon(rain_icon);
      } else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
        setWicon(rain_icon);
      } else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
        setWicon(snow_icon);
      } else {
        setWicon(clear_icon);
      }
    }

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search City" />
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <img src={search_icon} alt="" />
        </div>
      </div>

      <div className="weather-image">
        <img src={wicon} alt="" />
      </div>
      <div className="weather-temp"></div>
      <div className="weather-location"></div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percentage"></div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind_rate"></div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weatherapp
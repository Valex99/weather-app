// 1
import { hourlyForecast } from "./hourly-forecast";
import { createFooter } from "./footer";
import "../styles/local-weather.css";

// Experimaental
import {
  getCurrentTemp,
  getCurrentWeatherCode,
  getDailyHighAndLow,
} from "../logic";

const content = document.getElementById("content");
content.classList.add("content");

// Adding background image to the project - create a function later
content.style.backgroundImage = "url('./background-images/sunny.jpg')";
content.style.backgroundSize = "cover"; // Ensures the image covers the div
content.style.backgroundPosition = "35% -50px"; // Adjusts the horizontal position
content.style.backgroundRepeat = "no-repeat"; // Prevents repeating
content.style.backgroundAttachment = "fixed"; // Keeps the image in place

function localWeather() {
  const tempMainDiv = document.createElement("div");
  tempMainDiv.classList.add("temp-main-div");

  const cityName = document.createElement("p");
  cityName.classList.add("city-name");

  // Add div weather-details
  const weatherDetails = document.createElement("div");
  weatherDetails.classList.add("weather-details");

  const temperature = document.createElement("h1");
  temperature.classList.add("temp");

  const weather = document.createElement("p");
  weather.classList.add("weather");

  const highLowTemp = document.createElement("p");
  highLowTemp.classList.add("high-low-temp");

  cityName.textContent = "Postojna";

  // --> CALL API FUNCTION

  //temperature.textContent = "-1 °";
  //temperature.textContent = getWeather(); Dont call async function like that! It returns a promise
  // async function updateTemp() {
  //   const currentTemp = await getWeather(); // Wait for the Promise to resolve
  //   temperature.textContent = `${currentTemp}°`; // Assign the resolved value
  // }
  // Round up the numbers ->

  // Function call
  //updateTemp();
  getCurrentTemp().then((currentTemp) => {
    temperature.textContent = `${Math.round(currentTemp)}°`; // Assign the resolved value
  });
  // -->

  getCurrentWeatherCode().then((weatherCode) => {
    let currentWeather = null;
    if (weatherCode === 1 || weatherCode === 2 || weatherCode === 3) {
      currentWeather = "Partly Cloudy";
      //currentWeather = "Simke DERPE :P"
    } else {
      currentWeather = "IDK";
    }
    weather.textContent = currentWeather;
  });

  getDailyHighAndLow().then(({ maxTemp, minTemp }) => {
    highLowTemp.textContent = `H: ${Math.round(maxTemp)}° L: ${Math.round(
      minTemp
    )}°`;
  });

  //weather.textContent = "Sunny";
  //highLowTemp.textContent = "H:1° L:-3°";

  weatherDetails.appendChild(temperature);
  weatherDetails.appendChild(weather);
  weatherDetails.appendChild(highLowTemp);

  tempMainDiv.appendChild(cityName);
  //tempMainDiv.appendChild(temperature);
  //tempMainDiv.appendChild(weather);
  //tempMainDiv.appendChild(highLowTemp);
  tempMainDiv.appendChild(weatherDetails);

  content.appendChild(tempMainDiv);

  // Add event listener on a scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      tempMainDiv.classList.add("shrink");
    } else {
      tempMainDiv.classList.remove("shrink");
    }
  });

  // Add event listener to close window

  // Create Footer
  createFooter();

  // Call function to display Hourly Forecast
  hourlyForecast();
}

export { content, localWeather };

import { hourlyForecast } from "./hourly-forecast";
import { createFooter } from "./footer";
import "../styles/local-weather.css";
import { getWeatherConditions } from "../weather-conditions/weather-conditions";

// Experimaental
import {
  getCurrentTemp,
  getCurrentWeatherCode,
  getDailyHigh,
  getDailyLow,
  getLocationName,
  isDay,
  getCurrentTime,
  // Import new function to get location dynamically
  autoUpdateLocationName,
} from "../logic";

const content = document.getElementById("content");
content.classList.add("content");

// Default location coordinates

export function addBackgorundImg() {
  // Adding background image to the project - create a function later
  content.style.backgroundImage = "url('./background-images/sunny.jpg')";
  content.style.backgroundSize = "cover"; // Ensures the image covers the div
  content.style.backgroundPosition = "35% -50px"; // Adjusts the horizontal position
  content.style.backgroundRepeat = "no-repeat"; // Prevents repeating
  content.style.backgroundAttachment = "fixed"; // Keeps the image in place
}

addBackgorundImg();

function localWeather(locationAPI) {
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

  // getLocationName().then((location) => {
  //   cityName.textContent = location;
  // });

  Promise.all([
    getLocationName(),
    getCurrentTemp(),
    getCurrentWeatherCode(),
    getDailyHigh(),
    getDailyLow(),
    isDay(),
    getCurrentTime(),
  ]).then(
    ([
      location,
      currentTemp,
      weatherCode,
      maxTemp,
      minTemp,
      isDayArray,
      currentTime,
    ]) => {
      cityName.textContent = location;
      //console.log(location);
      temperature.textContent = `${Math.round(currentTemp)}°`; // Assign the resolved value
      //console.log(Math.round(currentTemp));
      highLowTemp.textContent = `H: ${maxTemp}° L: ${minTemp}°`;

      weather.textContent = getWeatherConditions(
        weatherCode,
        isDayArray[currentTime]
      );
    }
  );

  //const locationApi = `https://api.opencagedata.com/geocode/v1/json?q=45.7743+14.2153&key=06992bbeb6774b539da6dcc27fecae94`;

  autoUpdateLocationName(locationAPI).then((locationName) => {
    console.log(locationName, "LOCATION NAME");
    cityName.innerHTML = locationName;

  });

  weatherDetails.appendChild(temperature);
  weatherDetails.appendChild(weather);
  weatherDetails.appendChild(highLowTemp);

  tempMainDiv.appendChild(cityName);
  //tempMainDiv.appendChild(temperature);
  //tempMainDiv.appendChild(weather);
  //tempMainDiv.appendChild(highLowTemp);
  tempMainDiv.appendChild(weatherDetails);

  content.appendChild(tempMainDiv);

  // Add event listener on scroll

  // Add event listener to close window

  // Add event listener for scroll to hide content

  // Create Footer
  createFooter();

  // Call function to display Hourly Forecast
  hourlyForecast();
}

export { content, localWeather };

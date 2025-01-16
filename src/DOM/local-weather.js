// 1
import { hourlyForecast } from "./hourly-forecast";
import { createFooter } from "./footer";
import "../styles/local-weather.css";

// Experimaental
import {
  getCurrentTemp,
  getCurrentWeatherCode,
  getDailyHighAndLow,
  getLocationName,
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

  getLocationName().then((location) => {
    cityName.textContent = location;
  });

  //cityName.textContent = "Po";

  getCurrentTemp().then((currentTemp) => {
    temperature.textContent = `${Math.round(currentTemp)}°`; // Assign the resolved value
  });

  getCurrentWeatherCode().then((weatherCode) => {
    let currentWeather = null;
    if (weatherCode === 1 || weatherCode === 2 || weatherCode === 3) {
      currentWeather = "Partly Cloudy";
      // Add all other values
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

  /*
  document.addEventListener("scroll", () => {
    const tempMainDiv = document.querySelector(".temp-main-div");
    const widgets = document.querySelectorAll(
      ".double-widget, .single-widget-container"
    );

    // tempMainDivBottom: Calculates the bottom edge of the green box.
    const tempMainDivBottom = tempMainDiv.getBoundingClientRect().bottom;

    widgets.forEach((widget) => {
      // widgetTop: Checks the top position of each double-widget.
      const widgetTop = widget.getBoundingClientRect().top;

      // Adjust opacity based on position relative to temp-main-div
      // 	3.	Fade-Out Logic: If the widget’s top is within or below the green box, reduce opacity.
      if (widgetTop < tempMainDivBottom) {
        widget.style.opacity = Math.max(
          0,
          (widgetTop - tempMainDivBottom) / 100
        ); // Smooth fade-out
      } else {
        widget.style.opacity = 1; // Fully visible
      }
    });
  });
  // Fix position sticky as well (local-weather.css .temp-main-div)
*/
  // Create Footer
  createFooter();

  // Call function to display Hourly Forecast
  hourlyForecast();
}

export { content, localWeather };

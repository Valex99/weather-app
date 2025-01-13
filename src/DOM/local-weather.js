// 1
import { hourlyForecast } from "./hourly-forecast";
import { createFooter } from "./footer";
import '../styles/local-weather.css';


const content = document.getElementById("content");
content.classList.add("content");

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
  temperature.textContent = "1 °";
  weather.textContent = "Sunny";
  highLowTemp.textContent = "H:1° L:-3°";

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

  // Create Footer
  createFooter();

  // Call function to display Hourly Forecast
  hourlyForecast();
}

export { content, localWeather };

// 1
import { hourlyForecast } from "./hourly-forecast";
import { createFooter } from "./footer";

const content = document.getElementById("content");
content.classList.add("content");

function localWeather() {
  const tempMainDiv = document.createElement("div");
  tempMainDiv.classList.add("temp-main-div");

  const cityName = document.createElement("p");
  cityName.classList.add("city-name");

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

  tempMainDiv.appendChild(cityName);
  tempMainDiv.appendChild(temperature);
  tempMainDiv.appendChild(weather);
  tempMainDiv.appendChild(highLowTemp);

  content.appendChild(tempMainDiv);

  // Create Footer
  createFooter();

  // Call function to display Hourly Forecast
  hourlyForecast();
}

export { content, localWeather };

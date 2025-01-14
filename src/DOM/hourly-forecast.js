// 2
import { dailyForecast } from "./daily-forecast";
import clockIcon from "../project-icons/clock-icon.png";
import clearIcon from "../weather-icons/clear.png";
import "../styles/hourly-forecast.css";

export function hourlyForecast() {
  // 1. Main div
  const hourlyForecastDiv = document.createElement("div");
  hourlyForecastDiv.classList.add("double-widget");

  // 2. Div that holds img and title
  const iconTitleDiv = document.createElement("div");
  iconTitleDiv.classList.add("icon-title-div");

  // 2.2 Hourly forecast icon + header
  const clockImage = document.createElement("img");
  clockImage.src = clockIcon;
  clockImage.classList.add("icon");

  const hourlyForecastTitle = document.createElement("p");
  hourlyForecastTitle.classList.add("widget-title");
  hourlyForecastTitle.textContent = "HOURLY FORECAST";

  // 3. Div that holds hour by hour smaller divs
  const hourByHourDiv = document.createElement("div");
  hourByHourDiv.classList.add("hour-by-hour-div");

  iconTitleDiv.appendChild(clockImage);
  iconTitleDiv.appendChild(hourlyForecastTitle);

  hourlyForecastDiv.appendChild(iconTitleDiv);

  // Call eachHour for each value
  for (let i = 0; i < 26; i++) {
    eachHour(i, hourByHourDiv);
  }

  hourlyForecastDiv.appendChild(hourByHourDiv);

  content.appendChild(hourlyForecastDiv);

  // Call Daily forecast function
  dailyForecast();
}

// Create hourly forecast
function eachHour(n, elementToAppendTo) {
  const containerDiv = document.createElement("div");
  containerDiv.classList.add("container-div");

  const hour = document.createElement("p");
  hour.textContent = n;

  const weatherIcon = document.createElement("img");
  weatherIcon.src = clearIcon;

  const temp = document.createElement("p");
  temp.textContent = "2°";

  containerDiv.appendChild(hour);
  containerDiv.appendChild(weatherIcon);
  containerDiv.appendChild(temp);

  elementToAppendTo.appendChild(containerDiv);
}

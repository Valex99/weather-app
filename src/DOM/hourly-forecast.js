// 2
import { dailyForecast } from "./daily-forecast";
import clockIcon from "../project-icons/clock-icon.png";
import clearIcon from "../weather-icons/clear.png";
import "../styles/hourly-forecast.css";
import {
  getHourlyForecast,
  getCurrentTime,
  getWeatherCode,
  isDay,
} from "../logic";

import { getWeatherIcon } from "../weather-codes/weather-codes";

// Webpack will handle the JSON import automatically, turning it into a JavaScript object that you can easily access.

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

  getHourlyForecast().then((tempArr) => {
    const allTemps = tempArr;
    //console.log("All temps", allTemps);

    getCurrentTime().then((currentTime) => {
      const time = currentTime;

      getWeatherCode().then((weatherCode) => {
        const allWeatherCodes = weatherCode;

        isDay().then((values) => {
          const allIsDayValues = values;
          // Call eachHour for each value
          for (let i = 0; i < 24; i++) {
            eachHour(
              i,
              hourByHourDiv,
              allTemps,
              time,
              allWeatherCodes,
              allIsDayValues
            );
          }
        });
      });
    });
  });

  hourlyForecastDiv.appendChild(hourByHourDiv);

  content.appendChild(hourlyForecastDiv);

  // Call Daily forecast function
  dailyForecast();
}

// Create hourly forecast
function eachHour(
  n,
  elementToAppendTo,
  tempArr,
  currentTime,
  weatherCode,
  isDay
) {
  const containerDiv = document.createElement("div");
  containerDiv.classList.add("container-div");

  const hour = document.createElement("p");

  const hourInt = parseInt(currentTime);

  if (hourInt + n === hourInt) {
    hour.textContent = "Now";
  } else if (hourInt + n >= 24) {
    if (hourInt + n - 24 > 9) {
      hour.textContent = hourInt + n - 24;
    } else {
      hour.textContent = "0" + (hourInt + n - 24);
    }
  } else {
    hour.textContent = hourInt + n;
  }

  const weatherIcon = document.createElement("img");

  const weatherCodeAtIndex = weatherCode[n];

  //weatherIcon.src = clearIcon;
  weatherIcon.src = getWeatherIcon(weatherCode[n], isDay[n]);

  const temp = document.createElement("p");

  temp.textContent = tempArr[n] + "°";

  containerDiv.appendChild(hour);
  containerDiv.appendChild(weatherIcon);
  containerDiv.appendChild(temp);

  elementToAppendTo.appendChild(containerDiv);
}

// Add sunset and sunrise!

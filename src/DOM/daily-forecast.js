// 3
import calendarIcon from "../project-icons/calendar-icon.png";
import { windMap } from "./wind-map";
import clearIcon from "../weather-icons/clear.png";
import "../styles/daily-forecast.css";
import { getWeatherIcon } from "../weather-codes/weather-codes";

import { getTenDayForecast, getTenDayHigh, getTenDayLow } from "../logic";

const daysOfWeek = ["Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed"];

function dailyForecast() {
  // 1. Main div
  const dailyForecastDiv = document.createElement("div");
  dailyForecastDiv.classList.add("double-widget");

  // 2. Div that holds img and title
  const iconTitleDiv = document.createElement("div");
  iconTitleDiv.classList.add("icon-title-div");

  // 2.2 Daily forecast icon + header
  const calendarImage = document.createElement("img");
  calendarImage.src = calendarIcon;
  calendarImage.classList.add("icon");

  const dailyForecastTitle = document.createElement("p");
  dailyForecastTitle.classList.add("widget-title");
  dailyForecastTitle.textContent = "10-DAY FORECAST";

  // 3. Div that holds hour by hour smaller divs
  const dayByDayDiv = document.createElement("div");
  dayByDayDiv.classList.add("day-by-day-div");

  iconTitleDiv.appendChild(calendarImage);
  iconTitleDiv.appendChild(dailyForecastTitle);

  dailyForecastDiv.appendChild(iconTitleDiv);

  getTenDayForecast().then((codes) => {
    const weatherCodesArray = codes;
    //console.log(weatherCodesArray);

    getTenDayHigh().then((temps) => {
      const highTempArray = temps;

      getTenDayLow().then((temps) => {
        const lowTempArray = temps;

        // Call eachHour for each value
        for (let i = 0; i < 10; i++) {
          eachDay(
            i,
            dayByDayDiv,
            weatherCodesArray,
            highTempArray,
            lowTempArray
          );
        }
      });
    });
  });
  dailyForecastDiv.appendChild(dayByDayDiv);

  content.appendChild(dailyForecastDiv);

  // Call next function
  windMap();
}

// Create daily forecast
function eachDay(n, elementToAppendTo, weatherCodesArray, highTempArray, lowTempArray) {
  const dayDiv = document.createElement("div");
  dayDiv.classList.add("day-div");

  const day = document.createElement("p");
  day.classList.add("day-text");

  if (n === 0) {
    day.textContent = "Today";
  } else if (n > 6) {
    day.textContent = daysOfWeek[n - 7];
  } else {
    day.textContent = daysOfWeek[n];
  }

  const weatherIcon = document.createElement("img");

  weatherIcon.src = getWeatherIcon(weatherCodesArray[n], true);
  weatherIcon.classList.add("weather-icon");

  const minTemp = document.createElement("p");
  minTemp.textContent = lowTempArray[n] + "°"

  const graph = document.createElement("p");
  graph.textContent = "--------";

  const maxTemp = document.createElement("p");
  maxTemp.textContent = highTempArray[n] + "°"

  dayDiv.appendChild(day);
  dayDiv.appendChild(weatherIcon);
  dayDiv.appendChild(minTemp);
  dayDiv.appendChild(graph);
  dayDiv.appendChild(maxTemp);

  elementToAppendTo.appendChild(dayDiv);
}

export { dailyForecast };

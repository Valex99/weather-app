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
function eachDay(
  n,
  elementToAppendTo,
  weatherCodesArray,
  highTempArray,
  lowTempArray
) {
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
  minTemp.textContent = lowTempArray[n] + "°";

  const maxTemp = document.createElement("p");
  maxTemp.textContent = highTempArray[n] + "°";

  const barContainer = document.createElement("div");
  barContainer.classList.add("bar-container");
  //barContainer.textContent = "--------";

  const barBackground = document.createElement("div");
  barBackground.classList.add("bar-background");

  const barFilled = document.createElement("div");
  barFilled.classList.add("bar-filled");

  const currentIndicator = document.createElement("div");
  currentIndicator.classList.add("current-temp-indicator");

  // Calculate dynamic values
  const highTemp = highTempArray[n];
  const lowTemp = lowTempArray[n];
  const range = highTemp - lowTemp;

  const containerWidth = 100; // Total width of the container in percentage

  // Calculate bar width as a percentage of the total range
  const barWidth =
    (range / (Math.max(...highTempArray) - Math.min(...lowTempArray))) *
    containerWidth;
  barFilled.style.width = `${barWidth}%`;

  // Optionally, position the current indicator dynamically
  const currentTemp = highTemp + lowTemp; // Replace with actual current temp if available
  const currentPosition = ((currentTemp - lowTemp) / range) * containerWidth;
  currentIndicator.style.left = `${currentPosition}%`;

  if (n === 0) {
    currentIndicator.classList.add("visible");
  }

  // Append bar components
  barContainer.appendChild(barBackground);
  barContainer.appendChild(barFilled);
  barContainer.appendChild(currentIndicator);

  dayDiv.appendChild(day);
  dayDiv.appendChild(weatherIcon);
  dayDiv.appendChild(minTemp);
  dayDiv.appendChild(barContainer);
  dayDiv.appendChild(maxTemp);

  elementToAppendTo.appendChild(dayDiv);
}

export { dailyForecast };


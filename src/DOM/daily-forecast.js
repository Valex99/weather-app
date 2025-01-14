// 3
import calendarIcon from "../project-icons/calendar-icon.png";
import { windMap } from "./wind-map";
import clearIcon from "../weather-icons/clear.png";
import "../styles/daily-forecast.css";


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

  // Call eachHour for each value
  for (let i = 0; i < 10; i++) {
    eachDay(i, dayByDayDiv);
  }


  dailyForecastDiv.appendChild(dayByDayDiv);

  content.appendChild(dailyForecastDiv);

  windMap();
}

// Create daily forecast
function eachDay(n, elementToAppendTo) {
  const dayDiv = document.createElement("div");
  dayDiv.classList.add("day-div");

  const day = document.createElement("p");
  day.textContent = "Mon";

  const weatherIcon = document.createElement("img");
  weatherIcon.src = clearIcon;
  weatherIcon.classList.add("weather-icon")

  const minTemp = document.createElement("p");
  minTemp.textContent = "-2°";

  const graph = document.createElement("p");
  graph.textContent = "--------";

  const maxTemp = document.createElement("p");
  maxTemp.textContent = "4°";

  dayDiv.appendChild(day);
  dayDiv.appendChild(weatherIcon);
  dayDiv.appendChild(minTemp);
  dayDiv.appendChild(graph);
  dayDiv.appendChild(maxTemp);

  elementToAppendTo.appendChild(dayDiv);
}

export { dailyForecast };

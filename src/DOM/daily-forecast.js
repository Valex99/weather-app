// 3
import calendarIcon from "../project-icons/calendar-icon.png";
import { content } from "./local-weather";


function dailyForecast() {
  // 1. Main div
  const dailyForecastDiv = document.createElement("div");
  dailyForecastDiv.classList.add("daily-forecast-div");

  // 2. Div that holds img and title
  const iconTitleDiv = document.createElement("div");
  iconTitleDiv.classList.add("icon-title-div");

  // 2.2 Daily forecast icon + header
  const calendarImage = document.createElement("img");
  calendarImage.src = calendarIcon;
  calendarImage.classList.add("icon");

  const dailyForecastTitle = document.createElement("p");
  dailyForecastTitle.classList.add("daily-forecast-title");
  dailyForecastTitle.textContent = "DAILY FORECAST";

  // 3. Div that holds hour by hour smaller divs
  const dayByDayDiv = document.createElement("div");
  dayByDayDiv.classList.add("day-by-day-div");

  iconTitleDiv.appendChild(calendarImage);
  iconTitleDiv.appendChild(dailyForecastTitle);

  dailyForecastDiv.appendChild(iconTitleDiv);

  dailyForecastDiv.appendChild(dayByDayDiv);

  content.appendChild(dailyForecastDiv);
}

export { dailyForecast };

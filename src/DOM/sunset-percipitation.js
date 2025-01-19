import "../styles/sunset-precipitation.css";
import sunsetIcon from "../project-icons/sunset.png";
import waterDropIcon from "../project-icons/water.png";
import { content } from "./local-weather";
import { createParentContainer2 } from "./visibility-humidity";
import { getSunsetTime, getPrecipitation, getSunriseTime } from "../logic";

export function createParentContainer1() {
  const parentContainer = document.createElement("div");
  parentContainer.classList.add("single-widget-container");

  sunset(parentContainer);
  precipitation(parentContainer);

  content.appendChild(parentContainer);

  createParentContainer2();
}

function sunset(parentContainer) {
  // 1. Main div
  const sunsetDiv = document.createElement("div");
  sunsetDiv.classList.add("single-widget");
  sunsetDiv.classList.add("sunset-widget");

  // 2. Div that holds img and title
  const iconTitleDiv = document.createElement("div");
  iconTitleDiv.classList.add("icon-title-div");

  // 2.2 Daily forecast icon + header
  const sunsetImage = document.createElement("img");
  sunsetImage.src = sunsetIcon;
  sunsetImage.classList.add("icon");

  const sunsetTitle = document.createElement("p");
  sunsetTitle.classList.add("widget-title");
  sunsetTitle.textContent = "SUNSET";

  // 3 Content div
  const sunsetContent = document.createElement("div");

  const sunsetTime = document.createElement("div");
  sunsetTime.classList.add("feels-like-temp");

  const sunriseTime = document.createElement("div");
  sunriseTime.classList.add("sunrise-time")

  Promise.all([getSunsetTime(), getSunriseTime()]).then(([sunset, sunrise]) => {
    sunsetTime.textContent = sunset;
    sunriseTime.textContent = `Sunrise: ${sunrise}`;
  });

  sunsetContent.appendChild(sunsetTime);
  sunsetContent.appendChild(sunriseTime);

  sunsetDiv.appendChild(iconTitleDiv);
  iconTitleDiv.appendChild(sunsetImage);
  iconTitleDiv.appendChild(sunsetTitle);

  sunsetDiv.appendChild(sunsetContent);

  //content.appendChild(feelsLikeDiv);
  parentContainer.appendChild(sunsetDiv);
}

function precipitation(parentContainer) {
  // 1. Main div
  const precipitationDiv = document.createElement("div");
  precipitationDiv.classList.add("single-widget");

  // 2. Div that holds img and title
  const iconTitleDiv = document.createElement("div");
  iconTitleDiv.classList.add("icon-title-div");

  // 2.2 Daily forecast icon + header
  const waterImage = document.createElement("img");
  waterImage.src = waterDropIcon;
  waterImage.classList.add("icon");

  const precipitationTitle = document.createElement("p");
  precipitationTitle.classList.add("widget-title");
  precipitationTitle.textContent = "PRECIPITATION";

  // 3 Content div
  const precipitationContent = document.createElement("div");

  const precipitationValue = document.createElement("div");
  precipitationValue.classList.add("feels-like-temp");

  const precipitationDay = document.createElement("div");
  precipitationDay.classList.add("precipitation-day");
  precipitationDay.textContent = "Today";

  const precipitationDescription = document.createElement("div");
  precipitationDescription.classList.add("precipitation-description");
  // Auto fix this
  precipitationDescription.textContent = "Nex expected is 3mm on Wed";

  getPrecipitation().then((precipitation) => {
    precipitationValue.textContent = precipitation + " mm";
  });

  // Append content elements
  precipitationContent.appendChild(precipitationValue);
  precipitationContent.appendChild(precipitationDay);
  precipitationContent.appendChild(precipitationDescription);

  precipitationDiv.appendChild(iconTitleDiv);
  iconTitleDiv.appendChild(waterImage);
  iconTitleDiv.appendChild(precipitationTitle);

  precipitationDiv.appendChild(precipitationContent);

  //content.appendChild(feelsLikeDiv);
  parentContainer.appendChild(precipitationDiv);
}

import "../styles/sunset-precipitation.css";
import eyeIcon from "../project-icons/eye.png";
import humidityIcon from "../project-icons/waves.png";
import { content } from "./local-weather";
import { moon } from "./full-moon";

export function createParentContainer2() {
  const parentContainer = document.createElement("div");
  parentContainer.classList.add("single-widget-container");

  visibility(parentContainer);
  humidity(parentContainer);

  content.appendChild(parentContainer);

  moon();
}

function visibility(parentContainer) {
  // 1. Main div
  const visibilityDiv = document.createElement("div");
  visibilityDiv.classList.add("single-widget");

  // 2. Div that holds img and title
  const iconTitleDiv = document.createElement("div");
  iconTitleDiv.classList.add("icon-title-div");

  // 2.2 Daily forecast icon + header
  const eyeImage = document.createElement("img");
  eyeImage.src = eyeIcon;
  eyeImage.classList.add("icon");

  const visibilityTitle = document.createElement("p");
  visibilityTitle.classList.add("widget-title");
  visibilityTitle.textContent = "VISIBILITY";

  // 3 Content div
  const visibilityContent = document.createElement("div");
  visibilityContent.classList.add("placeholder-div");

  visibilityDiv.appendChild(iconTitleDiv);
  iconTitleDiv.appendChild(eyeImage);
  iconTitleDiv.appendChild(visibilityTitle);

  visibilityDiv.appendChild(visibilityContent);

  //content.appendChild(feelsLikeDiv);
  parentContainer.appendChild(visibilityDiv);
}

function humidity(parentContainer) {
  // 1. Main div
  const humidityDiv = document.createElement("div");
  humidityDiv.classList.add("single-widget");

  // 2. Div that holds img and title
  const iconTitleDiv = document.createElement("div");
  iconTitleDiv.classList.add("icon-title-div");

  // 2.2 Daily forecast icon + header
  const humidityImage = document.createElement("img");
  humidityImage.src = humidityIcon;
  humidityImage.classList.add("icon");

  const humidityTitle = document.createElement("p");
  humidityTitle.classList.add("widget-title");
  humidityTitle.textContent = "HUMIDITY";

  // 3 Content div
  const humidityContent = document.createElement("div");
  humidityContent.classList.add("placeholder-div");

  humidityDiv.appendChild(iconTitleDiv);
  iconTitleDiv.appendChild(humidityImage);
  iconTitleDiv.appendChild(humidityTitle);

  humidityDiv.appendChild(humidityContent);

  //content.appendChild(feelsLikeDiv);
  parentContainer.appendChild(humidityDiv);
}

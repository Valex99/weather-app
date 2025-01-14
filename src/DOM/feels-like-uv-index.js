import "../styles/feels-like-uv-index.css";
import { content } from "./local-weather";
import thermometerIcon from "../project-icons/thermometer.png";
import sunIcon from "../project-icons/sun.png";
import { wind } from "./wind";

export function createParentContainer() {
  const parentContainer = document.createElement("div");
  parentContainer.classList.add("single-widget-container");

  feelsLike(parentContainer);
  uvIndex(parentContainer);

  content.appendChild(parentContainer);

  wind();
}

function feelsLike(parentContainer) {
  // 1. Main div
  const feelsLikeDiv = document.createElement("div");
  feelsLikeDiv.classList.add("feels-like-div");
  feelsLikeDiv.classList.add("single-widget");

  // 2. Div that holds img and title
  const iconTitleDiv = document.createElement("div");
  iconTitleDiv.classList.add("icon-title-div");

  // 2.2 Daily forecast icon + header
  const thermometerImage = document.createElement("img");
  thermometerImage.src = thermometerIcon;
  thermometerImage.classList.add("icon");

  const feelsLikeTitle = document.createElement("p");
  feelsLikeTitle.classList.add("widget-title");
  feelsLikeTitle.textContent = "FEELS LIKE";

  // 3 Content div
  const feelsLikeContent = document.createElement("div");
  feelsLikeContent.classList.add("placeholder-div");

  feelsLikeDiv.appendChild(iconTitleDiv);
  iconTitleDiv.appendChild(thermometerImage);
  iconTitleDiv.appendChild(feelsLikeTitle);

  feelsLikeDiv.appendChild(feelsLikeContent);

  //content.appendChild(feelsLikeDiv);
  parentContainer.appendChild(feelsLikeDiv);
}

function uvIndex(parentContainer) {
  // 1. Main div
  const uvIndexDiv = document.createElement("div");
  uvIndexDiv.classList.add("uv-index-div");
  uvIndexDiv.classList.add("single-widget");

  // 2. Div that holds img and title
  const iconTitleDiv = document.createElement("div");
  iconTitleDiv.classList.add("icon-title-div");

  // 2.2 Daily forecast icon + header
  const sunImage = document.createElement("img");
  sunImage.src = sunIcon;
  sunImage.classList.add("icon");

  const uvIndexTitle = document.createElement("p");
  uvIndexTitle.classList.add("widget-title");
  uvIndexTitle.textContent = "UV INDEX";

  // 3 Content div
  const uvIndexContent = document.createElement("div");
  uvIndexContent.classList.add("placeholder-div");

  uvIndexDiv.appendChild(iconTitleDiv);
  iconTitleDiv.appendChild(sunImage);
  iconTitleDiv.appendChild(uvIndexTitle);

  uvIndexDiv.appendChild(uvIndexContent);

  //content.appendChild(uvIndexDiv);
  parentContainer.appendChild(uvIndexDiv);
}

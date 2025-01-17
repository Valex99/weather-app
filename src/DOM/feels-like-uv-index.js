import "../styles/feels-like-uv-index.css";
import { content } from "./local-weather";
import thermometerIcon from "../project-icons/thermometer.png";
import sunIcon from "../project-icons/sun.png";
import { wind } from "./wind";

import { getFeelsLikeTemp, getCurrentTemp } from "../logic";

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

  // DO EVERYTHING INSIDE CONTENT DIV
  const feelsLikeTemp = document.createElement("div");
  feelsLikeTemp.classList.add("feels-like-temp");

  getFeelsLikeTemp().then((apparentTemp) => {
    feelsLikeTemp.textContent = apparentTemp + "°";
  });

  const actualTemp = document.createElement("div");
  actualTemp.classList.add("actual-temp");

  getCurrentTemp().then((currentTemp) => {
    actualTemp.textContent = "Actual: " + Math.round(currentTemp) + "°";
  });

  // Shows how feels like temp compares to actual temp
  // Left side represents lowest perceived temp and right side represents actual temp
  // Slider bar adjust dynmically depending on relationship beetween feels like and actual temp
  const horizontalBar = document.createElement("div");
  horizontalBar.classList.add("horizontal-bar");

  const barTrack = document.createElement("div");
  barTrack.classList.add("bar-track");

  const barFilled = document.createElement("div");
  barFilled.classList.add("bar-filled");

  const sliderIndicator = document.createElement("div");
  sliderIndicator.classList.add("slider-indicator");

  const sliderValue = document.createElement("div");
  sliderValue.classList.add("slider-value");

  // Css implemented
  // NEXT-> IMPLEMENT JS
  // CHAT GPT FUNCTION
  // Import Daily high and low (or array and take index0 value)
  /*

function updateHorizontalBar(feelsLikeTemp, actualTemp, minTemp, maxTemp) {
  const horizontalBar = document.querySelector('.horizontal-bar');
  const barFilled = horizontalBar.querySelector('.bar-filled');
  const sliderIndicator = horizontalBar.querySelector('.slider-indicator');
  const sliderValue = sliderIndicator.querySelector('.slider-value');

  // Calculate percentage positions
  const range = maxTemp - minTemp;
  const feelsLikePercent = ((feelsLikeTemp - minTemp) / range) * 100;
  const actualPercent = ((actualTemp - minTemp) / range) * 100;

  // Update the filled bar
  barFilled.style.width = `${feelsLikePercent}%`;

  // Position the slider
  sliderIndicator.style.left = `${feelsLikePercent}%`;

  // Update the slider value
  sliderValue.textContent = `${feelsLikeTemp}°`;
}

// Example Usage
updateHorizontalBar(-3, 1, -10, 10); // Feels like: -3°, Actual: 1°, Min: -10°, Max: 10°

*/

  // This needs to be fixed -> dynamically update messages
  // If weather is windy display x message
  // Just like weather icon function (return message)
  const description = document.createElement("div");
  description.classList.add("description");
  description.textContent = "Wind is making it feel colder";

  // Append bar elements to horizontal bar
  horizontalBar.appendChild(barTrack);
  horizontalBar.appendChild(barFilled);
  horizontalBar.appendChild(sliderIndicator);
  horizontalBar.appendChild(sliderValue);

  // Append elements to content
  feelsLikeContent.appendChild(feelsLikeTemp);
  feelsLikeContent.appendChild(actualTemp);
  feelsLikeContent.appendChild(horizontalBar);
  feelsLikeContent.appendChild(description);

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

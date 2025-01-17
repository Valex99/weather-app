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

  // getFeelsLikeTemp().then((apparentTemp) => {
  //   feelsLikeTemp.textContent = apparentTemp + "°";
  // });

  const actualTemp = document.createElement("div");
  actualTemp.classList.add("actual-temp");

  // getCurrentTemp().then((currentTemp) => {
  //   actualTemp.textContent = "Actual: " + Math.round(currentTemp) + "°";
  // });

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

  // This needs to be fixed -> dynamically update messages
  // If weather is windy display x message
  // Just like weather icon function (return message)
  const description = document.createElement("div");
  description.classList.add("description");
  description.textContent = "Wind is making it feel colder";

  // Append bar elements to horizontal bar
  sliderIndicator.appendChild(sliderValue);

  horizontalBar.appendChild(barTrack);
  horizontalBar.appendChild(barFilled);
  horizontalBar.appendChild(sliderIndicator);
  //horizontalBar.appendChild(sliderValue);

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

  // A WAY OF HANDLING PRIOMISES WITH PROMISE.ALL
  // Fetch and update data
  Promise.all([getFeelsLikeTemp(), getCurrentTemp()]).then(
    ([apparentTemp, currentTemp]) => {
      feelsLikeTemp.textContent = `${apparentTemp}°`;
      actualTemp.textContent = `Actual: ${Math.round(currentTemp)}°`;

      // Calculate percentage fill
      const minTemp = Math.min(apparentTemp, currentTemp) - 10; // Adjust range
      const maxTemp = Math.max(apparentTemp, currentTemp) + 10;
      const fillPercentage =
        ((apparentTemp - minTemp) / (maxTemp - minTemp)) * 100;

      // Update bar
      barFilled.style.width = `${fillPercentage}%`;

      // Update slider position
      console.log(apparentTemp, currentTemp);

      sliderIndicator.style.left = `${fillPercentage}%`;
      sliderValue.textContent = `${apparentTemp - Math.round(currentTemp)} °`;
    }
  );
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

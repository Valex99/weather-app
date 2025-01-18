import "../styles/visibility-humidity.css";
import eyeIcon from "../project-icons/eye.png";
import humidityIcon from "../project-icons/waves.png";
import { content } from "./local-weather";
import { moon } from "./full-moon";
import { getVisibility, getHumidity, getDewPoint } from "../logic";

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

  const visibilityValue = document.createElement("div");
  visibilityValue.classList.add("feels-like-temp");

  getVisibility().then((visibility) => {
    visibilityValue.textContent = Math.round(visibility / 1000) + " km"
  })

  const visibilityDescription = document.createElement("div");
  visibilityDescription.classList.add("humidity-description");
  visibilityDescription.textContent = "Perfectly clear view."


  // Append content elements
  visibilityContent.appendChild(visibilityValue)
  visibilityContent.appendChild(visibilityDescription)

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

  const humidityValue = document.createElement("div");
  humidityValue.classList.add("feels-like-temp");

  const humidityDescription = document.createElement("div");
  humidityDescription.classList.add("humidity-description");

  Promise.all([getHumidity(), getDewPoint()]).then(([humidity, dewPoint]) => {
    humidityValue.textContent = humidity + "%";

    humidityDescription.textContent = `The dew point is ${dewPoint}° right now`;
  });
  // Append content elements
  humidityContent.appendChild(humidityValue);
  humidityContent.appendChild(humidityDescription);

  humidityDiv.appendChild(iconTitleDiv);
  iconTitleDiv.appendChild(humidityImage);
  iconTitleDiv.appendChild(humidityTitle);

  humidityDiv.appendChild(humidityContent);

  //content.appendChild(feelsLikeDiv);
  parentContainer.appendChild(humidityDiv);
}

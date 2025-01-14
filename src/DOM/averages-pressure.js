import chartIcon from "../project-icons/chart.png";
import pressureIcon from "../project-icons/pressure.png";
import { content } from "./local-weather";


export function createParentContainer3() {
  const parentContainer = document.createElement("div");
  parentContainer.classList.add("single-widget-container");

  averages(parentContainer);
  pressure(parentContainer);

  content.appendChild(parentContainer);

  //Next function call
}

function averages(parentContainer) {
  // 1. Main div
  const averagesDiv = document.createElement("div");
  averagesDiv.classList.add("single-widget");

  // 2. Div that holds img and title
  const iconTitleDiv = document.createElement("div");
  iconTitleDiv.classList.add("icon-title-div");

  // 2.2 Daily forecast icon + header
  const averagesImage = document.createElement("img");
  averagesImage.src = chartIcon;
  averagesImage.classList.add("icon");

  const averagesTitle = document.createElement("p");
  averagesTitle.classList.add("widget-title");
  averagesTitle.textContent = "AVERAGES";

  // 3 Content div
  const averagesContent = document.createElement("div");
  averagesContent.classList.add("placeholder-div");

  averagesDiv.appendChild(iconTitleDiv);
  iconTitleDiv.appendChild(averagesImage);
  iconTitleDiv.appendChild(averagesTitle);

  averagesDiv.appendChild(averagesContent);

  parentContainer.appendChild(averagesDiv);
}

function pressure(parentContainer) {
  // 1. Main div
  const pressureDiv = document.createElement("div");
  pressureDiv.classList.add("single-widget");

  // 2. Div that holds img and title
  const iconTitleDiv = document.createElement("div");
  iconTitleDiv.classList.add("icon-title-div");

  // 2.2 Daily forecast icon + header
  const pressureImage = document.createElement("img");
  pressureImage.src = pressureIcon;
  pressureImage.classList.add("icon");

  const pressureTitle = document.createElement("p");
  pressureTitle.classList.add("widget-title");
  pressureTitle.textContent = "PRESSURE";

  // 3 Content div
  const pressureContent = document.createElement("div");
  pressureContent.classList.add("placeholder-div");

  pressureDiv.appendChild(iconTitleDiv);
  iconTitleDiv.appendChild(pressureImage);
  iconTitleDiv.appendChild(pressureTitle);

  pressureDiv.appendChild(pressureContent);

  //content.appendChild(feelsLikeDiv);
  parentContainer.appendChild(pressureDiv);
}

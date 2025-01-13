// 4
import windIcon from "../project-icons/windy.png";
import "../styles/wind-map.css";
import mapImage from "../project-icons/weather-map.png"
import { createParentContainer } from "./feels-like-uv-index";

// Figure rest out later
import { content } from "./local-weather";

export function windMap() {
  // 1. Main div
  const windMapDiv = document.createElement("div");
  windMapDiv.classList.add("wind-map-div");

  // 2. Div that holds img and title
  const iconTitleDiv = document.createElement("div");
  iconTitleDiv.classList.add("icon-title-div");

  // 2.2 Hourly forecast icon + header
  const windImage = document.createElement("img");
  windImage.src = windIcon;
  windImage.classList.add("icon");

  const windTitle = document.createElement("p");
  windTitle.classList.add("wind-title");
  windTitle.textContent = "WIND MAP";

  // 3. Div that holds map img
  const windMap = document.createElement("div");
  windMap.classList.add("wind-map");

  // 4. Create and append Map Image to wind map
  const map = document.createElement("img");
  map.src = mapImage
  map.classList.add("map")


  iconTitleDiv.appendChild(windImage);
  iconTitleDiv.appendChild(windTitle);

  windMapDiv.appendChild(iconTitleDiv);

  windMap.appendChild(map)
  windMapDiv.appendChild(windMap);

  content.appendChild(windMapDiv);

  //
  createParentContainer();
}

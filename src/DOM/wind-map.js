// 4
import windIcon from "../project-icons/windy.png";

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

  // 3. Div that holds hour by hour smaller divs
  const widMap = document.createElement("div");
  widMap.classList.add("wind-map");

  iconTitleDiv.appendChild(windImage);
  iconTitleDiv.appendChild(windTitle);

  windMapDiv.appendChild(iconTitleDiv);

  windMapDiv.appendChild(widMap);

  content.appendChild(windMapDiv);
}

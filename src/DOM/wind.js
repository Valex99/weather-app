import "../styles/wind.css";
import windIcon from "../project-icons/windy.png";
import { content } from "./local-weather";
import { createParentContainer1 } from "./sunset-percipitation";
import compasImage from "../project-icons/compas.png";

import { getWindSpeed, getGustsSpeed, getWindDirection } from "../logic";

export function wind() {
  // 1. Main div
  const windDiv = document.createElement("div");
  windDiv.classList.add("double-widget");

  // 2. Div that holds img and title
  const iconTitleDiv = document.createElement("div");
  iconTitleDiv.classList.add("icon-title-div");

  // 2.2 Daily forecast icon + header
  const windImage = document.createElement("img");
  windImage.src = windIcon;
  windImage.classList.add("icon");

  const windTitle = document.createElement("p");
  windTitle.classList.add("widget-title");
  windTitle.textContent = "WIND";

  // 3 Content div
  const windContent = document.createElement("div");
  windContent.classList.add("moon-content");

  const windInfo = document.createElement("div");
  windInfo.classList.add("moon-info");

  //
  const windSpeed = document.createElement("div");
  windSpeed.classList.add("moon-info-div");
  windSpeed.textContent = "Wind";

  const windSpeedPara = document.createElement("p");

  //
  const gusts = document.createElement("div");
  gusts.classList.add("moon-info-div");
  gusts.textContent = "Gusts";

  const gustsPara = document.createElement("p");
  //

  const direction = document.createElement("div");
  direction.classList.add("next-full-moon");
  direction.textContent = "Direction";

  const directionPara = document.createElement("p");

  Promise.all([getWindSpeed(), getGustsSpeed(), getWindDirection()]).then(
    ([windSpeed, gustsSpeed, windDirection]) => {
      windSpeedPara.textContent = windSpeed + " km/h";
      gustsPara.textContent = gustsSpeed + " km/h";
      directionPara.textContent = windDirection + " °NE";
    }
  );

  //const compasImg = document.createElement("img");
  //compasImg.classList.add("moon-img");
  //compasImg.src = compasImage;

  windSpeed.appendChild(windSpeedPara);
  gusts.appendChild(gustsPara);
  direction.appendChild(directionPara);

  windInfo.appendChild(windSpeed);
  windInfo.appendChild(gusts);
  windInfo.appendChild(direction);

  windContent.appendChild(windInfo);
  //windContent.appendChild(compasImg);

  windDiv.appendChild(iconTitleDiv);

  iconTitleDiv.appendChild(windImage);
  iconTitleDiv.appendChild(windTitle);

  windDiv.appendChild(windContent);

  content.appendChild(windDiv);

  createParentContainer1();
}

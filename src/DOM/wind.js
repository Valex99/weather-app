import "../styles/wind.css";
import windIcon from "../project-icons/windy.png";
import { content } from "./local-weather";
import { createParentContainer1 } from "./sunset-percipitation";

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
  windContent.classList.add("placeholder-div");

  windDiv.appendChild(iconTitleDiv);
  iconTitleDiv.appendChild(windImage);
  iconTitleDiv.appendChild(windTitle);

  windDiv.appendChild(windContent);

  content.appendChild(windDiv);

  createParentContainer1();
}

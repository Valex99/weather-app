import "../styles/full-moon.css";
import moonIcon from "../project-icons/moon.png";
import { content } from "./local-weather";
import { createParentContainer3 } from "./averages-pressure";

export function moon() {
  // 1. Main div
  const moonDiv = document.createElement("div");
  moonDiv.classList.add("double-widget");

  // 2. Div that holds img and title
  const iconTitleDiv = document.createElement("div");
  iconTitleDiv.classList.add("icon-title-div");

  // 2.2 Daily forecast icon + header
  const moonImage = document.createElement("img");
  moonImage.src = moonIcon;
  moonImage.classList.add("icon");

  const moonTitle = document.createElement("p");
  moonTitle.classList.add("widget-title");
  moonTitle.textContent = "FULL MOON";

  // 3 Content div
  const windContent = document.createElement("div");
  windContent.classList.add("placeholder-div");

  moonDiv.appendChild(iconTitleDiv);
  iconTitleDiv.appendChild(moonImage);
  iconTitleDiv.appendChild(moonTitle);

  moonDiv.appendChild(windContent);

  content.appendChild(moonDiv);

  createParentContainer3();
}

import "../styles/full-moon.css";
import moonIcon from "../project-icons/moon.png";
//import moonIcon from "../project-icons/moon4.png";
import { content } from "./local-weather";
import { createParentContainer3 } from "./averages-pressure";
import moon2 from "../project-icons/moon3.png";

export function moon() {
  // 1. Main div
  const moonDiv = document.createElement("div");
  moonDiv.classList.add("double-widget");

  // 2. Div that holds img and title
  const iconTitleDiv = document.createElement("div");
  iconTitleDiv.classList.add("icon-title-div");
  iconTitleDiv.classList.add("moon-title-div");


  // 2.2 Daily forecast icon + header
  const moonImage = document.createElement("img");
  moonImage.src = moonIcon;
  moonImage.classList.add("icon");

  const moonTitle = document.createElement("p");
  moonTitle.classList.add("widget-title");
  moonTitle.textContent = "FULL MOON";

  // 3 Content div
  const moonContent = document.createElement("div");
  moonContent.classList.add("moon-content");

  const moonInfo = document.createElement("div");
  moonInfo.classList.add("moon-info");

  const illumination = document.createElement("div");
  illumination.classList.add("moon-info-div");
  illumination.textContent = "Illumination";

  const illuminationPara = document.createElement("p");
  illuminationPara.textContent = "72%";

  const moonrise = document.createElement("div");
  moonrise.classList.add("moon-info-div");
  moonrise.textContent = "Moonrise";

  const moonrisePara = document.createElement("p");
  moonrisePara.textContent = "22:54";

  const nextFullMoon = document.createElement("div");
  nextFullMoon.classList.add("next-full-moon");
  nextFullMoon.textContent = "Next Full Moon";

  const nextFullMoonPara = document.createElement("p");
  nextFullMoonPara.textContent = "24"

  const moonImg = document.createElement("img");
  moonImg.classList.add("moon-img");
  moonImg.src = moon2;

  //
  illumination.appendChild(illuminationPara);
  moonrise.appendChild(moonrisePara);
  nextFullMoon.appendChild(nextFullMoonPara);

  moonInfo.appendChild(illumination);
  moonInfo.appendChild(moonrise);
  moonInfo.appendChild(nextFullMoon);

  // Apppend content elements
  moonContent.appendChild(moonInfo);
  moonContent.appendChild(moonImg);

  moonDiv.appendChild(iconTitleDiv);
  iconTitleDiv.appendChild(moonImage);
  iconTitleDiv.appendChild(moonTitle);

  moonDiv.appendChild(moonContent);

  content.appendChild(moonDiv);

  createParentContainer3();
}

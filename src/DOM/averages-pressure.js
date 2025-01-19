import "../styles/averages-pressure.css";
import chartIcon from "../project-icons/chart.png";
import pressureIcon from "../project-icons/pressure.png";
import { content } from "./local-weather";
import { getDailyHigh } from "../logic";
import pressureWidget from "../project-icons/pressure-widget.png";

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

  //
  const averagesTemp = document.createElement("div");
  averagesTemp.classList.add("feels-like-temp");

  const averagesText = document.createElement("div");
  averagesText.classList.add("averages-text");
  averagesText.textContent = "above average daily high";

  const today = document.createElement("div");
  today.classList.add("today-average");
  today.textContent = "Today";

  const todayHigh = document.createElement("p");
  todayHigh.classList.add("high-temp");

  getDailyHigh().then((dailyHigh) => {
    todayHigh.textContent = ` H:${dailyHigh}°`;

    // Hardcoded it
    if (dailyHigh - 3 > 0) {
      averagesTemp.textContent = `+${dailyHigh - 3}°`;
    } else if (dailyHigh - 3 === 0) {
      averagesTemp.textContent = `${dailyHigh - 3}°`;
    } else {
      averagesTemp.textContent = `${dailyHigh - 3}°`;
    }
  });

  const average = document.createElement("div");
  average.classList.add("today-average");
  average.textContent = "Average";

  const averageHigh = document.createElement("p");
  averageHigh.classList.add("high-temp");
  averageHigh.textContent = "H:3°";

  today.appendChild(todayHigh);
  average.appendChild(averageHigh);

  // Append content elements
  averagesContent.appendChild(averagesTemp);
  averagesContent.appendChild(averagesText);
  averagesContent.appendChild(today);
  averagesContent.appendChild(average);

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
  pressureContent.classList.add("pressure-content")

  const pressureImg = document.createElement("img");
  pressureImg.classList.add("pressure-img")
  pressureImg.src = pressureWidget

  pressureContent.appendChild(pressureImg);

  pressureDiv.appendChild(iconTitleDiv);
  iconTitleDiv.appendChild(pressureImage);
  iconTitleDiv.appendChild(pressureTitle);

  pressureDiv.appendChild(pressureContent);

  //content.appendChild(feelsLikeDiv);
  parentContainer.appendChild(pressureDiv);
}


// Image used for pressure -> fix this later
import { content } from "./local-weather";
import mapIcon from "../project-icons/map-outline.png";
import menuIcon from "../project-icons/list.png";
import "../styles/footer.css";
import { showMenuPage } from "../menu-page/menu";
import { mainWeatherArray } from "../menu-page/search-logic";

export function createFooter() {
  const footerDiv = document.createElement("div");
  footerDiv.classList.add("footer-div");

  // Footer content
  const mapImage = document.createElement("img");
  mapImage.src = mapIcon;
  mapImage.classList.add("footer-icon");

  const dotsMenu = document.createElement("div");
  dotsMenu.classList.add("dots-menu");
  dotsMenu.textContent = ". . . . .";

  const menuImage = document.createElement("img");
  menuImage.src = menuIcon;
  menuImage.classList.add("footer-icon");

  // Add event listener to menu icon
  menuImage.addEventListener("click", () => {
    content.textContent = "";
    content.style.backgroundImage = "";
    // Call function that creates weather search bar (import it as well)
    showMenuPage();
  });

  footerDiv.appendChild(mapImage);
  footerDiv.appendChild(dotsMenu);
  footerDiv.appendChild(menuImage);

  content.appendChild(footerDiv);
}

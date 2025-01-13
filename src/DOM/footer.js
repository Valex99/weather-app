import { content } from "./local-weather";
import mapIcon from "../project-icons/map-outline.png";
import menuIcon from "../project-icons/menu-icon.png";
import "../styles/footer.css";

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

  footerDiv.appendChild(mapImage);
  footerDiv.appendChild(dotsMenu);
  footerDiv.appendChild(menuImage);

  content.appendChild(footerDiv);
}

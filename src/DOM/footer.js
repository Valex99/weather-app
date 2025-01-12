import { content } from "./local-weather";

export function createFooter() {
  const footerDiv = document.createElement("div");
  footerDiv.classList.add("footer-div");

  content.appendChild(footerDiv);
}

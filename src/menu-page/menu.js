import "./menu.css";
import menuIcon from "../project-icons/horizontal-circle.png";
import searchIcon from "../project-icons/magnify.png";
import micIcon from "../project-icons/microphone.png";
//import { getNewLocation } from "./search-logic";
import { handleInput } from "./search-logic";

export function showMenuPage() {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  const content = document.getElementById("content");
  content.classList.add("change-content");

  const menuImgDiv = document.createElement("div");
  menuImgDiv.classList.add("menu-img-div");

  const menuImg = document.createElement("img");
  menuImg.classList.add("menu-img");
  menuImg.src = menuIcon;

  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header-div");
  headerDiv.textContent = "Weather";

  const searchBar = document.createElement("div");
  searchBar.id = "searchBar";
  searchBar.classList.add("search-bar");

  // Create the inner container
  const searchContainer = document.createElement("div");
  searchContainer.classList.add("search-container");

  // Create the search icon
  const searchIconImg = document.createElement("img");
  searchIconImg.classList.add("search-icon");
  searchIconImg.src = searchIcon;

  // Create the input field
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.classList.add("search-input");
  searchInput.placeholder = "Search for a city or airport";
  searchInput.setAttribute("aria-label", "Search");

  // Create the microphone icon
  const micIconImg = document.createElement("img");
  micIconImg.classList.add("search-icon");
  micIconImg.src = micIcon;

  // Append all elements to the container
  searchContainer.appendChild(searchIconImg);
  searchContainer.appendChild(searchInput);
  searchContainer.appendChild(micIconImg);
  searchBar.appendChild(searchContainer);

  const locations = document.createElement("div");
  locations.classList.add("locations");

  // Add event listener on input
  searchInput.addEventListener("input", () => {
    // Call function to fetch data
    locations.textContent = "";
    handleInput(searchInput.value);
  });

  /*
  // Create childs to append to locations grid
  const location1 = document.createElement("div")
  location1.classList.add("location-child")

  const location2 = document.createElement("div")
  location2.classList.add("location-child")

  const location3 = document.createElement("div")
  location3.classList.add("location-child")

  const location4 = document.createElement("div")
  location4.classList.add("location-child")


  const location5 = document.createElement("div")
  location5.classList.add("location-child")

  const location6 = document.createElement("div")
  location6.classList.add("location-child")
*/

  menuImgDiv.appendChild(menuImg);

  menuContainer.appendChild(menuImgDiv);
  menuContainer.appendChild(headerDiv);
  menuContainer.appendChild(searchBar);
  menuContainer.appendChild(locations);

  // Append childs to grid container
  /*
  locations.appendChild(location1)
  locations.appendChild(location2)
  locations.appendChild(location3)
  locations.appendChild(location4)
  locations.appendChild(location5)
  locations.appendChild(location6)
*/

  createLocationDiv(locations);

  content.appendChild(menuContainer);
}

function createLocationDiv(parentElement) {
  const locationChild = document.createElement("div");
  locationChild.classList.add("location-child");

  // ADD BACKGROUND
  // Adding background image to the project - create a function later
  locationChild.style.backgroundImage = "url('./background-images/sunny.jpg')";
  locationChild.style.backgroundSize = "cover"; // Ensures the image covers the div
  locationChild.style.backgroundPosition = "35% -50px"; // Adjusts the horizontal position
  locationChild.style.backgroundRepeat = "no-repeat"; // Prevents repeating
  locationChild.style.backgroundAttachment = "fixed"; // Keeps the image in place

  const cityTempTime = document.createElement("div");
  cityTempTime.classList.add("city-temp-time");

  const cityTime = document.createElement("div");
  cityTime.classList.add("city-time");

  const city = document.createElement("p");
  city.classList.add("city");

  const time = document.createElement("p");
  time.classList.add("time");

  const temp = document.createElement("p");
  temp.classList.add("temp");

  const weatherHighLow = document.createElement("div");
  weatherHighLow.classList.add("weather-high-low");

  const weather = document.createElement("p");
  weather.classList.add("weather-p");

  const highLow = document.createElement("p");

  // Call constructor here
  city.textContent = "Postojna";
  time.textContent = "18:40";
  temp.textContent = "8°";
  weather.textContent = "Cloudy";
  highLow.textContent = "H:11° L:3°";
  //

  weatherHighLow.appendChild(weather);
  weatherHighLow.appendChild(highLow);

  cityTime.appendChild(city);
  cityTime.appendChild(time);

  cityTempTime.appendChild(cityTime);
  cityTempTime.appendChild(temp);

  locationChild.appendChild(cityTempTime);
  locationChild.appendChild(weatherHighLow);

  // Append it to location
  parentElement.appendChild(locationChild);
}
// Add locations (CREATE ARRAY);

export function showSearchLocations(arrayLength) {
  for (let i = 0; i < arrayLength; i++) {
    console.log("sup");
    // create div ->
    // div text content = position in array
    // Append to gird
  }
}

import "./menu.css";
import menuIcon from "../project-icons/horizontal-circle.png";
import searchIcon from "../project-icons/magnify.png";
import micIcon from "../project-icons/microphone.png";
import {
  fetchWeatherSearch,
  handleInput,
  mainWeatherArray,
  getWeatherWindowData,
  AddLocation,
  clearSearchArray,
} from "./search-logic";

import { addBackgorundImg, localWeather } from "../DOM/local-weather";
import { fetchWeather, fetchWeatherCaller } from "../logic";

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

  menuImgDiv.appendChild(menuImg);

  menuContainer.appendChild(menuImgDiv);
  menuContainer.appendChild(headerDiv);
  menuContainer.appendChild(searchBar);
  menuContainer.appendChild(locations);

  //createLocationDiv(locations, 0);
  for (let i = 0; i < mainWeatherArray.length; i++) {
    createLocationDiv(locations, i)
  }

  content.appendChild(menuContainer);
}

function createLocationDiv(parentElement, index) {
  const locationChild = document.createElement("div");
  locationChild.classList.add("location-child");

  // ADD A UNIQUE INDENTIFIER USING DATASETS
  locationChild.dataset.index = index;
  locationChild.dataset.name = mainWeatherArray[index].name; // Optional, store city name

  // Adding background image to the project - create a function later
  locationChild.style.backgroundImage = "url('./background-images/sunny.jpg')";
  locationChild.style.backgroundSize = "cover"; // Ensures the image covers the div
  locationChild.style.backgroundPosition = "35% -105px"; // Adjusts the horizontal position
  locationChild.style.backgroundRepeat = "no-repeat"; // Prevents repeating
  locationChild.style.backgroundAttachment = "scroll"; // Keeps the image in place

  const cityTempTime = document.createElement("div");
  cityTempTime.classList.add("city-temp-time");

  const cityTime = document.createElement("div");
  cityTime.classList.add("city-time");

  const city = document.createElement("p");
  city.classList.add("city");

  const time = document.createElement("p");
  time.classList.add("time");

  const temp = document.createElement("p");
  temp.classList.add("temp-location");

  const weatherHighLow = document.createElement("div");
  weatherHighLow.classList.add("weather-high-low");

  const weather = document.createElement("p");
  weather.classList.add("weather-p");

  const highLow = document.createElement("p");

  city.textContent = mainWeatherArray[index].city;
  time.textContent = mainWeatherArray[index].time;
  temp.textContent = Math.round(mainWeatherArray[index].temp) + "°";
  weather.textContent = mainWeatherArray[index].weather;
  highLow.textContent = `H:${mainWeatherArray[index].low}° L:${mainWeatherArray[index].high}°`;

  weatherHighLow.appendChild(weather);
  weatherHighLow.appendChild(highLow);

  cityTime.appendChild(city);
  cityTime.appendChild(time);

  cityTempTime.appendChild(cityTime);
  cityTempTime.appendChild(temp);

  locationChild.appendChild(cityTempTime);
  locationChild.appendChild(weatherHighLow);

  parentElement.appendChild(locationChild);

  locationChild.addEventListener("click", (event) => {
    console.log("Location child clicekd");
    const clickedElement = event.target.closest(".location-child");

    if (clickedElement) {
      // Access data attributes‚
      const index = clickedElement.dataset.index;
      console.log("INDEX: ", index);

      const lat = mainWeatherArray[index].lat;
      const lon = mainWeatherArray[index].lon;

      console.log(lat, lon);

      const selectedLocationAPI = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,precipitation_probability,rain,showers,weather_code,pressure_msl,visibility,uv_index,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration,uv_index_max,precipitation_sum&timezone=Europe%2FBerlin&forecast_days=14`;
      const locationAPI = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=06992bbeb6774b539da6dcc27fecae94`;
      console.log(locationAPI);


      fetchWeatherCaller(selectedLocationAPI).then(() => {

        // Remove everything from content
        const content = document.getElementById("content")
        content.classList.remove("change-content");
        content.textContent = "";
        addBackgorundImg();
        localWeather(locationAPI);
      })
    }
  });
}

export function showSearchLocations(searchLocationsArray) {
  const locationGrid = document.querySelector(".locations");

  // Clear existing locations
  locationGrid.textContent = "";

  for (let i = 0; i < searchLocationsArray.length; i++) {
    const locationDiv = document.createElement("div");
    locationDiv.classList.add("location-search-child");

    locationDiv.textContent = searchLocationsArray[i].name;

    // Add dataset for easier identification
    locationDiv.dataset.index = i;
    locationDiv.dataset.name = searchLocationsArray[i].name;

    // Append to grid
    locationGrid.appendChild(locationDiv);
  }

  // VERY IMPORTANT LESSON -> REMOVE EVENT LISTENERS BEFORE ADDING NEW ONES
  // Remove any existing event listeners by cloning the element
  // Add a single event listener to the parent container (event delegation)

  // Remove any existing event listeners by cloning the element
  const newLocationGrid = locationGrid.cloneNode(true);
  locationGrid.parentNode.replaceChild(newLocationGrid, locationGrid);

  newLocationGrid.addEventListener("click", (event) => {
    // Check if the clicked element is a location-search-child
    const clickedElement = event.target.closest(".location-search-child");

    if (clickedElement) {
      // Access data attributes‚
      const index = clickedElement.dataset.index;
      const name = clickedElement.dataset.name;

      //console.log("Clicked Index:", index);
      //console.log("Clicked City:", name);

      // Go into array at index[index]
      const clickedLat = searchLocationsArray[index].latitude;
      const clickedLon = searchLocationsArray[index].longitude;

      //console.log("Clicked LAT:", clickedLat);
      //console.log("Clicked LON:", clickedLon);

      let lat = parseFloat(clickedLat.toFixed(4));
      let lon = parseFloat(clickedLon.toFixed(4));

      const newAPI = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,precipitation_probability,rain,showers,weather_code,pressure_msl,visibility,uv_index,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration,uv_index_max,precipitation_sum&timezone=Europe%2FBerlin&forecast_days=14`;

      // Now that you have coordinates, fetch weather data for thoes coordinates
      // Create another fetch weather function
      // Fetch the weather data
      fetchWeatherSearch(newAPI)
        .then((data) => {
          console.log("Fetched weather data: ", data);

          // Now call getWeatherWindowData with the same API and data
          return getWeatherWindowData(newAPI); // This will return the desired weather data
        })
        .then(
          ({ currentTemp, currentTime, weatherCode, dailyLow, dailyHigh }) => {
            // Handle the returned values from getWeatherWindowData
            console.log("Current Temp:", currentTemp);
            console.log("Current Time:", currentTime);
            console.log("Weather Code:", weatherCode);
            console.log("Daily Low:", dailyLow);
            console.log("Daily High:", dailyHigh);

            // Now you can use these values as needed
            const newLocation = new AddLocation(
              name,
              currentTime,
              currentTemp,
              weatherCode,
              dailyLow,
              dailyHigh,
              lat,
              lon
            );

            mainWeatherArray.push(newLocation);
            console.log(
              "MAIN WEATHER ARRAY AFTER ADDING SELECTED LOCATION: ",
              mainWeatherArray
            );
            clearSearchArray();

            const searchInput = document.querySelector(".search-input");
            searchInput.placeholder = "Search for a city or airport";
            searchInput.value = "";

            newLocationGrid.textContent = "";

            for (let i = 0; i < mainWeatherArray.length; i++) {
              createLocationDiv(newLocationGrid, i);
            }
          }
        )
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  });
}

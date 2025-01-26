import { showSearchLocations } from "./menu";
import {
  getLocationName,
  getCurrentTemp,
  getCurrentWeatherCode,
  getDailyHigh,
  getDailyLow,
  getLatitude,
  getLongitude,
  getCurrentHourAndMinute,
} from "../logic";

import { getWeatherConditions } from "../weather-conditions/weather-conditions";

// Function to be called on each input

// Open Weather API website link (key)
// https://home.openweathermap.org/api_keys

// Link
// https://developers.google.com/maps/documentation/geocoding/overview

// CREATE ANOTHER FETCH WEATHER FUNCTION FOR EACH ADDED LOCATION
export async function fetchWeatherSearch(api) {
  console.log("Fetching new weather data...");
  const response = await fetch(api);
  const data = await response.json();

  return data;
}

// Only call this once the data is loaded
export async function getWeatherWindowData(api) {
  const data = await fetchWeatherSearch(api);

  const currentTemp = Math.round(data.current.temperature_2m);
  const currentTime = data.current.time.slice(-5);
  // This should call function for weather code right away
  const weatherCode = getWeatherConditions(data.current.weather_code, true);
  const dailyLow = Math.round(data.daily.temperature_2m_min[0]);
  const dailyHigh = Math.round(data.daily.temperature_2m_max[0]);

  return { currentTemp, currentTime, weatherCode, dailyLow, dailyHigh };
}


const mainWeatherArray = [];

// Gets called right at the top
addDefaultLocationToArray();

const searchLocationsArray = [];

const geocodingBaseAPI = "http://api.openweathermap.org/geo/1.0/direct";
const myApiKey = "2a3113322fc8a6e2b5019a13a59d6ab9";

let debouncerTimer;

// Function to fetch location data
export async function getNewLocation(searchInput) {
  // Correctly add '?' before the query parameters
  const geocodingAPI = `${geocodingBaseAPI}?q=${searchInput}&limit=5&appid=${myApiKey}`;

  try {
    const response = await fetch(geocodingAPI);

    // Check if the response is okay
    //if (!response.ok) {
    //  throw new Error(`API Error: ${response.status}`);
    //}

    const data = await response.json();

    console.log("Fetched Data:", data);

    // Empty array first (on each input)
    while (searchLocationsArray.length !== 0) {
      searchLocationsArray.pop();
    }

    // Add locations to array
    for (let i = 0; i < 5; i++) {
      //searchLocationsArray.push(data[i].name);

      const location = {
        name: data[i].name,
        longitude: data[i].lon,
        latitude: data[i].lat,
        country: data[i].country,
      };
      searchLocationsArray.push(location);
    }

    console.log("SEARCH LOACTIONS ARRAY: ", searchLocationsArray);

    showSearchLocations(searchLocationsArray);

    //console.log("called");

    //return data; // Optional: Return the data if needed elsewhere
    return data;
  } catch (error) {
    console.error("Error fetching location data:", error.message);
  }
}

export function AddLocation(city, time, temp, weather, low, high, lat, lon) {
  this.city = city;
  this.time = time;
  this.temp = temp;
  this.weather = weather;
  this.low = low;
  this.high = high;
  // coordinates‚
  this.lat = lat;
  this.lon = lon;
}

export function handleInput(searchInput) {
  // Clear any previously set timeout
  clearTimeout(debouncerTimer);

  // Set a new timeout
  debouncerTimer = setTimeout(() => {
    console.log("Fetching data for:", searchInput);
    getNewLocation(searchInput);
  }, 1000); // 500ms delay
}

async function addDefaultLocationToArray() {
  const defaulLocation = new AddLocation(
    await getLocationName(),
    await getCurrentHourAndMinute(),
    await getCurrentTemp(),
    await getCurrentWeatherCode(),
    await getDailyLow(),
    await getDailyHigh(),
    await getLatitude(),
    await getLongitude()
  );

  //console.log("DEFAULT LOCATION: ", defaulLocation);
  const weatherCode = getWeatherConditions(defaulLocation.weather);
  defaulLocation.weather = weatherCode;

  mainWeatherArray.push(defaulLocation);

  console.log("Main weather array: ", mainWeatherArray);
}

export function clearSearchArray() {
  while (searchLocationsArray.length !== 0) {
    searchLocationsArray.pop()
  }
  console.log(searchLocationsArray);
}

export { mainWeatherArray };

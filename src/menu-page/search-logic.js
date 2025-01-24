import { showSearchLocations } from "./menu";

// Function to be called on each input

// Open Weather API website link (key)
// https://home.openweathermap.org/api_keys

// Link
// https://developers.google.com/maps/documentation/geocoding/overview

const selectedLocationsArray = [];
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
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

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
        name: data[i].name, // Replace with the actual property for the name
        longitude: data[i].lon, // Replace with actual property for longitude
        latitude: data[i].lat, // Replace with actual property for latitude
        country: data[i].country, // Replace with actual property for country
      };
      searchLocationsArray.push(location);
    }

    console.log("SEARCH LOACTIONS ARRAY: ",searchLocationsArray);

    showSearchLocations(searchLocationsArray);

    console.log("called");

    //return data; // Optional: Return the data if needed elsewhere
    return data;
  } catch (error) {
    console.error("Error fetching location data:", error.message);
  }
}

export function AddLocation(city, time, temp, weather, highLow, lon, lat) {
  this.city = city;
  this.time = time;
  this.temp = temp;
  this.weather = weather;
  this.highLow = highLow;
  // coordinates
  this.lon = lon;
  this.lat = lat;
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

// Function to be called on each input

// Link
// https://developers.google.com/maps/documentation/geocoding/overview

// Add your api key
const geocodingAPI =
  "https://api.openweathermap.org/geo/1.0/direct?q=city_name&limit=5&appid=";

export function getNewLocation() {
  console.log("function called");
}

export function AddLocation() {
  this.city = city;
  this.time = time;
  this.temp = temp;
  this.weather = weather;
  this.highLow = highLow;
}

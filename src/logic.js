const API =
  "https://api.open-meteo.com/v1/forecast?latitude=45.7743&longitude=14.2153&current=temperature_2m,relative_humidity_2m,is_day,rain,wind_speed_10m&minutely_15=temperature_2m,is_day&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,rain,showers,weather_code,visibility,uv_index,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration,uv_index_max,precipitation_sum&timezone=Europe%2FBerlin";

export async function fetchWeather() {
  const response = await fetch(API);
  const weatherData = await response.json();
  console.log(weatherData);
  return weatherData;
}

export async function getCurrentTemp() {
  const data = await fetchWeather();
  return data.current.temperature_2m;
}

export async function getCurrentWeatherCode() {
  const data = await fetchWeather();
  return data.hourly.weather_code[0];
}

export async function getDailyHighAndLow() {
  const data = await fetchWeather();
  const maxTemp = data.daily.temperature_2m_max[0];
  const minTemp = data.daily.temperature_2m_min[0];

  return { maxTemp, minTemp }; // return an object with both values
}
// console.log(weatherData.hourly.temperature_2m[0]);

// const currentTemp = weatherData.hourly.temperature_2m[0];
// console.log("Current temp is:", currentTemp);

// const weatherCode = weatherData.daily.weather_code[0];
// console.log(weatherCode);

// //return currentTemp
// console.log(weatherData);

// Use lindter for your code
// 1) CREATE A PLAN WHERE TO PUT YOUR API CALL CODE (Separate file or?)
// 2) Fix scrolling on home page
// 3) put icons / imgs / elemnts inside each widget
// 4) Maybe create a class in logic .js

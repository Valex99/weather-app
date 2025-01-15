const API =
  "https://api.open-meteo.com/v1/forecast?latitude=45.7743&longitude=14.2153&current=temperature_2m,relative_humidity_2m,is_day,rain,wind_speed_10m&minutely_15=temperature_2m,is_day&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,rain,showers,weather_code,visibility,uv_index,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration,uv_index_max,precipitation_sum&timezone=Europe%2FBerlin";

// Location api KEY (openCage geocoder)
const myKey = "06992bbeb6774b539da6dcc27fecae94"
const lat = 45.7743;
const lon = 14.2153;

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

export async function getLocationName() {
    const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${myKey}`)
    const loaction = await response.json();

    console.log(loaction.results[0].components.town);
    return loaction.results[0].components.town;
}

export async function getHourlyForecast() {
    const data = await fetchWeather();

    const currentTime = data.current.time
    console.log("CURRENT TIME IS:", currentTime);
    // Last two numbers should always be 00
    let updatedDateTime = currentTime.replace(/:\d{2}$/, ":00");
    console.log(updatedDateTime);

    // Find index of that time in hourly.time
    const timeIndex = data.hourly.time.find(time => time === updatedDateTime)
    console.log(timeIndex);

}

// Use lindter for your code
// 1) CREATE A PLAN WHERE TO PUT YOUR API CALL CODE (Separate file or?)
// 2) Fix scrolling on home page
// 3) put icons / imgs / elemnts inside each widget
// 4) Maybe create a class in logic .js

// 1) Find current time
// 2) Find index of current time in the array .hourly.temperature_2m / time

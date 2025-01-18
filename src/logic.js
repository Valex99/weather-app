// Using caching mechanism
let cachedWeatherData = null; // Cache to store the API response
let weatherFetchPromise = null; // Cache to store the ongoing fetch promise

const API = "https://api.open-meteo.com/v1/forecast?latitude=45.7743&longitude=14.2153&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,weather_code,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,precipitation_probability,rain,showers,weather_code,visibility,uv_index,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration,uv_index_max,precipitation_sum&timezone=Europe%2FBerlin&forecast_days=14"
const API1 =
  "https://api.open-meteo.com/v1/forecast?latitude=45.7743&longitude=14.2153&current=temperature_2m,relative_humidity_2m,is_day,rain,weather_code,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,rain,showers,weather_code,visibility,uv_index,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration,uv_index_max,precipitation_sum&timezone=Europe%2FBerlin&forecast_days=14";

const API2 =
  "https://api.open-meteo.com/v1/forecast?latitude=45.7743&longitude=14.2153&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,rain,weather_code,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,rain,showers,weather_code,visibility,uv_index,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration,uv_index_max,precipitation_sum&timezone=Europe%2FBerlin&forecast_days=14";

const API3 =
  "https://api.open-meteo.com/v1/forecast?latitude=45.7743&longitude=14.2153&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,weather_code,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,rain,showers,weather_code,visibility,uv_index,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration,uv_index_max,precipitation_sum&timezone=Europe%2FBerlin&forecast_days=14";
// Location api KEY (openCage geocoder)
const myKey = "06992bbeb6774b539da6dcc27fecae94";
const lat = 45.7743;
const lon = 14.2153;

// fetchWeatherData explanation
// 1.	If cachedWeatherData exists, it immediately returns it without fetching.
// 2.	If cachedWeatherData is null but a fetch is already in progress, it returns the ongoing fetch promise (weatherFetchPromise).
// 3.	Only if no fetch is in progress (weatherFetchPromise === null) does it initiate a new fetch.
// 4.	Once the fetch completes, it caches the data and resets weatherFetchPromise so future calls know no fetch is ongoing.
export async function fetchWeather() {
  if (cachedWeatherData) {
    console.log("Using cached weather data:", cachedWeatherData);
    return cachedWeatherData; // Return the cached data if available
  }

  if (!weatherFetchPromise) {
    console.log("Fetching new weather data...");
    weatherFetchPromise = fetch(API)
      .then((response) => response.json())
      .then((data) => {
        cachedWeatherData = data; // Cache the fetched data
        weatherFetchPromise = null; // Reset the fetch promise after completion
        console.log("Fetched new weather data: ", cachedWeatherData);
        return data;
      })
      .catch((error) => {
        weatherFetchPromise = null; // Reset on error
        console.error("Error fetching weather data:", error);
        throw error;
      });
  }

  return weatherFetchPromise; // Return the ongoing fetch promise
}

export async function getCurrentTemp() {
  const data = await fetchWeather();
  return data.current.temperature_2m;
}

export async function getFeelsLikeTemp() {
  const data = await fetchWeather();
  return Math.round(data.current.apparent_temperature);
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
  const response = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${myKey}`
  );
  const loaction = await response.json();

  //console.log(loaction.results[0].components.town);
  return loaction.results[0].components.town;
}

export async function getHourlyForecast() {
  const data = await fetchWeather();

  const currentTime = data.current.time;

  // Last two numbers should always be 00
  let updatedDateTime = currentTime.replace(/:\d{2}$/, ":00");
  //console.log(updatedDateTime);

  // Find index of that time in hourly.time
  const timeIndex = data.hourly.time.findIndex(
    (time) => time === updatedDateTime
  );
  console.log("Time index: ", timeIndex);

  const dailyTempArray = data.hourly.temperature_2m.slice(
    timeIndex,
    timeIndex + 24
  );

  // Round the values up ->
  const roundedTempArray = dailyTempArray.map((temp) => Math.round(temp));

  return roundedTempArray;
}

export async function getCurrentTime() {
  const data = await fetchWeather();

  const currentTime = data.current.time;
  // Last two numbers should always be 00
  const updatedDateTime = currentTime.replace(/:\d{2}$/, ":00");

  const timeOnly = updatedDateTime.slice(-5);

  const hourOnly = timeOnly.split(":")[0];

  return hourOnly;
}

export async function getWeatherCode() {
  const data = await fetchWeather();
  const currentHour = await getCurrentTime();
  //console.log(currentHour, typeof currentHour);

  const currentHourInt = parseInt(currentHour);

  const dailyWeatherCodeArray = data.hourly.weather_code.slice(
    currentHourInt, // Start index -> first item included at this index
    currentHourInt + 24 // End index -> last index not included
  );

  //console.log(dailyWeatherCodeArray);
  return dailyWeatherCodeArray;
}

// Check if is day from current hour onwards
export async function isDay() {
  const data = await fetchWeather();
  const currentHour = await getCurrentTime();

  const currentHourInt = parseInt(currentHour);

  const isDayArray = data.hourly.is_day.slice(
    currentHourInt,
    currentHourInt + 24
  );
  //console.log("Is day array: ", isDayArray);

  return isDayArray;
}

export async function getCurrentDay() {
  const data = await fetchWeather();

  const currentTime = data.current.time;
  console.log();

  return currentTime;
}

export async function getTenDayForecast() {
  const data = await fetchWeather();
  const dailyWeatherCodes = data.daily.weather_code;
  console.log("Daily Weather Codes: ", dailyWeatherCodes);

  return dailyWeatherCodes;
}

/////////
export async function getTenDayHigh() {
  const data = await fetchWeather();

  const maxTempArray = data.daily.temperature_2m_max;

  return maxTempArray.map((temp) => Math.round(temp));
}

export async function getTenDayLow() {
  const data = await fetchWeather();

  const minTempArray = data.daily.temperature_2m_min;

  return minTempArray.map((temp) => Math.round(temp));
}

export async function getUvIndex() {
  const data = await fetchWeather();

  const currentHour = await getCurrentTime();
  const currentHourInt = parseInt(currentHour);

  //console.log("last",data.hourly.uv_index[parseInt(currentHour)]);
  return data.hourly.uv_index[currentHourInt];
}

export async function getPrecipitation() {
  const data = await fetchWeather();

  return data.current.precipitation;
}

export async function getHumidity() {
  const data = await fetchWeather();

  return data.current.relative_humidity_2m;
}

export async function getDewPoint() {
  const data = await fetchWeather();

  const currentHour = await getCurrentTime();

  const currentHourInt = parseInt(currentHour);

  return Math.round(data.hourly.dew_point_2m[currentHourInt])
}
// Use lindter for your code
// 4) Maybe create a class in logic .js

// 1) Find current time
// 2) Find index of current time in the array .hourly.temperature_2m / time

import "./styles.css";

//import { getWeather } from "./logic";
import { localWeather } from "./DOM/local-weather";
import { fetchWeather } from "./logic";

// Fetch and cache data immediately when the app starts
const defaultAPI =
  "https://api.open-meteo.com/v1/forecast?latitude=45.7743&longitude=14.2153&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,precipitation_probability,rain,showers,weather_code,pressure_msl,visibility,uv_index,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration,uv_index_max,precipitation_sum&timezone=Europe%2FBerlin&forecast_days=14";
 
 // const defaultLocationApi = `https://api.opencagedata.com/geocode/v1/json?q=45.7743+14.2153&key=06992bbeb6774b539da6dcc27fecae94`;


(async () => {
  await fetchWeather(defaultAPI);
})();


const defaultLocationApi = `https://api.opencagedata.com/geocode/v1/json?q=45.7743+14.2153&key=06992bbeb6774b539da6dcc27fecae94`;

localWeather(defaultLocationApi);

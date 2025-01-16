import "./styles.css";

//import { getWeather } from "./logic";
import { localWeather } from "./DOM/local-weather";
import { fetchWeather } from "./logic";

// Fetch and cache data immediately when the app starts
(async () => {
    await fetchWeather();
})();

localWeather();
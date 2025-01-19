export function getWeatherConditions(weather_code, is_day) {
  if (is_day) {
    if (weather_code === 0) {
      return "Clear";
    } else if (weather_code === 1) {
      return "Mostly Clear";
    } else if (weather_code === 2) {
      return "Cloudy";
    } else if (weather_code === 3) {
      return "Very Cloudy";
    } else if (weather_code === 45) {
      return "Foggy";
    } else if (weather_code === 48) {
      return "Rime Fog";
    } else if (weather_code === 51) {
      return "Light Drizzle";
    } else if (weather_code === 53) {
      return "Drizzle";
    } else if (weather_code === 55) {
      return "Heavy Drizzle";
    } else if (weather_code === 56) {
      return "Light Freezing Drizzle";
    } else if (weather_code === 57) {
      return "Freezing Drizzle";
    } else if (weather_code === 61) {
      return "Light Rain";
    } else if (weather_code === 63) {
      return "Rain";
    } else if (weather_code === 65) {
      return "Heavy Rain";
    } else if (weather_code === 66) {
      return "Light Freezing Rain";
    } else if (weather_code === 67) {
      return "Freezing Rain";
    } else if (weather_code === 71) {
      return "Light Snow";
    } else if (weather_code === 73) {
      return "Snow";
    } else if (weather_code === 75) {
      return "Heavy Snow";
    } else if (weather_code === 77) {
      return "Snow Grains";
    } else if (weather_code === 80) {
      return "Light Showers";
    } else if (weather_code === 81) {
      return "Showers";
    } else if (weather_code === 82) {
      return "Heavy Showers";
    } else if (weather_code === 85) {
      return "Light Snow Showers";
    } else if (weather_code === 86) {
      return "Snow Showers";
    } else if (weather_code === 95) {
      return "Thunderstorm";
    } else if (weather_code === 96) {
      return "Light Thunderstorms With Hail";
    } else if (weather_code === 99) {
      return "Thunderstorm With Hail";
    }
  } else {
    if (weather_code === 0) {
      return "Sunny";
    } else if (weather_code === 1) {
      return "Mostly Sunny";
    } else if (weather_code === 2) {
      return "Cloudy";
    } else if (weather_code === 3) {
      return "Very Cloudy";
    } else if (weather_code === 45) {
      return "Foggy";
    } else if (weather_code === 48) {
      return "Rime Fog";
    } else if (weather_code === 51) {
      return "Light Drizzle";
    } else if (weather_code === 53) {
      return "Drizzle";
    } else if (weather_code === 55) {
      return "Heavy Drizzle";
    } else if (weather_code === 56) {
      return "Light Freezing Drizzle";
    } else if (weather_code === 57) {
      return "Freezing Drizzle";
    } else if (weather_code === 61) {
      return "Light Rain";
    } else if (weather_code === 63) {
      return "Rain";
    } else if (weather_code === 65) {
      return "Heavy Rain";
    } else if (weather_code === 66) {
      return "Light Freezing Rain";
    } else if (weather_code === 67) {
      return "Freezing Rain";
    } else if (weather_code === 71) {
      return "Light Snow";
    } else if (weather_code === 73) {
      return "Snow";
    } else if (weather_code === 75) {
      return "Heavy Snow";
    } else if (weather_code === 77) {
      return "Snow Grains";
    } else if (weather_code === 80) {
      return "Light Showers";
    } else if (weather_code === 81) {
      return "Showers";
    } else if (weather_code === 82) {
      return "Heavy Showers";
    } else if (weather_code === 85) {
      return "Light Snow Showers";
    } else if (weather_code === 86) {
      return "Snow Showers";
    } else if (weather_code === 95) {
      return "Thunderstorm";
    } else if (weather_code === 96) {
      return "Light Thunderstorms With Hail";
    } else if (weather_code === 99) {
      return "Thunderstorm With Hail";
    }
  }
}

import { API_key } from "./SECRETS.js";

const state = {};
const getData = async function (city) {
  try {
    // Fetch the request
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_key}`,
      { method: "GET", mode: "cors" }
    );
    // Parse as JSON
    const data = await response.json();

    // Check is response is good - Change to actual Error
    if (!response.ok) {
      return "INPUT ERROR";
    }

    // Get the relevent values from the data and assign them to state
    state.current = data.main.temp.toFixed(0);
    state.high = data.main.temp_max.toFixed(0);
    state.low = data.main.temp_min.toFixed(0);
    state.humidity = data.main.humidity.toFixed(0);
    state.wind = data.wind.speed.toFixed(0);

    // SORT OUT ICONS
    const weather = data.weather[0].main;
    switch (weather) {
      case "Rain":
      case "Drizzle":
        state.weather = "rainy";
        break;
      case "Thunderstorm":
        state.weather = "thunderstorm";
        break;
      case "Snow":
        state.weather = "snow";
        break;
      case "Clear":
        state.weather = "partly-sunny";
        break;
      default:
        state.weather = "cloudy";
        break;
    }
  } catch (err) {
    return "SERVER ERROR";
  }
};

export { state, getData };

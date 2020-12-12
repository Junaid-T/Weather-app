import { state, getData } from "./model.js";
import {
  render,
  renderIcon,
  getQuery,
  toggle,
  toggleUnit,
  view,
  errorMessage,
} from "./view.js";

const showData = async function (query) {
  // Get the data and assign it to state.
  await getData(query).then((message) => {
    if (message) {
      errorMessage();
    }
  });
  if (!state.current) return;

  // Get data from state and render it
  render(state.current, state.high, state.low, state.humidity, state.wind);

  // Render icon
  renderIcon(state.weather);
};

// Sets up the event listeners for the toggle functions
const toggleHandler = function () {
  return view().toggle.addEventListener("click", () => {
    toggle();
    toggleUnit(state.current, state.high, state.low);
  });
};

const init = function () {
  const form = () => document.getElementById("form");

  toggleHandler();

  form().addEventListener("submit", (event) => {
    event.preventDefault();
    const query = getQuery();
    showData(query);
    form().reset();
  });
};

init();

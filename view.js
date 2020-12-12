const view = function () {
  return {
    today: document.getElementById("today"),
    current: document.getElementById("current"),
    high: document.getElementById("high"),
    low: document.getElementById("low"),
    humidity: document.getElementById("humidity"),
    wind: document.getElementById("wind"),
    icon: document.getElementById("icon-main"),
    toggle: document.getElementById("toggle"),
    toggleUnit: document.getElementById("toggle-switch"),
    toggleRound: document.getElementById("toggle-round"),
    errorMessage: document.getElementById("errorMessage"),
  };
};
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// Toggle units
const toggle = function () {
  if (view().toggleUnit.checked) {
    view().toggle.className = "active";
    view().toggleUnit.checked = false;
    view().toggleRound.className = "active";
  } else {
    view().toggle.className = "inactive";
    view().toggleUnit.checked = true;
    view().toggleRound.className = "inactive";
  }
};

// Toggle text
const toggleUnit = function (currentV, highV, lowV) {
  if (!view().toggleUnit.checked) {
    view().current.innerHTML = `Current: ${(currentV * (9 / 5) + 32).toFixed(
      0
    )}&#8457`;
    view().high.innerHTML = `High: ${(highV * (9 / 5) + 32).toFixed(0)}&#8457`;
    view().low.innerHTML = `Low: ${(lowV * (9 / 5) + 32).toFixed(0)}&#8457`;
  } else {
    view().current.innerHTML = `Current: ${currentV}&#8451`;
    view().high.innerHTML = `High: ${highV}&#8451`;
    view().low.innerHTML = `Low: ${lowV}&#8451`;
  }
};

// Get Query
const getQuery = function () {
  view().errorMessage.style.visibility = "hidden";
  return document.getElementById("search").value;
};

// A function to render the current values
const render = function (currentV, highV, lowV, humidityV, windV) {
  view().today.style.visibility = "visible";
  view().current.innerHTML = `Current: ${currentV}&#8451`;
  view().high.innerHTML = `High: ${highV}&#8451`;
  view().low.innerHTML = `Low: ${lowV}&#8451`;
  view().humidity.innerHTML = `Humidity: ${humidityV}%`;
  view().wind.innerHTML = `Wind: ${windV}mph`;
  view().toggle.style.visibility = "visible";
  view().toggleRound.style.visibility = "visible";
};

// A function to render the icon
const renderIcon = function (type) {
  view().icon.setAttribute("name", `${type}`);
};

// Toggle error message
const errorMessage = function () {
  const message = view().errorMessage;
  message.style.visibility = "visible";
};
////////////////////////////////////////////////////////////////////////////
export { render, renderIcon, getQuery, toggle, toggleUnit, view, errorMessage };

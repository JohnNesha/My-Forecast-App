function currentWeather(response) {
  let temperatureElement = document.querySelector("#temp-number");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchEnteredCity(city) {
  let apiKey = "a723fd412o41a9d1a23tfcb7443f0307";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(currentWeather);
}

function lookupCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchEnteredCity(searchInput.value);
}

let citySearch = document.querySelector("#search-form");
citySearch.addEventListener("submit", lookupCity);

searchEnteredCity("Indianapolis");

function currentWeather(response) {
  let temperatureElement = document.querySelector("#temp-number");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#current-time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");

  cityElement.innerHTML = response.data.city;

  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}"  class="temp_icon" />`;
  timeElement.innerHTML = formatDate(date);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windElement.innerHTML = `${response.data.wind.speed}km/h`;
  temperatureElement.innerHTML = Math.round(temperature);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
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

function displayForecast() {
  let days = ["Tues", "Weds", "Thurs", "Fri", "Sat"];
  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `
    <div class="weather_forecast_day">
            <div class="weather_forecast_date">${day}</div>
            <div class="weather_forecast_icon">🌤️</div>
            <div class="weather_forecast_temps">
              <div class="weather_forecast_temp"><strong>15°</strong></div>
              <div class="weather_forecast_temp">9°</div>
            </div>
            </div>
    `;
  });

  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}

let citySearch = document.querySelector("#search-form");
citySearch.addEventListener("submit", lookupCity);

searchEnteredCity("Indianapolis");
displayForecast();

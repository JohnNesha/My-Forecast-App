function lookupCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  console.log(cityElement);
}

let citySearch = document.querySelector("#search-form");
citySearch.addEventListener("submit", lookupCity);

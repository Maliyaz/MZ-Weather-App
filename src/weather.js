// feature #1
let now = new Date();

let hours = now.getHours();
let minutes = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];

let timeLayout = `${day}, ${hours}:${minutes}`;

let displayTime = document.querySelector("#current-time");
displayTime.innerHTML = timeLayout;

let year = now.getFullYear();
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let month = months[now.getMonth()];
let date = now.getDate();

let dateLayout = `${year} ${month} ${date}`;
let displayDate = document.querySelector("#current-date");
displayDate.innerHTML = dateLayout;

// feature #2

function newCity(event) {
  event.preventDefault();
  let apiKey = "a2a7f7242429e80a0db4ffb6350fdb5e";
  let city = document.querySelector("#city-input").value;
  let apiUrl =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showWeather);
}

function showWeather(response) {
  console.log(response);

  document.querySelector("#chosen-location").innerHTML = response.data.name;
  document.querySelector("#grade").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#value-humidity").innerHTML =
    response.data.main.humidity;
  document.querySelector("#wind-speed").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector(".status").innerHTML = response.data.weather[0].main;
}

let changeCity = document.querySelector("#search-form");
changeCity.addEventListener("submit", newCity);

// feature #3

let celsiusButton = document.querySelector("#misura-c");
celsiusButton.addEventListener("click", convertToCelsius);

function convertToCelsius(event) {
  event.preventDefault();
  let displayedTemperature = document.querySelector("#grade");
}

let fahrenheitButton = document.querySelector("#misura-f");
fahrenheitButton.addEventListener("click", convertTofahrenheit);

function convertTofahrenheit(event) {
  event.preventDefault();
  let displayedTemperature = document.querySelector(("#grade" * 9) / 5 + 32);
}

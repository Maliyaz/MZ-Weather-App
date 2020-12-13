// realtime Date
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

// realtime data

function newCity(event) {
  event.preventDefault();
  let apiKey = "a2a7f7242429e80a0db4ffb6350fdb5e";
  let city = document.querySelector("#city-input").value;
  let apiUrl =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showWeather);
}

function showWeather(response) {
console.log(response.data);
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

let iconElement = document.querySelector("#icon");
iconElement.setAttribute ("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
iconElement.setAttribute ("alt",response.data.weather[0].description);
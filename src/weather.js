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
  //weather extra infos
  document.querySelector("#grade-min").innerHTML=Math.round(response.data.main.temp_min);
  document.querySelector("#grade-max").innerHTML=Math.round(response.data.main.temp_max);
  document.querySelector("#value-pressure").innerHTML= response.data.main.pressure;
  document.querySelector("#value-visibility").innerHTML= response.data.visibility;
  document.querySelector("#value-humidity").innerHTML =
    response.data.main.humidity;
  document.querySelector("#wind-speed").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#status").innerHTML = response.data.weather[0].main;

//iconDisplaychanges
let iconElement = document.querySelector("#main-icon");
iconElement.setAttribute ("src",`icons/${response.data.weather[0].icon}.svg`);
iconElement.setAttribute ("alt",`${response.data.weather[0].description}`);
}

let changeCity = document.querySelector("#search-form");
changeCity.addEventListener("submit", newCity);




//change Measurement


let celsiusTemperature = response.data.main.temp;



function changeCelsiusTemperature (event) {
  event.preventDefault();
  celsiusClick.classList.add("active");
  fahrenheitClick.classList.remove("active");
  let temperatureElement = document.querySelector("#grade");
  temperatureElement.innerHTML =Math.round(celsiusTemperature);
}

let celsiusClick = document.querySelector("#misura-c");
celsiusClick.addEventListener ("click", changeCelsiusTemperature);


function changeFahrenheitTemperature (event) {
  event.preventDefault();
  fahrenheitClick.classList.add("active");
  celsiusClick.classList.remove("active");
  let temperatureElement = document.querySelector("#grade");
  temperatureElement.innerHTML =Math.round((celsiusTemperature*9)/5+32);
}


let fahrenheitClick = document.querySelector("#misura-f");
fahrenheitClick.addEventListener ("click", changeFahrenheitTemperature);


search("Florence");

let date = new Date();

let todaysDate = document.querySelector("#todaysDate");

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
let nDate = date.getDate();
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
  "December",
];
let month = months[date.getMonth()];
let year = date.getFullYear();
let hour = date.getHours();
let minute = date.getMinutes();
todaysDate.innerHTML = `${day}, ${month} ${nDate} ${year} (${hour}:${minute})`;

function showTemp(response) {
  //cityName
  let city = response.data.name;
  let location = document.querySelector("#userCity");
  location.innerHTML = city;

  //country code
  let country = response.data.sys.country;
  let countryCd = document.querySelector("#countryCode");
  countryCd.innerHTML = country;

  //temperature
  let temperature = Math.round(response.data.main.temp);
  console.log(response);
  let temp = document.querySelector("#temp");
  temp.innerHTML = temperature;

  //Wind
  let windSpeed = Math.round(response.data.wind.speed);
  let wSpeed = document.querySelector("#wind");
  wSpeed.innerHTML = windSpeed;

  //humidity
  let hum = Math.round(response.data.main.humidity);
  let humidity = document.querySelector("#hum");
  humidity.innerHTML = hum;

  //feelsLike
  let fLike = Math.round(response.data.main.feels_like);
  let feels = document.querySelector("#fLike");
  feels.innerHTML = fLike;

  //description
  let description = response.data.weather[0].description;
  let desc = document.querySelector("#desc");
  desc.innerHTML = description;
}

//London
function firstButton(event) {
  event.preventDefault();
  let city = "London";
  let apiKey = "7387c1649b2acfa22815e197a7100ba0";
  let unit = "metric";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=${unit}`;
  axios.get(apiURL).then(showTemp);
}

//Paris
function secondButton(event) {
  event.preventDefault();
  let city = "Paris";
  let apiKey = "7387c1649b2acfa22815e197a7100ba0";
  let unit = "metric";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
  axios.get(apiURL).then(showTemp);
}

//New York
function thirdButton(event) {
  event.preventDefault();
  let city = "New York";
  let apiKey = "7387c1649b2acfa22815e197a7100ba0";
  let unit = "metric";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
  axios.get(apiURL).then(showTemp);
}

//Sydney
function fourthButton(event) {
  event.preventDefault();
  let city = "Sydney";
  let apiKey = "7387c1649b2acfa22815e197a7100ba0";
  let unit = "metric";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
  axios.get(apiURL).then(showTemp);
}
//Tokyo
function fifthButton(event) {
  event.preventDefault();
  let city = "Tokyo";
  let apiKey = "7387c1649b2acfa22815e197a7100ba0";
  let unit = "metric";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
  axios.get(apiURL).then(showTemp);
}

//City Search
function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#enterCity").value;
  let apiKey = "7387c1649b2acfa22815e197a7100ba0";
  let unit = "metric";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
  axios.get(apiURL).then(showTemp);
}

//Current Location
function handlePosition(position) {
  let lon = position.coords.longitude;
  let lat = position.coords.latitude;
  let apiKey = "7387c1649b2acfa22815e197a7100ba0";
  let unit = "metric";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;
  axios.get(apiURL).then(showTemp);
}
function findLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(handlePosition);
}
let button = document.querySelector("#cLocat");
let cLocation = button.addEventListener("click", findLocation);

let submit = document.querySelector("#userInfo");
let city = submit.addEventListener("click", searchCity);

let londonButton = document.querySelector("#lonBut");
let london = londonButton.addEventListener("click", firstButton);

let parisButton = document.querySelector("#parBut");
let paris = parisButton.addEventListener("click", secondButton);

let nyButton = document.querySelector("#nyBut");
let newYork = nyButton.addEventListener("click", thirdButton);

let sydneyButton = document.querySelector("#sydBut");
let sydney = sydneyButton.addEventListener("click", fourthButton);

let tokyoButton = document.querySelector("#tokBut");
let tokyo = tokyoButton.addEventListener("click", fifthButton);

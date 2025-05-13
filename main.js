let search = document.querySelector("button");
let input = document.querySelector("input");
let tempval = document.querySelector(".temp");
let city = document.querySelector(".city");
let wind = document.querySelector(".wind");
let humidity = document.querySelector(".humidity");
let weatherImage = document.querySelector(".weather-icon");
let weather = document.querySelector(".weather");

const apiKey = "c2541f761f1f63b671a817ea485ea042";
const cityName = input.value;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric`;

search.addEventListener("click", () => {
  const cityName = input.value;
  async function checkWeather() {
    const response = await fetch(
      apiUrl + `&q=${cityName}` + `&appid=${apiKey}`
    );
    let data = await response.json();
    console.log(data);
    tempval.innerHTML = data.main.temp + "°c";
    city.innerHTML = data.name;
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + "km/h";
    input.value = "";
    weatherImage.src = `Icons/${data.weather[0].main}.png`;
    localStorage.setItem("info", weather.innerHTML);
  }

  checkWeather();
});

// window.addEventListener("load", () => {
//   weather.innerHTML = localStorage.getItem("info");
// });


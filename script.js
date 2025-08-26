const apikey = "c152f175e7b3a828848be77d0326d844";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
// weather icon update
if (data.weather[0].main === "Clouds") {
    weatherIcon.src = "clouds.png";
} else if (data.weather[0].main === "Clear") {
    weatherIcon.src = "clear.png";
} else if (data.weather[0].main === "Rain") {
    weatherIcon.src = "rain.png";
} else if (data.weather[0].main === "Drizzle") {
    weatherIcon.src = "drizzle.png";
} else if (data.weather[0].main === "Mist") {
    weatherIcon.src = "mist.png";
} else if (data.weather[0].main === "Snow") {
    weatherIcon.src = "snow.png";
} else if (data.weather[0].main === "Humidity") {
    weatherIcon.src = "humidity.png";
} else if (data.weather[0].main === "Wind") {
    weatherIcon.src = "wind.png";
} else {
    weatherIcon.src = "clear.png"; // fallback
}

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

// Event listener for search button
searchbtn.addEventListener("click", () => {
  checkWeather(searchbox.value);
});

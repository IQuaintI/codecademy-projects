//Random Background Image API//

const unsplashKey = "BOJttaCUHqaOkheGiewxsWfs3GKcMeWwMEPJHfloQYo";
const unsplashUrl = "https://api.unsplash.com/";

const getRandomPhoto = async () => {
  const urlToFetch = `${unsplashUrl}photos/random?client_id=${unsplashKey}`;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
  } catch (error) {
    console.log(error);
  }
};

function changeBackground() {
  getRandomPhoto().then((jsonResponse) => {
    const photo = jsonResponse;
    const photoUrl = photo.urls.regular;
    document.body.style.backgroundImage = `url(${photoUrl})`;
  });
}

changeBackground();

//Weather API//

const weatherKey = "1aa4a9c2a85dfbf1d5bc0a8c20218ace";
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?";

async function getWeather(city) {
  const urlToFetch = `${weatherUrl}q=${city}&units=imperial&appid=${weatherKey}`;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      displayWeather(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
}

function displayWeather(data) {
  const { name } = data;
  const { icon, description } = data.weather[0];
  let { temp, humidity } = data.main;
  temp = Math.round(temp);
  let { speed } = data.wind;
  speed = Math.round(speed);
  console.log(name, icon, description, temp, humidity, speed);

  document.getElementById("city").innerHTML = `Weather in ${name}`;
  document.getElementById(
    "icon"
  ).src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  document.getElementById("description").innerHTML = description;
  document.getElementById("temp").innerHTML = `${temp}°F`;
  document.getElementById("humidity").innerHTML = `Humidity: ${humidity}%`;
  document.getElementById("wind").innerHTML = `Wind Speed: ${speed} mph`;

  document.getElementsByClassName("weather")[0].style.display = "block";

  document.body.style.backgroundImage = `url(https://source.unsplash.com/1920x1080/?${name})`;
}

getWeather();

//Search Bar//
function search() {
  const city = document.getElementById("search").value;
  getWeather(city);

  document.getElementById("button").addEventListener("click", search);
  document.getElementById("search").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("button").click();
    }
  });
}

search();

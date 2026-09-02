// Stage 1
async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
      )},NG&units=metric&appid=${apiKey}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch failed:", error);
  }
}

// Stage 2
async function showWeather(city) {
  const data = await getWeather(city);

  if (!data || data.cod !== 200) {
    alert("Something went wrong, please try again later.");
    return;
  }

  document.getElementById("location").textContent = data.name ?? "N/A";
  document.getElementById("weather-main").textContent =
    data.weather?.[0]?.main ?? "N/A";

  document.getElementById("weather-icon").src = data.weather?.[0]?.icon
    ? `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    : "N/A";

  document.getElementById("main-temperature").textContent =
    data.main?.temp ?? "N/A";
  document.getElementById("feels-like").textContent =
    data.main?.feels_like ?? "N/A";
  document.getElementById("humidity").textContent =
    data.main?.humidity ?? "N/A";
  document.getElementById("wind").textContent = data.wind?.speed ?? "N/A";
  document.getElementById("wind-gust").textContent = data.wind?.gust ?? "N/A";
}

// Stage 3
const getWeatherBtn = document.getElementById("get-weather-btn");

getWeatherBtn.addEventListener("click", () => {
  const citySelect = document.getElementById("city-select");
  const selectedCity = citySelect.value;

  if (!selectedCity) return;

  showWeather(selectedCity);
});

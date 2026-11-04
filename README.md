# Nigeria Weather App



Real-time weather for all 36 Nigerian states plus the FCT, built with vanilla JavaScript and the OpenWeatherMap API.



## Why I Built This



Most weather app tutorials default to a handful of Western cities. I wanted something that actually meant something to me and the people around me, so I rebuilt a certification project I'd completed on FreeCodeCamp and swapped in real Nigerian data.



I mapped every state to its capital city so anyone from Lagos to Maiduguri can check their local weather without hunting for the right city name.



## Live Demo



https://nigeria-weather-app.netlify.app/



## What It Does



Pick any of Nigeria's 36 states (or the FCT) from a dropdown, click Get Weather, and see:



- Current temperature

- Feels-like temperature

- Humidity

- Wind speed

- Wind gust

- Current weather conditions



## Built With



- HTML

- CSS

- Vanilla JavaScript

- OpenWeatherMap API



## Getting Started



1. Clone the repository:



&#x20;  `git clone https://github.com/Damilola-Dev1/nigeria-weather-app.git`



2. Open the project folder.



3. Create your local configuration file:



&#x20;  `Copy-Item config.example.js config.js`



4. Open `config.js` and replace the placeholder with your OpenWeatherMap API key.



5. Open `index.html` using a local development server.



## API Configuration



This project uses the OpenWeatherMap API. You can obtain an API key at:



https://openweathermap.org/api



The actual `config.js` file is excluded from version control using `.gitignore`. The `config.example.js` file provides a template for setting up the project.



Note: Because this is a client-side application, API keys can be viewed in the browser. Restrict your key where possible.



## What I Focused On



- **Separation of concerns:** `getWeather()` handles fetching and returning weather data, while `showWeather()` handles displaying it.

- **API error handling:** Checking `response.ok` before processing returned data.

- **URL encoding:** Handling city names containing spaces, such as Port Harcourt and Benin City.

- **Graceful fallbacks:** Using "N/A" for missing individual values.

- **Configuration management:** Keeping the actual API key out of version control.



## What I'd Add Next



- A loading state while the API request is in progress.

- A current-location option using the browser's Geolocation API.



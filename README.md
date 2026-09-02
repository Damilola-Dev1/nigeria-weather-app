Nigeria Weather App

Real-time weather for all 36 Nigerian states plus the FCT, built with vanilla JavaScript and the OpenWeatherMap API.

Why I built this

Most weather app tutorials default to a handful of Western cities. I wanted something that actually meant something to me and the people around me, so I rebuilt a certification project I'd completed on FreeCodeCamp and swapped in real Nigerian data, mapping every state to its capital city so anyone from Lagos to Maiduguri can check their local weather without hunting for the right city name.

Live Demo

[Add your Netlify link here once deployed]

What it does

Pick any of Nigeria's 36 states (or the FCT) from a dropdown, click Get Weather, and see live temperature, humidity, wind speed, wind gust, "feels like" temperature, and current conditions for that state's capital.

Built With

HTML, CSS, JavaScript (vanilla, no frameworks), OpenWeatherMap API.

What I focused on

Separating data-fetching logic from display logic, one function (getWeather) only fetches and returns data or logs an error, a second function (showWeather) only decides what the user actually sees. Handling real-world API quirks, like URL-encoding city names with spaces (Port Harcourt, Benin City) and checking response.ok before trusting the data. Gracefully falling back to "N/A" for any individual missing value instead of letting one gap break the whole display. Keeping my API key out of version control using a gitignored config file, since this project uses a real, rate-limited third-party API key rather than an open practice endpoint.

What I'd add next

A loading state while the fetch is in progress, and possibly a "current location" auto-detect option using the browser's geolocation API.

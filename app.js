const apiKey = '2f2520a3bdcfffd13ddc09721e01e4a3'; // Replace with your OpenWeatherMap API key

async function getWeather() {
  const city = document.getElementById('city').value;
  const weatherDiv = document.getElementById('weather');

  if (!city) {
    weatherDiv.innerHTML = `<p>Please enter a city name.</p>`;
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('City not found');
    const data = await response.json();

    const { name, main, weather } = data;
    const description = weather[0].description;

    weatherDiv.innerHTML = `
      <h2>${name}</h2>
      <p>Temperature: ${main.temp}°C</p>
      <p>Feels Like: ${main.feels_like}°C</p>
      <p>Weather: ${description}</p>
    `;
  } catch (error) {
    weatherDiv.innerHTML = `<p>${error.message}</p>`;
  }
}



export async function renderWeatherSearch(){
const form = document.querySelector("#weather-form");
const cityInput = document.querySelector("#city-input");
const resultDiv = document.querySelector("#weather-result");

const API_KEY = "B3SF7MDEK442CMGC2YNRHUY7L"; 


  const cityName = cityInput.value.trim();
  if (!cityName) return;

  const encodedCity = encodeURIComponent(cityName);
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodedCity}?unitGroup=metric&key=${API_KEY}`;

  try {
    resultDiv.textContent = "Loading weather...";

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`City not found or API error (${response.status})`);
    }

    const data = await response.json();

    const address = data.resolvedAddress;
    const temp = data.currentConditions.temp;
    const conditions = data.currentConditions.conditions;

    resultDiv.innerHTML = `
      <h2>${address}</h2>
      <p><strong>Temperature:</strong> ${temp}°C</p>
      <p><strong>Conditions:</strong> ${conditions}</p>
    `;
  } catch (error) {
    console.error("Error fetching weather:", error);
    resultDiv.textContent = `Error: ${error.message}`;
  }

}
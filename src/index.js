import milkyway from "./milkyway.jpeg";
import "./styles.css"
import {renderWeatherSearch} from "./apisearch.js";

const body = document.querySelector("body");
const form = document.querySelector("#weather-form");


body.style.backgroundImage = `url(${milkyway})`;
body.style.backgroundSize = 'cover';
body.style.backgroundPosition = 'center';

form.addEventListener("submit",  (e) => {
    e.preventDefault();
    renderWeatherSearch();
})
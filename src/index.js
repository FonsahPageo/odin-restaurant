import "./styles.css";
import restaurantImage from "./assets/restaurant.jpg";

const headline = document.createElement("h3");
headline.textContent = "Welcome to Fonsah's Restaurant where expectations meet reality";
document.getElementById("content").appendChild(headline);

const imgElement = document.createElement("img");
imgElement.src =  restaurantImage;
document.getElementById("content").appendChild(imgElement);

const description = document.createElement("p");
description.textContent = "This is a description of the restaurant";
document.getElementById("content").appendChild(description);

console.log("Welcome to Fonsah's restaurant");
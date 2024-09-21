import "./styles.css";
import restaurantImage from "./assets/restaurant.jpg";

const imgElement = document.createElement("img");
imgElement.src =  restaurantImage;
document.getElementById('content').prependChild(imgElement);

console.log("Welcome to Fonsah's restaurant");
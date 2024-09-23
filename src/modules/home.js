import restaurantImage from "../assets/restaurant.jpg";

export default function loadHome() {
    const homeDiv = document.createElement("div");

    const headline = document.createElement("h3");
    headline.textContent = "Welcome to Fonsah's Restaurant where expectations meet reality";

    const imgElement = document.createElement("img");
    imgElement.src = restaurantImage;
    imgElement.alt = "Restaurant image";
    console.log(imgElement);

    const description = document.createElement("p");
    description.textContent = "This is a description of the restaurant";

    homeDiv.appendChild(headline);
    homeDiv.appendChild(imgElement);
    homeDiv.appendChild(description);

    return homeDiv;
}
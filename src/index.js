import "./styles.css";
import loadHome from "./modules/home.js";
import loadMenu from "./modules/menu.js";
import loadContact from "./modules/contact.js";

const contentDiv = document.getElementById("content");
contentDiv.appendChild(loadHome());

document.getElementById("homeBtn").addEventListener("click", () => {
    contentDiv.innerHTML = "";
    contentDiv.appendChild(loadHome());
});

document.getElementById("menuBtn").addEventListener("click", () => {
    contentDiv.innerHTML = "";
    contentDiv.appendChild(loadMenu());
});

document.getElementById("contactBtn").addEventListener("click", () => {
    contentDiv.innerHTML = "";
    contentDiv.appendChild(loadContact());
});
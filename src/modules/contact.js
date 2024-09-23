export default function loadContact(){
    const contactDiv = document.createElement("div");
    const contactHeadine = document.createElement("h3");
    contactHeadine.textContent = "Contact us";

    const contactInfo = document.createElement("p");
    contactInfo.textContent = "You can reach us at ashprincepageo@gmail.com or call: (+237) 675 41 60 98."

    contactDiv.appendChild(contactHeadine);
    contactDiv.appendChild(contactInfo);

    return contactDiv;
}
export default function loadMenu() {
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("food-menu");
    const menuHeadline = document.createElement("h3");
    menuHeadline.textContent = "Menu";

    const menuItems = document.createElement("ul");
    menuItems
    menuItems.innerHTML = `
        <li>Pasta - $12</li>
        <li>Pizza - $18</li>
        <li>Salad - $8</li>
        <li>Cornchaff - $14</li>
        <li>Eru - $14</li>
        <li>Ndole - $14</li>
        <li>Chicken - $22</li>
    `;

    menuDiv.appendChild(menuHeadline);
    menuDiv.appendChild(menuItems);
    
    return menuDiv;
}
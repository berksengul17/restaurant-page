import "../styles/home.css";
import menuIcon from "../images/goldenApple.gif";

function loadHome() {
  const content = document.querySelector("#content");

  const menuContainer = document.createElement("div");
  const para = document.createElement("p");
  const myIcon = new Image();

  myIcon.src = menuIcon;
  para.textContent = "MENU";

  menuContainer.classList.add("menu-container");

  menuContainer.appendChild(para);
  menuContainer.appendChild(myIcon);

  content.appendChild(menuContainer);
}

export default loadHome;

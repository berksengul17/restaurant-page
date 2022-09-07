import "./style.css";
import logo from "./images/logo.png";

const header = document.querySelector("header");

const myLogo = new Image();
myLogo.classList.add("logo");
myLogo.src = logo;

header.prepend(myLogo);

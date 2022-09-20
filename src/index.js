import "./styles/common.css";

import home from "./modules/home.js";
import menu from "./modules/menu.js";
import about from "./modules/about.js";
import contact from "./modules/contact.js";
import reset from "./modules/reset.js";
import header from "./modules/header.js";
import menuIcon from "./modules/menuIcon.js";

// Initial page load
header();
menuIcon();

const homeBtn = document.querySelector(".logo-link");
const aboutBtn = document.querySelector(".about-link");
const contactBtn = document.querySelector(".contact-link");
const menuBtn = document.querySelector(".menu-container");

homeBtn.addEventListener("click", () => {
  reset();
  home();
});

menuBtn.addEventListener("click", () => {
  reset();
  menu();
});

aboutBtn.addEventListener("click", () => {
  reset();
  about();
});

contactBtn.addEventListener("click", () => {
  reset();
  contact();
});

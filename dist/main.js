/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/about.css":
/*!******************************!*\
  !*** ./src/styles/about.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/common.css":
/*!*******************************!*\
  !*** ./src/styles/common.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/contact.css":
/*!********************************!*\
  !*** ./src/styles/contact.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/header.css":
/*!*******************************!*\
  !*** ./src/styles/header.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/home.css":
/*!*****************************!*\
  !*** ./src/styles/home.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/menu.css":
/*!*****************************!*\
  !*** ./src/styles/menu.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_about_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/about.css */ "./src/styles/about.css");


function loadAbout() {
  const content = document.querySelector("#content");

  // Hide the menu icon which is at the bottom right
  const menuContainer = document.querySelector(".menu-container");
  menuContainer.style = "visibility:hidden";

  const aboutContainer = document.createElement("div");
  const title = document.createElement("h2");
  const about = document.createElement("p");

  aboutContainer.classList.add("about-container");
  aboutContainer.classList.add("page-load");
  title.classList.add("about-title");
  about.classList.add("about-text");

  title.textContent = "Cafe MC";
  about.textContent =
    "There is supposed to be a cool about text but since I am not creative at all, " +
    "I will just fill this area with some random text. " +
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. " +
    "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, " +
    "ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, " +
    "fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. " +
    "Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. " +
    "Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.";

  aboutContainer.appendChild(title);
  aboutContainer.appendChild(about);

  content.appendChild(aboutContainer);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAbout);


/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_contact_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/contact.css */ "./src/styles/contact.css");


function loadContact() {
  const content = document.querySelector("#content");

  // Hide the menu icon which is at the bottom right
  const menuContainer = document.querySelector(".menu-container");
  menuContainer.style = "visibility:hidden";

  const contactContainer = document.createElement("div");
  const cellNumber = document.createElement("span");
  const location = document.createElement("iframe");
  location.src =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62408.1729002535!2d96.77333883932656!3d-12.145587141500295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2f0ec60e4aa31c93%3A0xabd175fa7dac171b!2sWest%20Island%20Shire%20of%20Cocos%206799%2C%20Cocos%20(Keeling)%20Islands!5e0!3m2!1sen!2str!4v1663330402284!5m2!1sen!2str" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';
  cellNumber.textContent = "📱 123 456 789";

  contactContainer.classList.add("contact-container");
  contactContainer.classList.add("page-load");
  cellNumber.classList.add("cell-number");
  location.classList.add("location");

  contactContainer.appendChild(cellNumber);
  contactContainer.appendChild(location);

  content.appendChild(contactContainer);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);


/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/header.css */ "./src/styles/header.css");
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/logo.png */ "./src/images/logo.png");



function createCheckBox(id, cl) {
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.setAttribute("id", id);
  checkBox.classList.add(cl);

  return checkBox;
}

function createNav() {
  const nav = document.createElement("nav");
  const uList = createUList();
  nav.appendChild(uList);

  return nav;
}

function createUList() {
  const uList = document.createElement("ul");
  const aboutItem = createListItem("About", "#");
  const contactItem = createListItem("Contact", "#");

  aboutItem.classList.add("about-link");
  contactItem.classList.add("contact-link");

  uList.appendChild(aboutItem);
  uList.appendChild(contactItem);

  return uList;
}

function createListItem(aText, aHref) {
  const listItem = document.createElement("li");
  const link = createLink(aText, aHref);
  listItem.appendChild(link);

  return listItem;
}

function createLink(text, href, cl) {
  const link = document.createElement("a");
  link.setAttribute("href", href);
  link.textContent = text;

  return link;
}

function createLabel(forAttr, cl) {
  const label = document.createElement("label");
  const span = document.createElement("span");
  label.setAttribute("for", forAttr);
  label.classList.add(cl);

  label.appendChild(span);

  return label;
}

function loadHeader() {
  const content = document.querySelector("#content");

  // Header elements
  const header = document.createElement("header");
  const mainMenuLink = createLink("", "#");
  const checkBox = createCheckBox("nav-toggle", "nav-toggle");
  const label = createLabel("nav-toggle", "nav-toggle-label");

  // Logo image
  const myLogo = new Image();
  myLogo.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_1__;

  mainMenuLink.classList.add("logo-link");
  mainMenuLink.appendChild(myLogo);

  // Nav
  const nav = document.createElement("nav");
  const uList = createUList();
  nav.appendChild(uList);

  // Header children
  header.appendChild(mainMenuLink);
  header.appendChild(checkBox);
  header.append(label);
  header.appendChild(nav);

  content.appendChild(header);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHeader);


/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadHome() {
  // Display the menu icon which is at the bottom right
  const menuContainer = document.querySelector(".menu-container");
  menuContainer.style = "visibility:visible";
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);


/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_menu_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/menu.css */ "./src/styles/menu.css");
/* harmony import */ var _images_apple_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/apple.png */ "./src/images/apple.png");
/* harmony import */ var _images_cake_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/cake.png */ "./src/images/cake.png");
/* harmony import */ var _images_carrot_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/carrot.png */ "./src/images/carrot.png");
/* harmony import */ var _images_chicken_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/chicken.png */ "./src/images/chicken.png");
/* harmony import */ var _images_cookie_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/cookie.png */ "./src/images/cookie.png");
/* harmony import */ var _images_fish_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/fish.png */ "./src/images/fish.png");
/* harmony import */ var _images_melon_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/melon.png */ "./src/images/melon.png");
/* harmony import */ var _images_pie_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/pie.png */ "./src/images/pie.png");
/* harmony import */ var _images_soup_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/soup.png */ "./src/images/soup.png");
/* harmony import */ var _images_steak_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/steak.png */ "./src/images/steak.png");
/* harmony import */ var _images_emerald_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/emerald.png */ "./src/images/emerald.png");














function loadMenu() {
  const content = document.querySelector("#content");

  // Hide the menu icon which is at the bottom right
  const menuContainer = document.querySelector(".menu-container");
  menuContainer.style = "visibility:hidden";

  const foodContainer = document.createElement("div");
  foodContainer.classList.add("food-container");
  foodContainer.classList.add("page-load");

  // APPLE
  const appleContainer = document.createElement("div");
  const appleTextContainer = document.createElement("div");
  const applePriceContainer = document.createElement("div");
  const appleTitle = document.createElement("h3");
  const appleDescription = document.createElement("p");
  const applePrice = document.createElement("span");

  const appleImg = new Image();
  const applePriceImg = new Image();
  appleImg.src = _images_apple_png__WEBPACK_IMPORTED_MODULE_1__;
  applePriceImg.src = _images_emerald_png__WEBPACK_IMPORTED_MODULE_11__;

  appleTitle.textContent = "Apple";
  appleDescription.textContent = "A big juicy red round apple";
  applePrice.textContent = "5";

  appleImg.classList.add("food-img");
  appleContainer.classList.add("food");
  appleTextContainer.classList.add("text");
  applePriceContainer.classList.add("price");

  appleTextContainer.appendChild(appleTitle);
  appleTextContainer.appendChild(appleDescription);
  appleTextContainer.appendChild(applePriceContainer);

  applePriceContainer.appendChild(applePrice);
  applePriceContainer.appendChild(applePriceImg);

  appleContainer.appendChild(appleImg);
  appleContainer.appendChild(appleTextContainer);
  foodContainer.appendChild(appleContainer);

  // CAKE
  const cakeContainer = document.createElement("div");
  const cakeTextContainer = document.createElement("div");
  const cakePriceContainer = document.createElement("div");
  const cakeTitle = document.createElement("h3");
  const cakeDescription = document.createElement("p");
  const cakePrice = document.createElement("span");

  const cakeImg = new Image();
  const cakePriceImg = new Image();
  cakeImg.src = _images_cake_png__WEBPACK_IMPORTED_MODULE_2__;
  cakePriceImg.src = _images_emerald_png__WEBPACK_IMPORTED_MODULE_11__;

  cakeTitle.textContent = "Cake";
  cakeDescription.textContent = "A creamy strawberry cake";
  cakePrice.textContent = "15";

  cakeImg.classList.add("food-img");
  cakeContainer.classList.add("food");
  cakeTextContainer.classList.add("text");
  cakePriceContainer.classList.add("price");

  cakeTextContainer.appendChild(cakeTitle);
  cakeTextContainer.appendChild(cakeDescription);
  cakeTextContainer.appendChild(cakePriceContainer);

  cakePriceContainer.appendChild(cakePrice);
  cakePriceContainer.appendChild(cakePriceImg);

  cakeContainer.appendChild(cakeImg);
  cakeContainer.appendChild(cakeTextContainer);
  foodContainer.appendChild(cakeContainer);

  // CARROT
  const carrotContainer = document.createElement("div");
  const carrotTextContainer = document.createElement("div");
  const carrotPriceContainer = document.createElement("div");
  const carrotTitle = document.createElement("h3");
  const carrotDescription = document.createElement("p");
  const carrotPrice = document.createElement("span");

  const carrotImg = new Image();
  const carrotPriceImg = new Image();
  carrotImg.src = _images_carrot_png__WEBPACK_IMPORTED_MODULE_3__;
  carrotPriceImg.src = _images_emerald_png__WEBPACK_IMPORTED_MODULE_11__;

  carrotTitle.textContent = "Carrot";
  carrotDescription.textContent = "A carrot Bugs Bunny would love";
  carrotPrice.textContent = "4";

  carrotImg.classList.add("food-img");
  carrotContainer.classList.add("food");
  carrotTextContainer.classList.add("text");
  carrotPriceContainer.classList.add("price");

  carrotTextContainer.appendChild(carrotTitle);
  carrotTextContainer.appendChild(carrotDescription);
  carrotTextContainer.appendChild(carrotPriceContainer);

  carrotPriceContainer.appendChild(carrotPrice);
  carrotPriceContainer.appendChild(carrotPriceImg);

  carrotContainer.appendChild(carrotImg);
  carrotContainer.appendChild(carrotTextContainer);
  foodContainer.appendChild(carrotContainer);

  // CHICKEN
  const chickenContainer = document.createElement("div");
  const chickenTextContainer = document.createElement("div");
  const chickenPriceContainer = document.createElement("div");
  const chickenTitle = document.createElement("h3");
  const chickenDescription = document.createElement("p");
  const chickenPrice = document.createElement("span");

  const chickenImg = new Image();
  const chickenPriceImg = new Image();
  chickenImg.src = _images_chicken_png__WEBPACK_IMPORTED_MODULE_4__;
  chickenPriceImg.src = _images_emerald_png__WEBPACK_IMPORTED_MODULE_11__;

  chickenTitle.textContent = "Chicken";
  chickenDescription.textContent = "A fine meal for a bodybuilder";
  chickenPrice.textContent = "8";

  chickenImg.classList.add("food-img");
  chickenContainer.classList.add("food");
  chickenTextContainer.classList.add("text");
  chickenPriceContainer.classList.add("price");

  chickenTextContainer.appendChild(chickenTitle);
  chickenTextContainer.appendChild(chickenDescription);
  chickenTextContainer.appendChild(chickenPriceContainer);

  chickenPriceContainer.appendChild(chickenPrice);
  chickenPriceContainer.appendChild(chickenPriceImg);

  chickenContainer.appendChild(chickenImg);
  chickenContainer.appendChild(chickenTextContainer);
  foodContainer.appendChild(chickenContainer);

  // COOKIE
  const cookieContainer = document.createElement("div");
  const cookieTextContainer = document.createElement("div");
  const cookiePriceContainer = document.createElement("div");
  const cookieTitle = document.createElement("h3");
  const cookieDescription = document.createElement("p");
  const cookiePrice = document.createElement("span");

  const cookieImg = new Image();
  const cookiePriceImg = new Image();
  cookieImg.src = _images_cookie_png__WEBPACK_IMPORTED_MODULE_5__;
  cookiePriceImg.src = _images_emerald_png__WEBPACK_IMPORTED_MODULE_11__;

  cookieTitle.textContent = "Cookie";
  cookieDescription.textContent = "A delicious new baked chocolate cookie";
  cookiePrice.textContent = "9";

  cookieImg.classList.add("food-img");
  cookieContainer.classList.add("food");
  cookieTextContainer.classList.add("text");
  cookiePriceContainer.classList.add("price");

  cookieTextContainer.appendChild(cookieTitle);
  cookieTextContainer.appendChild(cookieDescription);
  cookieTextContainer.appendChild(cookiePriceContainer);

  cookiePriceContainer.appendChild(cookiePrice);
  cookiePriceContainer.appendChild(cookiePriceImg);

  cookieContainer.appendChild(cookieImg);
  cookieContainer.appendChild(cookieTextContainer);
  foodContainer.appendChild(cookieContainer);

  // FISH
  const fishContainer = document.createElement("div");
  const fishTextContainer = document.createElement("div");
  const fishPriceContainer = document.createElement("div");
  const fishTitle = document.createElement("h3");
  const fishDescription = document.createElement("p");
  const fishPrice = document.createElement("span");

  const fishImg = new Image();
  const fishPriceImg = new Image();
  fishImg.src = _images_fish_png__WEBPACK_IMPORTED_MODULE_6__;
  fishPriceImg.src = _images_emerald_png__WEBPACK_IMPORTED_MODULE_11__;

  fishTitle.textContent = "Fish";
  fishDescription.textContent = "A delicous roast fish";
  fishPrice.textContent = "7";

  fishImg.classList.add("food-img");
  fishContainer.classList.add("food");
  fishTextContainer.classList.add("text");
  fishPriceContainer.classList.add("price");

  fishTextContainer.appendChild(fishTitle);
  fishTextContainer.appendChild(fishDescription);
  fishTextContainer.appendChild(fishPriceContainer);

  fishPriceContainer.appendChild(fishPrice);
  fishPriceContainer.appendChild(fishPriceImg);

  fishContainer.appendChild(fishImg);
  fishContainer.appendChild(fishTextContainer);
  foodContainer.appendChild(fishContainer);

  // MELON
  const melonContainer = document.createElement("div");
  const melonTextContainer = document.createElement("div");
  const melonPriceContainer = document.createElement("div");
  const melonTitle = document.createElement("h3");
  const melonDescription = document.createElement("p");
  const melonPrice = document.createElement("span");

  const melonImg = new Image();
  const melonPriceImg = new Image();
  melonImg.src = _images_melon_png__WEBPACK_IMPORTED_MODULE_7__;
  melonPriceImg.src = _images_emerald_png__WEBPACK_IMPORTED_MODULE_11__;

  melonTitle.textContent = "Melon";
  melonDescription.textContent = "A big delicious slice of melon";
  melonPrice.textContent = "3";

  melonImg.classList.add("food-img");
  melonContainer.classList.add("food");
  melonTextContainer.classList.add("text");
  melonPriceContainer.classList.add("price");

  melonTextContainer.appendChild(melonTitle);
  melonTextContainer.appendChild(melonDescription);
  melonTextContainer.appendChild(melonPriceContainer);

  melonPriceContainer.appendChild(melonPrice);
  melonPriceContainer.appendChild(melonPriceImg);

  melonContainer.appendChild(melonImg);
  melonContainer.appendChild(melonTextContainer);
  foodContainer.appendChild(melonContainer);

  // PIE
  const pieContainer = document.createElement("div");
  const pieTextContainer = document.createElement("div");
  const piePriceContainer = document.createElement("div");
  const pieTitle = document.createElement("h3");
  const pieDescription = document.createElement("p");
  const piePrice = document.createElement("span");

  const pieImg = new Image();
  const piePriceImg = new Image();
  pieImg.src = _images_pie_png__WEBPACK_IMPORTED_MODULE_8__;
  piePriceImg.src = _images_emerald_png__WEBPACK_IMPORTED_MODULE_11__;

  pieTitle.textContent = "Pie";
  pieDescription.textContent = "A pie that tastes like your mom's";
  piePrice.textContent = "8";

  pieImg.classList.add("food-img");
  pieContainer.classList.add("food");
  pieTextContainer.classList.add("text");
  piePriceContainer.classList.add("price");

  pieTextContainer.appendChild(pieTitle);
  pieTextContainer.appendChild(pieDescription);
  pieTextContainer.appendChild(piePriceContainer);

  piePriceContainer.appendChild(piePrice);
  piePriceContainer.appendChild(piePriceImg);

  pieContainer.appendChild(pieImg);
  pieContainer.appendChild(pieTextContainer);
  foodContainer.appendChild(pieContainer);

  // SOUP
  const soupContainer = document.createElement("div");
  const soupTextContainer = document.createElement("div");
  const soupPriceContainer = document.createElement("div");
  const soupTitle = document.createElement("h3");
  const soupDescription = document.createElement("p");
  const soupPrice = document.createElement("span");

  const soupImg = new Image();
  const soupPriceImg = new Image();
  soupImg.src = _images_soup_png__WEBPACK_IMPORTED_MODULE_9__;
  soupPriceImg.src = _images_emerald_png__WEBPACK_IMPORTED_MODULE_11__;

  soupTitle.textContent = "Soup";
  soupDescription.textContent = "A hot soup made from mushrooms";
  soupPrice.textContent = "5";

  soupImg.classList.add("food-img");
  soupContainer.classList.add("food");
  soupTextContainer.classList.add("text");
  soupPriceContainer.classList.add("price");

  soupTextContainer.appendChild(soupTitle);
  soupTextContainer.appendChild(soupDescription);
  soupTextContainer.appendChild(soupPriceContainer);

  soupPriceContainer.appendChild(soupPrice);
  soupPriceContainer.appendChild(soupPriceImg);

  soupContainer.appendChild(soupImg);
  soupContainer.appendChild(soupTextContainer);
  foodContainer.appendChild(soupContainer);

  // STEAK
  const steakContainer = document.createElement("div");
  const steakTextContainer = document.createElement("div");
  const steakPriceContainer = document.createElement("div");
  const steakTitle = document.createElement("h3");
  const steakDescription = document.createElement("p");
  const steakPrice = document.createElement("span");

  const steakImg = new Image();
  const steakPriceImg = new Image();
  steakImg.src = _images_steak_png__WEBPACK_IMPORTED_MODULE_10__;
  steakPriceImg.src = _images_emerald_png__WEBPACK_IMPORTED_MODULE_11__;

  steakTitle.textContent = "Steak";
  steakDescription.textContent = "A delicious medium-rare steak";
  steakPrice.textContent = "12";

  steakImg.classList.add("food-img");
  steakContainer.classList.add("food");
  steakTextContainer.classList.add("text");
  steakPriceContainer.classList.add("price");

  steakTextContainer.appendChild(steakTitle);
  steakTextContainer.appendChild(steakDescription);
  steakTextContainer.appendChild(steakPriceContainer);

  steakPriceContainer.appendChild(steakPrice);
  steakPriceContainer.appendChild(steakPriceImg);

  steakContainer.appendChild(steakImg);
  steakContainer.appendChild(steakTextContainer);
  foodContainer.appendChild(steakContainer);

  content.appendChild(foodContainer);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);


/***/ }),

/***/ "./src/modules/menuIcon.js":
/*!*********************************!*\
  !*** ./src/modules/menuIcon.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_home_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/home.css */ "./src/styles/home.css");
/* harmony import */ var _images_goldenApple_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/goldenApple.gif */ "./src/images/goldenApple.gif");



// Creates the container for navigating to menu
function loadMenuIcon() {
  const content = document.querySelector("#content");

  const menuContainer = document.createElement("div");
  const para = document.createElement("p");
  const myIcon = new Image();

  myIcon.src = _images_goldenApple_gif__WEBPACK_IMPORTED_MODULE_1__;
  para.textContent = "MENU";

  menuContainer.classList.add("menu-container");

  menuContainer.appendChild(para);
  menuContainer.appendChild(myIcon);

  content.appendChild(menuContainer);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenuIcon);


/***/ }),

/***/ "./src/modules/reset.js":
/*!******************************!*\
  !*** ./src/modules/reset.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const reset = () => {
  const content = document.querySelector("#content");
  content.style = "";

  let lastChild = content.lastElementChild;
  // Remove all children expect the first two(header and .menu-container)
  while (lastChild != content.children[1]) {
    content.removeChild(lastChild);
    lastChild = content.lastElementChild;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reset);


/***/ }),

/***/ "./src/images/apple.png":
/*!******************************!*\
  !*** ./src/images/apple.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ba17e0ab953063a9a927.png";

/***/ }),

/***/ "./src/images/cake.png":
/*!*****************************!*\
  !*** ./src/images/cake.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0061f61dc0e146143a27.png";

/***/ }),

/***/ "./src/images/carrot.png":
/*!*******************************!*\
  !*** ./src/images/carrot.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c2c2b72f5dd80bc77a04.png";

/***/ }),

/***/ "./src/images/chicken.png":
/*!********************************!*\
  !*** ./src/images/chicken.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ebb6aecdf6ecb2fde00b.png";

/***/ }),

/***/ "./src/images/cookie.png":
/*!*******************************!*\
  !*** ./src/images/cookie.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4b82b46258f52f282f2b.png";

/***/ }),

/***/ "./src/images/emerald.png":
/*!********************************!*\
  !*** ./src/images/emerald.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "69504f74829c204dd4d9.png";

/***/ }),

/***/ "./src/images/fish.png":
/*!*****************************!*\
  !*** ./src/images/fish.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1b4b29c27e3b807cdabe.png";

/***/ }),

/***/ "./src/images/goldenApple.gif":
/*!************************************!*\
  !*** ./src/images/goldenApple.gif ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e5f1b16c8b985b8ded86.gif";

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "952b95e4d20bd753a61e.png";

/***/ }),

/***/ "./src/images/melon.png":
/*!******************************!*\
  !*** ./src/images/melon.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "44cd0fa6747d3a558e4b.png";

/***/ }),

/***/ "./src/images/pie.png":
/*!****************************!*\
  !*** ./src/images/pie.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9acbcba2eb939b6ee2b7.png";

/***/ }),

/***/ "./src/images/soup.png":
/*!*****************************!*\
  !*** ./src/images/soup.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c4baab0ae1524fe9c0d9.png";

/***/ }),

/***/ "./src/images/steak.png":
/*!******************************!*\
  !*** ./src/images/steak.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2135afcdedbe3d1210ce.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_common_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/common.css */ "./src/styles/common.css");
/* harmony import */ var _modules_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home.js */ "./src/modules/home.js");
/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu.js */ "./src/modules/menu.js");
/* harmony import */ var _modules_about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/about.js */ "./src/modules/about.js");
/* harmony import */ var _modules_contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/contact.js */ "./src/modules/contact.js");
/* harmony import */ var _modules_reset_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/reset.js */ "./src/modules/reset.js");
/* harmony import */ var _modules_header_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/header.js */ "./src/modules/header.js");
/* harmony import */ var _modules_menuIcon_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menuIcon.js */ "./src/modules/menuIcon.js");










// Initial page load
(0,_modules_header_js__WEBPACK_IMPORTED_MODULE_6__["default"])();
(0,_modules_menuIcon_js__WEBPACK_IMPORTED_MODULE_7__["default"])();

const homeBtn = document.querySelector(".logo-link");
const aboutBtn = document.querySelector(".about-link");
const contactBtn = document.querySelector(".contact-link");
const menuBtn = document.querySelector(".menu-container");

homeBtn.addEventListener("click", () => {
  (0,_modules_reset_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_modules_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

menuBtn.addEventListener("click", () => {
  (0,_modules_reset_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

aboutBtn.addEventListener("click", () => {
  (0,_modules_reset_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_modules_about_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
});

contactBtn.addEventListener("click", () => {
  (0,_modules_reset_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_modules_contact_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ007QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdVhBQXVYO0FBQ3ZYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzNCRztBQUNRO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSw2Q0FBSTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzNGMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOSTtBQUM1QjtBQUN3QztBQUNGO0FBQ0k7QUFDRTtBQUNGO0FBQ0o7QUFDRTtBQUNKO0FBQ0U7QUFDRTtBQUNJO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDhDQUFLO0FBQ3RCLHNCQUFzQixpREFBTztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw2Q0FBSTtBQUNwQixxQkFBcUIsaURBQU87QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsK0NBQU07QUFDeEIsdUJBQXVCLGlEQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdEQUFPO0FBQzFCLHdCQUF3QixpREFBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwrQ0FBTTtBQUN4Qix1QkFBdUIsaURBQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNkNBQUk7QUFDcEIscUJBQXFCLGlEQUFPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDhDQUFLO0FBQ3RCLHNCQUFzQixpREFBTztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsNENBQUc7QUFDbEIsb0JBQW9CLGlEQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDZDQUFJO0FBQ3BCLHFCQUFxQixpREFBTztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwrQ0FBSztBQUN0QixzQkFBc0IsaURBQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RXSTtBQUNxQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9EQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN0QjVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNackI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmNkI7QUFDN0I7QUFDcUM7QUFDQTtBQUNFO0FBQ0k7QUFDSjtBQUNFO0FBQ0k7QUFDN0M7QUFDQTtBQUNBLDhEQUFNO0FBQ04sZ0VBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkRBQUs7QUFDUCxFQUFFLDREQUFJO0FBQ04sQ0FBQztBQUNEO0FBQ0E7QUFDQSxFQUFFLDZEQUFLO0FBQ1AsRUFBRSw0REFBSTtBQUNOLENBQUM7QUFDRDtBQUNBO0FBQ0EsRUFBRSw2REFBSztBQUNQLEVBQUUsNkRBQUs7QUFDUCxDQUFDO0FBQ0Q7QUFDQTtBQUNBLEVBQUUsNkRBQUs7QUFDUCxFQUFFLCtEQUFPO0FBQ1QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMvYWJvdXQuY3NzPzY0ZWMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy9jb21tb24uY3NzPzNmZWIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy9jb250YWN0LmNzcz9mYmYwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMvaGVhZGVyLmNzcz8xZmQ4Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMvaG9tZS5jc3M/OTY1OSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL21lbnUuY3NzPzhmOTIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL21lbnVJY29uLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL3Jlc2V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IFwiLi4vc3R5bGVzL2Fib3V0LmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gbG9hZEFib3V0KCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcblxyXG4gIC8vIEhpZGUgdGhlIG1lbnUgaWNvbiB3aGljaCBpcyBhdCB0aGUgYm90dG9tIHJpZ2h0XHJcbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1jb250YWluZXJcIik7XHJcbiAgbWVudUNvbnRhaW5lci5zdHlsZSA9IFwidmlzaWJpbGl0eTpoaWRkZW5cIjtcclxuXHJcbiAgY29uc3QgYWJvdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblxyXG4gIGFib3V0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhYm91dC1jb250YWluZXJcIik7XHJcbiAgYWJvdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInBhZ2UtbG9hZFwiKTtcclxuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtdGl0bGVcIik7XHJcbiAgYWJvdXQuY2xhc3NMaXN0LmFkZChcImFib3V0LXRleHRcIik7XHJcblxyXG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJDYWZlIE1DXCI7XHJcbiAgYWJvdXQudGV4dENvbnRlbnQgPVxyXG4gICAgXCJUaGVyZSBpcyBzdXBwb3NlZCB0byBiZSBhIGNvb2wgYWJvdXQgdGV4dCBidXQgc2luY2UgSSBhbSBub3QgY3JlYXRpdmUgYXQgYWxsLCBcIiArXHJcbiAgICBcIkkgd2lsbCBqdXN0IGZpbGwgdGhpcyBhcmVhIHdpdGggc29tZSByYW5kb20gdGV4dC4gXCIgK1xyXG4gICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGNvbW1vZG8gbGlndWxhIGVnZXQgZG9sb3IuIEFlbmVhbiBtYXNzYS4gXCIgK1xyXG4gICAgXCJDdW0gc29jaWlzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuIERvbmVjIHF1YW0gZmVsaXMsIFwiICtcclxuICAgIFwidWx0cmljaWVzIG5lYywgcGVsbGVudGVzcXVlIGV1LCBwcmV0aXVtIHF1aXMsIHNlbS4gTnVsbGEgY29uc2VxdWF0IG1hc3NhIHF1aXMgZW5pbS4gRG9uZWMgcGVkZSBqdXN0bywgXCIgK1xyXG4gICAgXCJmcmluZ2lsbGEgdmVsLCBhbGlxdWV0IG5lYywgdnVscHV0YXRlIGVnZXQsIGFyY3UuIEluIGVuaW0ganVzdG8sIHJob25jdXMgdXQsIGltcGVyZGlldCBhLCB2ZW5lbmF0aXMgdml0YWUsIGp1c3RvLiBcIiArXHJcbiAgICBcIk51bGxhbSBkaWN0dW0gZmVsaXMgZXUgcGVkZSBtb2xsaXMgcHJldGl1bS4gSW50ZWdlciB0aW5jaWR1bnQuIENyYXMgZGFwaWJ1cy4gVml2YW11cyBlbGVtZW50dW0gc2VtcGVyIG5pc2kuIFwiICtcclxuICAgIFwiQWVuZWFuIHZ1bHB1dGF0ZSBlbGVpZmVuZCB0ZWxsdXMuIEFlbmVhbiBsZW8gbGlndWxhLCBwb3J0dGl0b3IgZXUsIGNvbnNlcXVhdCB2aXRhZSwgZWxlaWZlbmQgYWMsIGVuaW0uXCI7XHJcblxyXG4gIGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dCk7XHJcblxyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRDb250YWluZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkQWJvdXQ7XHJcbiIsImltcG9ydCBcIi4uL3N0eWxlcy9jb250YWN0LmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gbG9hZENvbnRhY3QoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuXHJcbiAgLy8gSGlkZSB0aGUgbWVudSBpY29uIHdoaWNoIGlzIGF0IHRoZSBib3R0b20gcmlnaHRcclxuICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWNvbnRhaW5lclwiKTtcclxuICBtZW51Q29udGFpbmVyLnN0eWxlID0gXCJ2aXNpYmlsaXR5OmhpZGRlblwiO1xyXG5cclxuICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBjZWxsTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xyXG4gIGxvY2F0aW9uLnNyYyA9XHJcbiAgICAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkNjI0MDguMTcyOTAwMjUzNSEyZDk2Ljc3MzMzODgzOTMyNjU2ITNkLTEyLjE0NTU4NzE0MTUwMDI5NSEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4MmYwZWM2MGU0YWEzMWM5MyUzQTB4YWJkMTc1ZmE3ZGFjMTcxYiEyc1dlc3QlMjBJc2xhbmQlMjBTaGlyZSUyMG9mJTIwQ29jb3MlMjA2Nzk5JTJDJTIwQ29jb3MlMjAoS2VlbGluZyklMjBJc2xhbmRzITVlMCEzbTIhMXNlbiEyc3RyITR2MTY2MzMzMDQwMjI4NCE1bTIhMXNlbiEyc3RyXCIgd2lkdGg9XCI2MDBcIiBoZWlnaHQ9XCI0NTBcIiBzdHlsZT1cImJvcmRlcjowO1wiIGFsbG93ZnVsbHNjcmVlbj1cIlwiIGxvYWRpbmc9XCJsYXp5XCIgcmVmZXJyZXJwb2xpY3k9XCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZSc7XHJcbiAgY2VsbE51bWJlci50ZXh0Q29udGVudCA9IFwi8J+TsSAxMjMgNDU2IDc4OVwiO1xyXG5cclxuICBjb250YWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWNvbnRhaW5lclwiKTtcclxuICBjb250YWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwYWdlLWxvYWRcIik7XHJcbiAgY2VsbE51bWJlci5jbGFzc0xpc3QuYWRkKFwiY2VsbC1udW1iZXJcIik7XHJcbiAgbG9jYXRpb24uY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uXCIpO1xyXG5cclxuICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNlbGxOdW1iZXIpO1xyXG4gIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xyXG5cclxuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RDb250YWluZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29udGFjdDtcclxuIiwiaW1wb3J0IFwiLi4vc3R5bGVzL2hlYWRlci5jc3NcIjtcclxuaW1wb3J0IGxvZ28gZnJvbSBcIi4uL2ltYWdlcy9sb2dvLnBuZ1wiO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2hlY2tCb3goaWQsIGNsKSB7XHJcbiAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgY2hlY2tCb3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xyXG4gIGNoZWNrQm94LnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcclxuICBjaGVja0JveC5jbGFzc0xpc3QuYWRkKGNsKTtcclxuXHJcbiAgcmV0dXJuIGNoZWNrQm94O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOYXYoKSB7XHJcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcclxuICBjb25zdCB1TGlzdCA9IGNyZWF0ZVVMaXN0KCk7XHJcbiAgbmF2LmFwcGVuZENoaWxkKHVMaXN0KTtcclxuXHJcbiAgcmV0dXJuIG5hdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVUxpc3QoKSB7XHJcbiAgY29uc3QgdUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgY29uc3QgYWJvdXRJdGVtID0gY3JlYXRlTGlzdEl0ZW0oXCJBYm91dFwiLCBcIiNcIik7XHJcbiAgY29uc3QgY29udGFjdEl0ZW0gPSBjcmVhdGVMaXN0SXRlbShcIkNvbnRhY3RcIiwgXCIjXCIpO1xyXG5cclxuICBhYm91dEl0ZW0uY2xhc3NMaXN0LmFkZChcImFib3V0LWxpbmtcIik7XHJcbiAgY29udGFjdEl0ZW0uY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtbGlua1wiKTtcclxuXHJcbiAgdUxpc3QuYXBwZW5kQ2hpbGQoYWJvdXRJdGVtKTtcclxuICB1TGlzdC5hcHBlbmRDaGlsZChjb250YWN0SXRlbSk7XHJcblxyXG4gIHJldHVybiB1TGlzdDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlzdEl0ZW0oYVRleHQsIGFIcmVmKSB7XHJcbiAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgY29uc3QgbGluayA9IGNyZWF0ZUxpbmsoYVRleHQsIGFIcmVmKTtcclxuICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsaW5rKTtcclxuXHJcbiAgcmV0dXJuIGxpc3RJdGVtO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMaW5rKHRleHQsIGhyZWYsIGNsKSB7XHJcbiAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIGxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBocmVmKTtcclxuICBsaW5rLnRleHRDb250ZW50ID0gdGV4dDtcclxuXHJcbiAgcmV0dXJuIGxpbms7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxhYmVsKGZvckF0dHIsIGNsKSB7XHJcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBmb3JBdHRyKTtcclxuICBsYWJlbC5jbGFzc0xpc3QuYWRkKGNsKTtcclxuXHJcbiAgbGFiZWwuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcblxyXG4gIHJldHVybiBsYWJlbDtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEhlYWRlcigpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5cclxuICAvLyBIZWFkZXIgZWxlbWVudHNcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG4gIGNvbnN0IG1haW5NZW51TGluayA9IGNyZWF0ZUxpbmsoXCJcIiwgXCIjXCIpO1xyXG4gIGNvbnN0IGNoZWNrQm94ID0gY3JlYXRlQ2hlY2tCb3goXCJuYXYtdG9nZ2xlXCIsIFwibmF2LXRvZ2dsZVwiKTtcclxuICBjb25zdCBsYWJlbCA9IGNyZWF0ZUxhYmVsKFwibmF2LXRvZ2dsZVwiLCBcIm5hdi10b2dnbGUtbGFiZWxcIik7XHJcblxyXG4gIC8vIExvZ28gaW1hZ2VcclxuICBjb25zdCBteUxvZ28gPSBuZXcgSW1hZ2UoKTtcclxuICBteUxvZ28uc3JjID0gbG9nbztcclxuXHJcbiAgbWFpbk1lbnVMaW5rLmNsYXNzTGlzdC5hZGQoXCJsb2dvLWxpbmtcIik7XHJcbiAgbWFpbk1lbnVMaW5rLmFwcGVuZENoaWxkKG15TG9nbyk7XHJcblxyXG4gIC8vIE5hdlxyXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcbiAgY29uc3QgdUxpc3QgPSBjcmVhdGVVTGlzdCgpO1xyXG4gIG5hdi5hcHBlbmRDaGlsZCh1TGlzdCk7XHJcblxyXG4gIC8vIEhlYWRlciBjaGlsZHJlblxyXG4gIGhlYWRlci5hcHBlbmRDaGlsZChtYWluTWVudUxpbmspO1xyXG4gIGhlYWRlci5hcHBlbmRDaGlsZChjaGVja0JveCk7XHJcbiAgaGVhZGVyLmFwcGVuZChsYWJlbCk7XHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XHJcblxyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZEhlYWRlcjtcclxuIiwiZnVuY3Rpb24gbG9hZEhvbWUoKSB7XHJcbiAgLy8gRGlzcGxheSB0aGUgbWVudSBpY29uIHdoaWNoIGlzIGF0IHRoZSBib3R0b20gcmlnaHRcclxuICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWNvbnRhaW5lclwiKTtcclxuICBtZW51Q29udGFpbmVyLnN0eWxlID0gXCJ2aXNpYmlsaXR5OnZpc2libGVcIjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7XHJcbiIsImltcG9ydCBcIi4uL3N0eWxlcy9tZW51LmNzc1wiO1xyXG5cclxuaW1wb3J0IGFwcGxlIGZyb20gXCIuLi9pbWFnZXMvYXBwbGUucG5nXCI7XHJcbmltcG9ydCBjYWtlIGZyb20gXCIuLi9pbWFnZXMvY2FrZS5wbmdcIjtcclxuaW1wb3J0IGNhcnJvdCBmcm9tIFwiLi4vaW1hZ2VzL2NhcnJvdC5wbmdcIjtcclxuaW1wb3J0IGNoaWNrZW4gZnJvbSBcIi4uL2ltYWdlcy9jaGlja2VuLnBuZ1wiO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCIuLi9pbWFnZXMvY29va2llLnBuZ1wiO1xyXG5pbXBvcnQgZmlzaCBmcm9tIFwiLi4vaW1hZ2VzL2Zpc2gucG5nXCI7XHJcbmltcG9ydCBtZWxvbiBmcm9tIFwiLi4vaW1hZ2VzL21lbG9uLnBuZ1wiO1xyXG5pbXBvcnQgcGllIGZyb20gXCIuLi9pbWFnZXMvcGllLnBuZ1wiO1xyXG5pbXBvcnQgc291cCBmcm9tIFwiLi4vaW1hZ2VzL3NvdXAucG5nXCI7XHJcbmltcG9ydCBzdGVhayBmcm9tIFwiLi4vaW1hZ2VzL3N0ZWFrLnBuZ1wiO1xyXG5pbXBvcnQgZW1lcmFsZCBmcm9tIFwiLi4vaW1hZ2VzL2VtZXJhbGQucG5nXCI7XHJcblxyXG5mdW5jdGlvbiBsb2FkTWVudSgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5cclxuICAvLyBIaWRlIHRoZSBtZW51IGljb24gd2hpY2ggaXMgYXQgdGhlIGJvdHRvbSByaWdodFxyXG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtY29udGFpbmVyXCIpO1xyXG4gIG1lbnVDb250YWluZXIuc3R5bGUgPSBcInZpc2liaWxpdHk6aGlkZGVuXCI7XHJcblxyXG4gIGNvbnN0IGZvb2RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGZvb2RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvb2QtY29udGFpbmVyXCIpO1xyXG4gIGZvb2RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInBhZ2UtbG9hZFwiKTtcclxuXHJcbiAgLy8gQVBQTEVcclxuICBjb25zdCBhcHBsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgYXBwbGVUZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBhcHBsZVByaWNlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBhcHBsZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gIGNvbnN0IGFwcGxlRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb25zdCBhcHBsZVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcblxyXG4gIGNvbnN0IGFwcGxlSW1nID0gbmV3IEltYWdlKCk7XHJcbiAgY29uc3QgYXBwbGVQcmljZUltZyA9IG5ldyBJbWFnZSgpO1xyXG4gIGFwcGxlSW1nLnNyYyA9IGFwcGxlO1xyXG4gIGFwcGxlUHJpY2VJbWcuc3JjID0gZW1lcmFsZDtcclxuXHJcbiAgYXBwbGVUaXRsZS50ZXh0Q29udGVudCA9IFwiQXBwbGVcIjtcclxuICBhcHBsZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJBIGJpZyBqdWljeSByZWQgcm91bmQgYXBwbGVcIjtcclxuICBhcHBsZVByaWNlLnRleHRDb250ZW50ID0gXCI1XCI7XHJcblxyXG4gIGFwcGxlSW1nLmNsYXNzTGlzdC5hZGQoXCJmb29kLWltZ1wiKTtcclxuICBhcHBsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9vZFwiKTtcclxuICBhcHBsZVRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRleHRcIik7XHJcbiAgYXBwbGVQcmljZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XHJcblxyXG4gIGFwcGxlVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChhcHBsZVRpdGxlKTtcclxuICBhcHBsZVRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoYXBwbGVEZXNjcmlwdGlvbik7XHJcbiAgYXBwbGVUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFwcGxlUHJpY2VDb250YWluZXIpO1xyXG5cclxuICBhcHBsZVByaWNlQ29udGFpbmVyLmFwcGVuZENoaWxkKGFwcGxlUHJpY2UpO1xyXG4gIGFwcGxlUHJpY2VDb250YWluZXIuYXBwZW5kQ2hpbGQoYXBwbGVQcmljZUltZyk7XHJcblxyXG4gIGFwcGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGFwcGxlSW1nKTtcclxuICBhcHBsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChhcHBsZVRleHRDb250YWluZXIpO1xyXG4gIGZvb2RDb250YWluZXIuYXBwZW5kQ2hpbGQoYXBwbGVDb250YWluZXIpO1xyXG5cclxuICAvLyBDQUtFXHJcbiAgY29uc3QgY2FrZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgY2FrZVRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGNha2VQcmljZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgY2FrZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gIGNvbnN0IGNha2VEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNvbnN0IGNha2VQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG5cclxuICBjb25zdCBjYWtlSW1nID0gbmV3IEltYWdlKCk7XHJcbiAgY29uc3QgY2FrZVByaWNlSW1nID0gbmV3IEltYWdlKCk7XHJcbiAgY2FrZUltZy5zcmMgPSBjYWtlO1xyXG4gIGNha2VQcmljZUltZy5zcmMgPSBlbWVyYWxkO1xyXG5cclxuICBjYWtlVGl0bGUudGV4dENvbnRlbnQgPSBcIkNha2VcIjtcclxuICBjYWtlRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIkEgY3JlYW15IHN0cmF3YmVycnkgY2FrZVwiO1xyXG4gIGNha2VQcmljZS50ZXh0Q29udGVudCA9IFwiMTVcIjtcclxuXHJcbiAgY2FrZUltZy5jbGFzc0xpc3QuYWRkKFwiZm9vZC1pbWdcIik7XHJcbiAgY2FrZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9vZFwiKTtcclxuICBjYWtlVGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGV4dFwiKTtcclxuICBjYWtlUHJpY2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xyXG5cclxuICBjYWtlVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChjYWtlVGl0bGUpO1xyXG4gIGNha2VUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNha2VEZXNjcmlwdGlvbik7XHJcbiAgY2FrZVRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FrZVByaWNlQ29udGFpbmVyKTtcclxuXHJcbiAgY2FrZVByaWNlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNha2VQcmljZSk7XHJcbiAgY2FrZVByaWNlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNha2VQcmljZUltZyk7XHJcblxyXG4gIGNha2VDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FrZUltZyk7XHJcbiAgY2FrZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYWtlVGV4dENvbnRhaW5lcik7XHJcbiAgZm9vZENvbnRhaW5lci5hcHBlbmRDaGlsZChjYWtlQ29udGFpbmVyKTtcclxuXHJcbiAgLy8gQ0FSUk9UXHJcbiAgY29uc3QgY2Fycm90Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBjYXJyb3RUZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBjYXJyb3RQcmljZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgY2Fycm90VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgY29uc3QgY2Fycm90RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb25zdCBjYXJyb3RQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG5cclxuICBjb25zdCBjYXJyb3RJbWcgPSBuZXcgSW1hZ2UoKTtcclxuICBjb25zdCBjYXJyb3RQcmljZUltZyA9IG5ldyBJbWFnZSgpO1xyXG4gIGNhcnJvdEltZy5zcmMgPSBjYXJyb3Q7XHJcbiAgY2Fycm90UHJpY2VJbWcuc3JjID0gZW1lcmFsZDtcclxuXHJcbiAgY2Fycm90VGl0bGUudGV4dENvbnRlbnQgPSBcIkNhcnJvdFwiO1xyXG4gIGNhcnJvdERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJBIGNhcnJvdCBCdWdzIEJ1bm55IHdvdWxkIGxvdmVcIjtcclxuICBjYXJyb3RQcmljZS50ZXh0Q29udGVudCA9IFwiNFwiO1xyXG5cclxuICBjYXJyb3RJbWcuY2xhc3NMaXN0LmFkZChcImZvb2QtaW1nXCIpO1xyXG4gIGNhcnJvdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9vZFwiKTtcclxuICBjYXJyb3RUZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0XCIpO1xyXG4gIGNhcnJvdFByaWNlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcclxuXHJcbiAgY2Fycm90VGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJyb3RUaXRsZSk7XHJcbiAgY2Fycm90VGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJyb3REZXNjcmlwdGlvbik7XHJcbiAgY2Fycm90VGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJyb3RQcmljZUNvbnRhaW5lcik7XHJcblxyXG4gIGNhcnJvdFByaWNlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcnJvdFByaWNlKTtcclxuICBjYXJyb3RQcmljZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJyb3RQcmljZUltZyk7XHJcblxyXG4gIGNhcnJvdENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJyb3RJbWcpO1xyXG4gIGNhcnJvdENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJyb3RUZXh0Q29udGFpbmVyKTtcclxuICBmb29kQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcnJvdENvbnRhaW5lcik7XHJcblxyXG4gIC8vIENISUNLRU5cclxuICBjb25zdCBjaGlja2VuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBjaGlja2VuVGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgY2hpY2tlblByaWNlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBjaGlja2VuVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgY29uc3QgY2hpY2tlbkRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY29uc3QgY2hpY2tlblByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcblxyXG4gIGNvbnN0IGNoaWNrZW5JbWcgPSBuZXcgSW1hZ2UoKTtcclxuICBjb25zdCBjaGlja2VuUHJpY2VJbWcgPSBuZXcgSW1hZ2UoKTtcclxuICBjaGlja2VuSW1nLnNyYyA9IGNoaWNrZW47XHJcbiAgY2hpY2tlblByaWNlSW1nLnNyYyA9IGVtZXJhbGQ7XHJcblxyXG4gIGNoaWNrZW5UaXRsZS50ZXh0Q29udGVudCA9IFwiQ2hpY2tlblwiO1xyXG4gIGNoaWNrZW5EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiQSBmaW5lIG1lYWwgZm9yIGEgYm9keWJ1aWxkZXJcIjtcclxuICBjaGlja2VuUHJpY2UudGV4dENvbnRlbnQgPSBcIjhcIjtcclxuXHJcbiAgY2hpY2tlbkltZy5jbGFzc0xpc3QuYWRkKFwiZm9vZC1pbWdcIik7XHJcbiAgY2hpY2tlbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9vZFwiKTtcclxuICBjaGlja2VuVGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGV4dFwiKTtcclxuICBjaGlja2VuUHJpY2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xyXG5cclxuICBjaGlja2VuVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGlja2VuVGl0bGUpO1xyXG4gIGNoaWNrZW5UZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoaWNrZW5EZXNjcmlwdGlvbik7XHJcbiAgY2hpY2tlblRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hpY2tlblByaWNlQ29udGFpbmVyKTtcclxuXHJcbiAgY2hpY2tlblByaWNlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoaWNrZW5QcmljZSk7XHJcbiAgY2hpY2tlblByaWNlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoaWNrZW5QcmljZUltZyk7XHJcblxyXG4gIGNoaWNrZW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY2hpY2tlbkltZyk7XHJcbiAgY2hpY2tlbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGlja2VuVGV4dENvbnRhaW5lcik7XHJcbiAgZm9vZENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGlja2VuQ29udGFpbmVyKTtcclxuXHJcbiAgLy8gQ09PS0lFXHJcbiAgY29uc3QgY29va2llQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBjb29raWVUZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBjb29raWVQcmljZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgY29va2llVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgY29uc3QgY29va2llRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb25zdCBjb29raWVQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG5cclxuICBjb25zdCBjb29raWVJbWcgPSBuZXcgSW1hZ2UoKTtcclxuICBjb25zdCBjb29raWVQcmljZUltZyA9IG5ldyBJbWFnZSgpO1xyXG4gIGNvb2tpZUltZy5zcmMgPSBjb29raWU7XHJcbiAgY29va2llUHJpY2VJbWcuc3JjID0gZW1lcmFsZDtcclxuXHJcbiAgY29va2llVGl0bGUudGV4dENvbnRlbnQgPSBcIkNvb2tpZVwiO1xyXG4gIGNvb2tpZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJBIGRlbGljaW91cyBuZXcgYmFrZWQgY2hvY29sYXRlIGNvb2tpZVwiO1xyXG4gIGNvb2tpZVByaWNlLnRleHRDb250ZW50ID0gXCI5XCI7XHJcblxyXG4gIGNvb2tpZUltZy5jbGFzc0xpc3QuYWRkKFwiZm9vZC1pbWdcIik7XHJcbiAgY29va2llQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb29kXCIpO1xyXG4gIGNvb2tpZVRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRleHRcIik7XHJcbiAgY29va2llUHJpY2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xyXG5cclxuICBjb29raWVUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvb2tpZVRpdGxlKTtcclxuICBjb29raWVUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvb2tpZURlc2NyaXB0aW9uKTtcclxuICBjb29raWVUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvb2tpZVByaWNlQ29udGFpbmVyKTtcclxuXHJcbiAgY29va2llUHJpY2VDb250YWluZXIuYXBwZW5kQ2hpbGQoY29va2llUHJpY2UpO1xyXG4gIGNvb2tpZVByaWNlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvb2tpZVByaWNlSW1nKTtcclxuXHJcbiAgY29va2llQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvb2tpZUltZyk7XHJcbiAgY29va2llQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvb2tpZVRleHRDb250YWluZXIpO1xyXG4gIGZvb2RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29va2llQ29udGFpbmVyKTtcclxuXHJcbiAgLy8gRklTSFxyXG4gIGNvbnN0IGZpc2hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGZpc2hUZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBmaXNoUHJpY2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGZpc2hUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICBjb25zdCBmaXNoRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb25zdCBmaXNoUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuXHJcbiAgY29uc3QgZmlzaEltZyA9IG5ldyBJbWFnZSgpO1xyXG4gIGNvbnN0IGZpc2hQcmljZUltZyA9IG5ldyBJbWFnZSgpO1xyXG4gIGZpc2hJbWcuc3JjID0gZmlzaDtcclxuICBmaXNoUHJpY2VJbWcuc3JjID0gZW1lcmFsZDtcclxuXHJcbiAgZmlzaFRpdGxlLnRleHRDb250ZW50ID0gXCJGaXNoXCI7XHJcbiAgZmlzaERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJBIGRlbGljb3VzIHJvYXN0IGZpc2hcIjtcclxuICBmaXNoUHJpY2UudGV4dENvbnRlbnQgPSBcIjdcIjtcclxuXHJcbiAgZmlzaEltZy5jbGFzc0xpc3QuYWRkKFwiZm9vZC1pbWdcIik7XHJcbiAgZmlzaENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9vZFwiKTtcclxuICBmaXNoVGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGV4dFwiKTtcclxuICBmaXNoUHJpY2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xyXG5cclxuICBmaXNoVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChmaXNoVGl0bGUpO1xyXG4gIGZpc2hUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZpc2hEZXNjcmlwdGlvbik7XHJcbiAgZmlzaFRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoZmlzaFByaWNlQ29udGFpbmVyKTtcclxuXHJcbiAgZmlzaFByaWNlQ29udGFpbmVyLmFwcGVuZENoaWxkKGZpc2hQcmljZSk7XHJcbiAgZmlzaFByaWNlQ29udGFpbmVyLmFwcGVuZENoaWxkKGZpc2hQcmljZUltZyk7XHJcblxyXG4gIGZpc2hDb250YWluZXIuYXBwZW5kQ2hpbGQoZmlzaEltZyk7XHJcbiAgZmlzaENvbnRhaW5lci5hcHBlbmRDaGlsZChmaXNoVGV4dENvbnRhaW5lcik7XHJcbiAgZm9vZENvbnRhaW5lci5hcHBlbmRDaGlsZChmaXNoQ29udGFpbmVyKTtcclxuXHJcbiAgLy8gTUVMT05cclxuICBjb25zdCBtZWxvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgbWVsb25UZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBtZWxvblByaWNlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBtZWxvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gIGNvbnN0IG1lbG9uRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb25zdCBtZWxvblByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcblxyXG4gIGNvbnN0IG1lbG9uSW1nID0gbmV3IEltYWdlKCk7XHJcbiAgY29uc3QgbWVsb25QcmljZUltZyA9IG5ldyBJbWFnZSgpO1xyXG4gIG1lbG9uSW1nLnNyYyA9IG1lbG9uO1xyXG4gIG1lbG9uUHJpY2VJbWcuc3JjID0gZW1lcmFsZDtcclxuXHJcbiAgbWVsb25UaXRsZS50ZXh0Q29udGVudCA9IFwiTWVsb25cIjtcclxuICBtZWxvbkRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJBIGJpZyBkZWxpY2lvdXMgc2xpY2Ugb2YgbWVsb25cIjtcclxuICBtZWxvblByaWNlLnRleHRDb250ZW50ID0gXCIzXCI7XHJcblxyXG4gIG1lbG9uSW1nLmNsYXNzTGlzdC5hZGQoXCJmb29kLWltZ1wiKTtcclxuICBtZWxvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9vZFwiKTtcclxuICBtZWxvblRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRleHRcIik7XHJcbiAgbWVsb25QcmljZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XHJcblxyXG4gIG1lbG9uVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChtZWxvblRpdGxlKTtcclxuICBtZWxvblRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQobWVsb25EZXNjcmlwdGlvbik7XHJcbiAgbWVsb25UZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbG9uUHJpY2VDb250YWluZXIpO1xyXG5cclxuICBtZWxvblByaWNlQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbG9uUHJpY2UpO1xyXG4gIG1lbG9uUHJpY2VDb250YWluZXIuYXBwZW5kQ2hpbGQobWVsb25QcmljZUltZyk7XHJcblxyXG4gIG1lbG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbG9uSW1nKTtcclxuICBtZWxvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChtZWxvblRleHRDb250YWluZXIpO1xyXG4gIGZvb2RDb250YWluZXIuYXBwZW5kQ2hpbGQobWVsb25Db250YWluZXIpO1xyXG5cclxuICAvLyBQSUVcclxuICBjb25zdCBwaWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHBpZVRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHBpZVByaWNlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBwaWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICBjb25zdCBwaWVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNvbnN0IHBpZVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcblxyXG4gIGNvbnN0IHBpZUltZyA9IG5ldyBJbWFnZSgpO1xyXG4gIGNvbnN0IHBpZVByaWNlSW1nID0gbmV3IEltYWdlKCk7XHJcbiAgcGllSW1nLnNyYyA9IHBpZTtcclxuICBwaWVQcmljZUltZy5zcmMgPSBlbWVyYWxkO1xyXG5cclxuICBwaWVUaXRsZS50ZXh0Q29udGVudCA9IFwiUGllXCI7XHJcbiAgcGllRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIkEgcGllIHRoYXQgdGFzdGVzIGxpa2UgeW91ciBtb20nc1wiO1xyXG4gIHBpZVByaWNlLnRleHRDb250ZW50ID0gXCI4XCI7XHJcblxyXG4gIHBpZUltZy5jbGFzc0xpc3QuYWRkKFwiZm9vZC1pbWdcIik7XHJcbiAgcGllQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb29kXCIpO1xyXG4gIHBpZVRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRleHRcIik7XHJcbiAgcGllUHJpY2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xyXG5cclxuICBwaWVUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHBpZVRpdGxlKTtcclxuICBwaWVUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHBpZURlc2NyaXB0aW9uKTtcclxuICBwaWVUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHBpZVByaWNlQ29udGFpbmVyKTtcclxuXHJcbiAgcGllUHJpY2VDb250YWluZXIuYXBwZW5kQ2hpbGQocGllUHJpY2UpO1xyXG4gIHBpZVByaWNlQ29udGFpbmVyLmFwcGVuZENoaWxkKHBpZVByaWNlSW1nKTtcclxuXHJcbiAgcGllQ29udGFpbmVyLmFwcGVuZENoaWxkKHBpZUltZyk7XHJcbiAgcGllQ29udGFpbmVyLmFwcGVuZENoaWxkKHBpZVRleHRDb250YWluZXIpO1xyXG4gIGZvb2RDb250YWluZXIuYXBwZW5kQ2hpbGQocGllQ29udGFpbmVyKTtcclxuXHJcbiAgLy8gU09VUFxyXG4gIGNvbnN0IHNvdXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHNvdXBUZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBzb3VwUHJpY2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHNvdXBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICBjb25zdCBzb3VwRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb25zdCBzb3VwUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuXHJcbiAgY29uc3Qgc291cEltZyA9IG5ldyBJbWFnZSgpO1xyXG4gIGNvbnN0IHNvdXBQcmljZUltZyA9IG5ldyBJbWFnZSgpO1xyXG4gIHNvdXBJbWcuc3JjID0gc291cDtcclxuICBzb3VwUHJpY2VJbWcuc3JjID0gZW1lcmFsZDtcclxuXHJcbiAgc291cFRpdGxlLnRleHRDb250ZW50ID0gXCJTb3VwXCI7XHJcbiAgc291cERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJBIGhvdCBzb3VwIG1hZGUgZnJvbSBtdXNocm9vbXNcIjtcclxuICBzb3VwUHJpY2UudGV4dENvbnRlbnQgPSBcIjVcIjtcclxuXHJcbiAgc291cEltZy5jbGFzc0xpc3QuYWRkKFwiZm9vZC1pbWdcIik7XHJcbiAgc291cENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9vZFwiKTtcclxuICBzb3VwVGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGV4dFwiKTtcclxuICBzb3VwUHJpY2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xyXG5cclxuICBzb3VwVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChzb3VwVGl0bGUpO1xyXG4gIHNvdXBUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNvdXBEZXNjcmlwdGlvbik7XHJcbiAgc291cFRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoc291cFByaWNlQ29udGFpbmVyKTtcclxuXHJcbiAgc291cFByaWNlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNvdXBQcmljZSk7XHJcbiAgc291cFByaWNlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNvdXBQcmljZUltZyk7XHJcblxyXG4gIHNvdXBDb250YWluZXIuYXBwZW5kQ2hpbGQoc291cEltZyk7XHJcbiAgc291cENvbnRhaW5lci5hcHBlbmRDaGlsZChzb3VwVGV4dENvbnRhaW5lcik7XHJcbiAgZm9vZENvbnRhaW5lci5hcHBlbmRDaGlsZChzb3VwQ29udGFpbmVyKTtcclxuXHJcbiAgLy8gU1RFQUtcclxuICBjb25zdCBzdGVha0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3Qgc3RlYWtUZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBzdGVha1ByaWNlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBzdGVha1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gIGNvbnN0IHN0ZWFrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb25zdCBzdGVha1ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcblxyXG4gIGNvbnN0IHN0ZWFrSW1nID0gbmV3IEltYWdlKCk7XHJcbiAgY29uc3Qgc3RlYWtQcmljZUltZyA9IG5ldyBJbWFnZSgpO1xyXG4gIHN0ZWFrSW1nLnNyYyA9IHN0ZWFrO1xyXG4gIHN0ZWFrUHJpY2VJbWcuc3JjID0gZW1lcmFsZDtcclxuXHJcbiAgc3RlYWtUaXRsZS50ZXh0Q29udGVudCA9IFwiU3RlYWtcIjtcclxuICBzdGVha0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJBIGRlbGljaW91cyBtZWRpdW0tcmFyZSBzdGVha1wiO1xyXG4gIHN0ZWFrUHJpY2UudGV4dENvbnRlbnQgPSBcIjEyXCI7XHJcblxyXG4gIHN0ZWFrSW1nLmNsYXNzTGlzdC5hZGQoXCJmb29kLWltZ1wiKTtcclxuICBzdGVha0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9vZFwiKTtcclxuICBzdGVha1RleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRleHRcIik7XHJcbiAgc3RlYWtQcmljZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XHJcblxyXG4gIHN0ZWFrVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChzdGVha1RpdGxlKTtcclxuICBzdGVha1RleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RlYWtEZXNjcmlwdGlvbik7XHJcbiAgc3RlYWtUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHN0ZWFrUHJpY2VDb250YWluZXIpO1xyXG5cclxuICBzdGVha1ByaWNlQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0ZWFrUHJpY2UpO1xyXG4gIHN0ZWFrUHJpY2VDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RlYWtQcmljZUltZyk7XHJcblxyXG4gIHN0ZWFrQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0ZWFrSW1nKTtcclxuICBzdGVha0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdGVha1RleHRDb250YWluZXIpO1xyXG4gIGZvb2RDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RlYWtDb250YWluZXIpO1xyXG5cclxuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb2RDb250YWluZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudTtcclxuIiwiaW1wb3J0IFwiLi4vc3R5bGVzL2hvbWUuY3NzXCI7XHJcbmltcG9ydCBtZW51SWNvbiBmcm9tIFwiLi4vaW1hZ2VzL2dvbGRlbkFwcGxlLmdpZlwiO1xyXG5cclxuLy8gQ3JlYXRlcyB0aGUgY29udGFpbmVyIGZvciBuYXZpZ2F0aW5nIHRvIG1lbnVcclxuZnVuY3Rpb24gbG9hZE1lbnVJY29uKCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcblxyXG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb25zdCBteUljb24gPSBuZXcgSW1hZ2UoKTtcclxuXHJcbiAgbXlJY29uLnNyYyA9IG1lbnVJY29uO1xyXG4gIHBhcmEudGV4dENvbnRlbnQgPSBcIk1FTlVcIjtcclxuXHJcbiAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudS1jb250YWluZXJcIik7XHJcblxyXG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQocGFyYSk7XHJcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChteUljb24pO1xyXG5cclxuICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudUljb247XHJcbiIsImNvbnN0IHJlc2V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgY29udGVudC5zdHlsZSA9IFwiXCI7XHJcblxyXG4gIGxldCBsYXN0Q2hpbGQgPSBjb250ZW50Lmxhc3RFbGVtZW50Q2hpbGQ7XHJcbiAgLy8gUmVtb3ZlIGFsbCBjaGlsZHJlbiBleHBlY3QgdGhlIGZpcnN0IHR3byhoZWFkZXIgYW5kIC5tZW51LWNvbnRhaW5lcilcclxuICB3aGlsZSAobGFzdENoaWxkICE9IGNvbnRlbnQuY2hpbGRyZW5bMV0pIHtcclxuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQobGFzdENoaWxkKTtcclxuICAgIGxhc3RDaGlsZCA9IGNvbnRlbnQubGFzdEVsZW1lbnRDaGlsZDtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXNldDtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IFwiLi9zdHlsZXMvY29tbW9uLmNzc1wiO1xyXG5cclxuaW1wb3J0IGhvbWUgZnJvbSBcIi4vbW9kdWxlcy9ob21lLmpzXCI7XHJcbmltcG9ydCBtZW51IGZyb20gXCIuL21vZHVsZXMvbWVudS5qc1wiO1xyXG5pbXBvcnQgYWJvdXQgZnJvbSBcIi4vbW9kdWxlcy9hYm91dC5qc1wiO1xyXG5pbXBvcnQgY29udGFjdCBmcm9tIFwiLi9tb2R1bGVzL2NvbnRhY3QuanNcIjtcclxuaW1wb3J0IHJlc2V0IGZyb20gXCIuL21vZHVsZXMvcmVzZXQuanNcIjtcclxuaW1wb3J0IGhlYWRlciBmcm9tIFwiLi9tb2R1bGVzL2hlYWRlci5qc1wiO1xyXG5pbXBvcnQgbWVudUljb24gZnJvbSBcIi4vbW9kdWxlcy9tZW51SWNvbi5qc1wiO1xyXG5cclxuLy8gSW5pdGlhbCBwYWdlIGxvYWRcclxuaGVhZGVyKCk7XHJcbm1lbnVJY29uKCk7XHJcblxyXG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dvLWxpbmtcIik7XHJcbmNvbnN0IGFib3V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hYm91dC1saW5rXCIpO1xyXG5jb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0LWxpbmtcIik7XHJcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtY29udGFpbmVyXCIpO1xyXG5cclxuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHJlc2V0KCk7XHJcbiAgaG9tZSgpO1xyXG59KTtcclxuXHJcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICByZXNldCgpO1xyXG4gIG1lbnUoKTtcclxufSk7XHJcblxyXG5hYm91dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHJlc2V0KCk7XHJcbiAgYWJvdXQoKTtcclxufSk7XHJcblxyXG5jb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgcmVzZXQoKTtcclxuICBjb250YWN0KCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
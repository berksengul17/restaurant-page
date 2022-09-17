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
  console.log("event triggered");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsNkRBQUs7QUFDUCxFQUFFLDREQUFJO0FBQ04sQ0FBQzs7QUFFRDtBQUNBLEVBQUUsNkRBQUs7QUFDUCxFQUFFLDREQUFJO0FBQ047QUFDQSxDQUFDOztBQUVEO0FBQ0EsRUFBRSw2REFBSztBQUNQLEVBQUUsNkRBQUs7QUFDUCxDQUFDOztBQUVEO0FBQ0EsRUFBRSw2REFBSztBQUNQLEVBQUUsK0RBQU87QUFDVCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy9hYm91dC5jc3M/NjRlYyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL2NvbW1vbi5jc3M/M2ZlYiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL2NvbnRhY3QuY3NzP2ZiZjAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy9oZWFkZXIuY3NzPzFmZDgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy9ob21lLmNzcz85NjU5Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMvbWVudS5jc3M/OGY5MiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvbWVudUljb24uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvcmVzZXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgXCIuLi9zdHlsZXMvYWJvdXQuY3NzXCI7XG5cbmZ1bmN0aW9uIGxvYWRBYm91dCgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICAvLyBIaWRlIHRoZSBtZW51IGljb24gd2hpY2ggaXMgYXQgdGhlIGJvdHRvbSByaWdodFxuICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWNvbnRhaW5lclwiKTtcbiAgbWVudUNvbnRhaW5lci5zdHlsZSA9IFwidmlzaWJpbGl0eTpoaWRkZW5cIjtcblxuICBjb25zdCBhYm91dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIGFib3V0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhYm91dC1jb250YWluZXJcIik7XG4gIGFib3V0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwYWdlLWxvYWRcIik7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJhYm91dC10aXRsZVwiKTtcbiAgYWJvdXQuY2xhc3NMaXN0LmFkZChcImFib3V0LXRleHRcIik7XG5cbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkNhZmUgTUNcIjtcbiAgYWJvdXQudGV4dENvbnRlbnQgPVxuICAgIFwiVGhlcmUgaXMgc3VwcG9zZWQgdG8gYmUgYSBjb29sIGFib3V0IHRleHQgYnV0IHNpbmNlIEkgYW0gbm90IGNyZWF0aXZlIGF0IGFsbCwgXCIgK1xuICAgIFwiSSB3aWxsIGp1c3QgZmlsbCB0aGlzIGFyZWEgd2l0aCBzb21lIHJhbmRvbSB0ZXh0LiBcIiArXG4gICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGNvbW1vZG8gbGlndWxhIGVnZXQgZG9sb3IuIEFlbmVhbiBtYXNzYS4gXCIgK1xuICAgIFwiQ3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLiBEb25lYyBxdWFtIGZlbGlzLCBcIiArXG4gICAgXCJ1bHRyaWNpZXMgbmVjLCBwZWxsZW50ZXNxdWUgZXUsIHByZXRpdW0gcXVpcywgc2VtLiBOdWxsYSBjb25zZXF1YXQgbWFzc2EgcXVpcyBlbmltLiBEb25lYyBwZWRlIGp1c3RvLCBcIiArXG4gICAgXCJmcmluZ2lsbGEgdmVsLCBhbGlxdWV0IG5lYywgdnVscHV0YXRlIGVnZXQsIGFyY3UuIEluIGVuaW0ganVzdG8sIHJob25jdXMgdXQsIGltcGVyZGlldCBhLCB2ZW5lbmF0aXMgdml0YWUsIGp1c3RvLiBcIiArXG4gICAgXCJOdWxsYW0gZGljdHVtIGZlbGlzIGV1IHBlZGUgbW9sbGlzIHByZXRpdW0uIEludGVnZXIgdGluY2lkdW50LiBDcmFzIGRhcGlidXMuIFZpdmFtdXMgZWxlbWVudHVtIHNlbXBlciBuaXNpLiBcIiArXG4gICAgXCJBZW5lYW4gdnVscHV0YXRlIGVsZWlmZW5kIHRlbGx1cy4gQWVuZWFuIGxlbyBsaWd1bGEsIHBvcnR0aXRvciBldSwgY29uc2VxdWF0IHZpdGFlLCBlbGVpZmVuZCBhYywgZW5pbS5cIjtcblxuICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0KTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGFib3V0Q29udGFpbmVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEFib3V0O1xuIiwiaW1wb3J0IFwiLi4vc3R5bGVzL2NvbnRhY3QuY3NzXCI7XG5cbmZ1bmN0aW9uIGxvYWRDb250YWN0KCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gIC8vIEhpZGUgdGhlIG1lbnUgaWNvbiB3aGljaCBpcyBhdCB0aGUgYm90dG9tIHJpZ2h0XG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtY29udGFpbmVyXCIpO1xuICBtZW51Q29udGFpbmVyLnN0eWxlID0gXCJ2aXNpYmlsaXR5OmhpZGRlblwiO1xuXG4gIGNvbnN0IGNvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjZWxsTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcbiAgbG9jYXRpb24uc3JjID1cbiAgICAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkNjI0MDguMTcyOTAwMjUzNSEyZDk2Ljc3MzMzODgzOTMyNjU2ITNkLTEyLjE0NTU4NzE0MTUwMDI5NSEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4MmYwZWM2MGU0YWEzMWM5MyUzQTB4YWJkMTc1ZmE3ZGFjMTcxYiEyc1dlc3QlMjBJc2xhbmQlMjBTaGlyZSUyMG9mJTIwQ29jb3MlMjA2Nzk5JTJDJTIwQ29jb3MlMjAoS2VlbGluZyklMjBJc2xhbmRzITVlMCEzbTIhMXNlbiEyc3RyITR2MTY2MzMzMDQwMjI4NCE1bTIhMXNlbiEyc3RyXCIgd2lkdGg9XCI2MDBcIiBoZWlnaHQ9XCI0NTBcIiBzdHlsZT1cImJvcmRlcjowO1wiIGFsbG93ZnVsbHNjcmVlbj1cIlwiIGxvYWRpbmc9XCJsYXp5XCIgcmVmZXJyZXJwb2xpY3k9XCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZSc7XG4gIGNlbGxOdW1iZXIudGV4dENvbnRlbnQgPSBcIvCfk7EgMTIzIDQ1NiA3ODlcIjtcblxuICBjb250YWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWNvbnRhaW5lclwiKTtcbiAgY29udGFjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicGFnZS1sb2FkXCIpO1xuICBjZWxsTnVtYmVyLmNsYXNzTGlzdC5hZGQoXCJjZWxsLW51bWJlclwiKTtcbiAgbG9jYXRpb24uY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uXCIpO1xuXG4gIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY2VsbE51bWJlcik7XG4gIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRhaW5lcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRDb250YWN0O1xuIiwiaW1wb3J0IFwiLi4vc3R5bGVzL2hlYWRlci5jc3NcIjtcbmltcG9ydCBsb2dvIGZyb20gXCIuLi9pbWFnZXMvbG9nby5wbmdcIjtcblxuZnVuY3Rpb24gY3JlYXRlQ2hlY2tCb3goaWQsIGNsKSB7XG4gIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjaGVja0JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gIGNoZWNrQm94LnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgY2hlY2tCb3guY2xhc3NMaXN0LmFkZChjbCk7XG5cbiAgcmV0dXJuIGNoZWNrQm94O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOYXYoKSB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gIGNvbnN0IHVMaXN0ID0gY3JlYXRlVUxpc3QoKTtcbiAgbmF2LmFwcGVuZENoaWxkKHVMaXN0KTtcblxuICByZXR1cm4gbmF2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVVTGlzdCgpIHtcbiAgY29uc3QgdUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGNvbnN0IGFib3V0SXRlbSA9IGNyZWF0ZUxpc3RJdGVtKFwiQWJvdXRcIiwgXCIjXCIpO1xuICBjb25zdCBjb250YWN0SXRlbSA9IGNyZWF0ZUxpc3RJdGVtKFwiQ29udGFjdFwiLCBcIiNcIik7XG5cbiAgYWJvdXRJdGVtLmNsYXNzTGlzdC5hZGQoXCJhYm91dC1saW5rXCIpO1xuICBjb250YWN0SXRlbS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1saW5rXCIpO1xuXG4gIHVMaXN0LmFwcGVuZENoaWxkKGFib3V0SXRlbSk7XG4gIHVMaXN0LmFwcGVuZENoaWxkKGNvbnRhY3RJdGVtKTtcblxuICByZXR1cm4gdUxpc3Q7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpc3RJdGVtKGFUZXh0LCBhSHJlZikge1xuICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgbGluayA9IGNyZWF0ZUxpbmsoYVRleHQsIGFIcmVmKTtcbiAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGluayk7XG5cbiAgcmV0dXJuIGxpc3RJdGVtO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rKHRleHQsIGhyZWYsIGNsKSB7XG4gIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgbGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGhyZWYpO1xuICBsaW5rLnRleHRDb250ZW50ID0gdGV4dDtcblxuICByZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGFiZWwoZm9yQXR0ciwgY2wpIHtcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGZvckF0dHIpO1xuICBsYWJlbC5jbGFzc0xpc3QuYWRkKGNsKTtcblxuICBsYWJlbC5hcHBlbmRDaGlsZChzcGFuKTtcblxuICByZXR1cm4gbGFiZWw7XG59XG5cbmZ1bmN0aW9uIGxvYWRIZWFkZXIoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgLy8gSGVhZGVyIGVsZW1lbnRzXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIGNvbnN0IG1haW5NZW51TGluayA9IGNyZWF0ZUxpbmsoXCJcIiwgXCIjXCIpO1xuICBjb25zdCBjaGVja0JveCA9IGNyZWF0ZUNoZWNrQm94KFwibmF2LXRvZ2dsZVwiLCBcIm5hdi10b2dnbGVcIik7XG4gIGNvbnN0IGxhYmVsID0gY3JlYXRlTGFiZWwoXCJuYXYtdG9nZ2xlXCIsIFwibmF2LXRvZ2dsZS1sYWJlbFwiKTtcblxuICAvLyBMb2dvIGltYWdlXG4gIGNvbnN0IG15TG9nbyA9IG5ldyBJbWFnZSgpO1xuICBteUxvZ28uc3JjID0gbG9nbztcblxuICBtYWluTWVudUxpbmsuY2xhc3NMaXN0LmFkZChcImxvZ28tbGlua1wiKTtcbiAgbWFpbk1lbnVMaW5rLmFwcGVuZENoaWxkKG15TG9nbyk7XG5cbiAgLy8gTmF2XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gIGNvbnN0IHVMaXN0ID0gY3JlYXRlVUxpc3QoKTtcbiAgbmF2LmFwcGVuZENoaWxkKHVMaXN0KTtcblxuICAvLyBIZWFkZXIgY2hpbGRyZW5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKG1haW5NZW51TGluayk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChjaGVja0JveCk7XG4gIGhlYWRlci5hcHBlbmQobGFiZWwpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRIZWFkZXI7XG4iLCJmdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgLy8gRGlzcGxheSB0aGUgbWVudSBpY29uIHdoaWNoIGlzIGF0IHRoZSBib3R0b20gcmlnaHRcbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1jb250YWluZXJcIik7XG4gIG1lbnVDb250YWluZXIuc3R5bGUgPSBcInZpc2liaWxpdHk6dmlzaWJsZVwiO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZTtcbiIsImltcG9ydCBcIi4uL3N0eWxlcy9tZW51LmNzc1wiO1xuXG5pbXBvcnQgYXBwbGUgZnJvbSBcIi4uL2ltYWdlcy9hcHBsZS5wbmdcIjtcbmltcG9ydCBjYWtlIGZyb20gXCIuLi9pbWFnZXMvY2FrZS5wbmdcIjtcbmltcG9ydCBjYXJyb3QgZnJvbSBcIi4uL2ltYWdlcy9jYXJyb3QucG5nXCI7XG5pbXBvcnQgY2hpY2tlbiBmcm9tIFwiLi4vaW1hZ2VzL2NoaWNrZW4ucG5nXCI7XG5pbXBvcnQgY29va2llIGZyb20gXCIuLi9pbWFnZXMvY29va2llLnBuZ1wiO1xuaW1wb3J0IGZpc2ggZnJvbSBcIi4uL2ltYWdlcy9maXNoLnBuZ1wiO1xuaW1wb3J0IG1lbG9uIGZyb20gXCIuLi9pbWFnZXMvbWVsb24ucG5nXCI7XG5pbXBvcnQgcGllIGZyb20gXCIuLi9pbWFnZXMvcGllLnBuZ1wiO1xuaW1wb3J0IHNvdXAgZnJvbSBcIi4uL2ltYWdlcy9zb3VwLnBuZ1wiO1xuaW1wb3J0IHN0ZWFrIGZyb20gXCIuLi9pbWFnZXMvc3RlYWsucG5nXCI7XG5pbXBvcnQgZW1lcmFsZCBmcm9tIFwiLi4vaW1hZ2VzL2VtZXJhbGQucG5nXCI7XG5cbmZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gIC8vIEhpZGUgdGhlIG1lbnUgaWNvbiB3aGljaCBpcyBhdCB0aGUgYm90dG9tIHJpZ2h0XG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtY29udGFpbmVyXCIpO1xuICBtZW51Q29udGFpbmVyLnN0eWxlID0gXCJ2aXNpYmlsaXR5OmhpZGRlblwiO1xuXG4gIGNvbnN0IGZvb2RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb29kQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb29kLWNvbnRhaW5lclwiKTtcbiAgZm9vZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicGFnZS1sb2FkXCIpO1xuXG4gIC8vIEFQUExFXG4gIGNvbnN0IGFwcGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYXBwbGVUZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYXBwbGVQcmljZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGFwcGxlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNvbnN0IGFwcGxlRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgYXBwbGVQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gIGNvbnN0IGFwcGxlSW1nID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IGFwcGxlUHJpY2VJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgYXBwbGVJbWcuc3JjID0gYXBwbGU7XG4gIGFwcGxlUHJpY2VJbWcuc3JjID0gZW1lcmFsZDtcblxuICBhcHBsZVRpdGxlLnRleHRDb250ZW50ID0gXCJBcHBsZVwiO1xuICBhcHBsZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJBIGJpZyBqdWljeSByZWQgcm91bmQgYXBwbGVcIjtcbiAgYXBwbGVQcmljZS50ZXh0Q29udGVudCA9IFwiNVwiO1xuXG4gIGFwcGxlSW1nLmNsYXNzTGlzdC5hZGQoXCJmb29kLWltZ1wiKTtcbiAgYXBwbGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvb2RcIik7XG4gIGFwcGxlVGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGV4dFwiKTtcbiAgYXBwbGVQcmljZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG5cbiAgYXBwbGVUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFwcGxlVGl0bGUpO1xuICBhcHBsZVRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoYXBwbGVEZXNjcmlwdGlvbik7XG4gIGFwcGxlVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChhcHBsZVByaWNlQ29udGFpbmVyKTtcblxuICBhcHBsZVByaWNlQ29udGFpbmVyLmFwcGVuZENoaWxkKGFwcGxlUHJpY2UpO1xuICBhcHBsZVByaWNlQ29udGFpbmVyLmFwcGVuZENoaWxkKGFwcGxlUHJpY2VJbWcpO1xuXG4gIGFwcGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGFwcGxlSW1nKTtcbiAgYXBwbGVDb250YWluZXIuYXBwZW5kQ2hpbGQoYXBwbGVUZXh0Q29udGFpbmVyKTtcbiAgZm9vZENvbnRhaW5lci5hcHBlbmRDaGlsZChhcHBsZUNvbnRhaW5lcik7XG5cbiAgLy8gQ0FLRVxuICBjb25zdCBjYWtlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY2FrZVRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjYWtlUHJpY2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjYWtlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNvbnN0IGNha2VEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBjYWtlUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICBjb25zdCBjYWtlSW1nID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IGNha2VQcmljZUltZyA9IG5ldyBJbWFnZSgpO1xuICBjYWtlSW1nLnNyYyA9IGNha2U7XG4gIGNha2VQcmljZUltZy5zcmMgPSBlbWVyYWxkO1xuXG4gIGNha2VUaXRsZS50ZXh0Q29udGVudCA9IFwiQ2FrZVwiO1xuICBjYWtlRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIkEgY3JlYW15IHN0cmF3YmVycnkgY2FrZVwiO1xuICBjYWtlUHJpY2UudGV4dENvbnRlbnQgPSBcIjE1XCI7XG5cbiAgY2FrZUltZy5jbGFzc0xpc3QuYWRkKFwiZm9vZC1pbWdcIik7XG4gIGNha2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvb2RcIik7XG4gIGNha2VUZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0XCIpO1xuICBjYWtlUHJpY2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuXG4gIGNha2VUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNha2VUaXRsZSk7XG4gIGNha2VUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNha2VEZXNjcmlwdGlvbik7XG4gIGNha2VUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNha2VQcmljZUNvbnRhaW5lcik7XG5cbiAgY2FrZVByaWNlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNha2VQcmljZSk7XG4gIGNha2VQcmljZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYWtlUHJpY2VJbWcpO1xuXG4gIGNha2VDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FrZUltZyk7XG4gIGNha2VDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FrZVRleHRDb250YWluZXIpO1xuICBmb29kQ29udGFpbmVyLmFwcGVuZENoaWxkKGNha2VDb250YWluZXIpO1xuXG4gIC8vIENBUlJPVFxuICBjb25zdCBjYXJyb3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjYXJyb3RUZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY2Fycm90UHJpY2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjYXJyb3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgY29uc3QgY2Fycm90RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgY2Fycm90UHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICBjb25zdCBjYXJyb3RJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgY2Fycm90UHJpY2VJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY2Fycm90SW1nLnNyYyA9IGNhcnJvdDtcbiAgY2Fycm90UHJpY2VJbWcuc3JjID0gZW1lcmFsZDtcblxuICBjYXJyb3RUaXRsZS50ZXh0Q29udGVudCA9IFwiQ2Fycm90XCI7XG4gIGNhcnJvdERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJBIGNhcnJvdCBCdWdzIEJ1bm55IHdvdWxkIGxvdmVcIjtcbiAgY2Fycm90UHJpY2UudGV4dENvbnRlbnQgPSBcIjRcIjtcblxuICBjYXJyb3RJbWcuY2xhc3NMaXN0LmFkZChcImZvb2QtaW1nXCIpO1xuICBjYXJyb3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvb2RcIik7XG4gIGNhcnJvdFRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRleHRcIik7XG4gIGNhcnJvdFByaWNlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcblxuICBjYXJyb3RUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNhcnJvdFRpdGxlKTtcbiAgY2Fycm90VGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJyb3REZXNjcmlwdGlvbik7XG4gIGNhcnJvdFRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2Fycm90UHJpY2VDb250YWluZXIpO1xuXG4gIGNhcnJvdFByaWNlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcnJvdFByaWNlKTtcbiAgY2Fycm90UHJpY2VDb250YWluZXIuYXBwZW5kQ2hpbGQoY2Fycm90UHJpY2VJbWcpO1xuXG4gIGNhcnJvdENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJyb3RJbWcpO1xuICBjYXJyb3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY2Fycm90VGV4dENvbnRhaW5lcik7XG4gIGZvb2RDb250YWluZXIuYXBwZW5kQ2hpbGQoY2Fycm90Q29udGFpbmVyKTtcblxuICAvLyBDSElDS0VOXG4gIGNvbnN0IGNoaWNrZW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjaGlja2VuVGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNoaWNrZW5QcmljZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNoaWNrZW5UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgY29uc3QgY2hpY2tlbkRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGNoaWNrZW5QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gIGNvbnN0IGNoaWNrZW5JbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgY2hpY2tlblByaWNlSW1nID0gbmV3IEltYWdlKCk7XG4gIGNoaWNrZW5JbWcuc3JjID0gY2hpY2tlbjtcbiAgY2hpY2tlblByaWNlSW1nLnNyYyA9IGVtZXJhbGQ7XG5cbiAgY2hpY2tlblRpdGxlLnRleHRDb250ZW50ID0gXCJDaGlja2VuXCI7XG4gIGNoaWNrZW5EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiQSBmaW5lIG1lYWwgZm9yIGEgYm9keWJ1aWxkZXJcIjtcbiAgY2hpY2tlblByaWNlLnRleHRDb250ZW50ID0gXCI4XCI7XG5cbiAgY2hpY2tlbkltZy5jbGFzc0xpc3QuYWRkKFwiZm9vZC1pbWdcIik7XG4gIGNoaWNrZW5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvb2RcIik7XG4gIGNoaWNrZW5UZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0XCIpO1xuICBjaGlja2VuUHJpY2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuXG4gIGNoaWNrZW5UZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoaWNrZW5UaXRsZSk7XG4gIGNoaWNrZW5UZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoaWNrZW5EZXNjcmlwdGlvbik7XG4gIGNoaWNrZW5UZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoaWNrZW5QcmljZUNvbnRhaW5lcik7XG5cbiAgY2hpY2tlblByaWNlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoaWNrZW5QcmljZSk7XG4gIGNoaWNrZW5QcmljZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGlja2VuUHJpY2VJbWcpO1xuXG4gIGNoaWNrZW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY2hpY2tlbkltZyk7XG4gIGNoaWNrZW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY2hpY2tlblRleHRDb250YWluZXIpO1xuICBmb29kQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoaWNrZW5Db250YWluZXIpO1xuXG4gIC8vIENPT0tJRVxuICBjb25zdCBjb29raWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb29raWVUZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29va2llUHJpY2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb29raWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgY29uc3QgY29va2llRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgY29va2llUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICBjb25zdCBjb29raWVJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgY29va2llUHJpY2VJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY29va2llSW1nLnNyYyA9IGNvb2tpZTtcbiAgY29va2llUHJpY2VJbWcuc3JjID0gZW1lcmFsZDtcblxuICBjb29raWVUaXRsZS50ZXh0Q29udGVudCA9IFwiQ29va2llXCI7XG4gIGNvb2tpZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJBIGRlbGljaW91cyBuZXcgYmFrZWQgY2hvY29sYXRlIGNvb2tpZVwiO1xuICBjb29raWVQcmljZS50ZXh0Q29udGVudCA9IFwiOVwiO1xuXG4gIGNvb2tpZUltZy5jbGFzc0xpc3QuYWRkKFwiZm9vZC1pbWdcIik7XG4gIGNvb2tpZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9vZFwiKTtcbiAgY29va2llVGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGV4dFwiKTtcbiAgY29va2llUHJpY2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuXG4gIGNvb2tpZVRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29va2llVGl0bGUpO1xuICBjb29raWVUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvb2tpZURlc2NyaXB0aW9uKTtcbiAgY29va2llVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChjb29raWVQcmljZUNvbnRhaW5lcik7XG5cbiAgY29va2llUHJpY2VDb250YWluZXIuYXBwZW5kQ2hpbGQoY29va2llUHJpY2UpO1xuICBjb29raWVQcmljZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjb29raWVQcmljZUltZyk7XG5cbiAgY29va2llQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvb2tpZUltZyk7XG4gIGNvb2tpZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjb29raWVUZXh0Q29udGFpbmVyKTtcbiAgZm9vZENvbnRhaW5lci5hcHBlbmRDaGlsZChjb29raWVDb250YWluZXIpO1xuXG4gIC8vIEZJU0hcbiAgY29uc3QgZmlzaENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZpc2hUZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZmlzaFByaWNlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZmlzaFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb25zdCBmaXNoRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgZmlzaFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cbiAgY29uc3QgZmlzaEltZyA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBmaXNoUHJpY2VJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgZmlzaEltZy5zcmMgPSBmaXNoO1xuICBmaXNoUHJpY2VJbWcuc3JjID0gZW1lcmFsZDtcblxuICBmaXNoVGl0bGUudGV4dENvbnRlbnQgPSBcIkZpc2hcIjtcbiAgZmlzaERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJBIGRlbGljb3VzIHJvYXN0IGZpc2hcIjtcbiAgZmlzaFByaWNlLnRleHRDb250ZW50ID0gXCI3XCI7XG5cbiAgZmlzaEltZy5jbGFzc0xpc3QuYWRkKFwiZm9vZC1pbWdcIik7XG4gIGZpc2hDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvb2RcIik7XG4gIGZpc2hUZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0XCIpO1xuICBmaXNoUHJpY2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuXG4gIGZpc2hUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZpc2hUaXRsZSk7XG4gIGZpc2hUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZpc2hEZXNjcmlwdGlvbik7XG4gIGZpc2hUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZpc2hQcmljZUNvbnRhaW5lcik7XG5cbiAgZmlzaFByaWNlQ29udGFpbmVyLmFwcGVuZENoaWxkKGZpc2hQcmljZSk7XG4gIGZpc2hQcmljZUNvbnRhaW5lci5hcHBlbmRDaGlsZChmaXNoUHJpY2VJbWcpO1xuXG4gIGZpc2hDb250YWluZXIuYXBwZW5kQ2hpbGQoZmlzaEltZyk7XG4gIGZpc2hDb250YWluZXIuYXBwZW5kQ2hpbGQoZmlzaFRleHRDb250YWluZXIpO1xuICBmb29kQ29udGFpbmVyLmFwcGVuZENoaWxkKGZpc2hDb250YWluZXIpO1xuXG4gIC8vIE1FTE9OXG4gIGNvbnN0IG1lbG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbWVsb25UZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbWVsb25QcmljZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG1lbG9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNvbnN0IG1lbG9uRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgbWVsb25QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gIGNvbnN0IG1lbG9uSW1nID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IG1lbG9uUHJpY2VJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgbWVsb25JbWcuc3JjID0gbWVsb247XG4gIG1lbG9uUHJpY2VJbWcuc3JjID0gZW1lcmFsZDtcblxuICBtZWxvblRpdGxlLnRleHRDb250ZW50ID0gXCJNZWxvblwiO1xuICBtZWxvbkRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJBIGJpZyBkZWxpY2lvdXMgc2xpY2Ugb2YgbWVsb25cIjtcbiAgbWVsb25QcmljZS50ZXh0Q29udGVudCA9IFwiM1wiO1xuXG4gIG1lbG9uSW1nLmNsYXNzTGlzdC5hZGQoXCJmb29kLWltZ1wiKTtcbiAgbWVsb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvb2RcIik7XG4gIG1lbG9uVGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGV4dFwiKTtcbiAgbWVsb25QcmljZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG5cbiAgbWVsb25UZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbG9uVGl0bGUpO1xuICBtZWxvblRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQobWVsb25EZXNjcmlwdGlvbik7XG4gIG1lbG9uVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChtZWxvblByaWNlQ29udGFpbmVyKTtcblxuICBtZWxvblByaWNlQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbG9uUHJpY2UpO1xuICBtZWxvblByaWNlQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbG9uUHJpY2VJbWcpO1xuXG4gIG1lbG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbG9uSW1nKTtcbiAgbWVsb25Db250YWluZXIuYXBwZW5kQ2hpbGQobWVsb25UZXh0Q29udGFpbmVyKTtcbiAgZm9vZENvbnRhaW5lci5hcHBlbmRDaGlsZChtZWxvbkNvbnRhaW5lcik7XG5cbiAgLy8gUElFXG4gIGNvbnN0IHBpZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHBpZVRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwaWVQcmljZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHBpZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb25zdCBwaWVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBwaWVQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gIGNvbnN0IHBpZUltZyA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBwaWVQcmljZUltZyA9IG5ldyBJbWFnZSgpO1xuICBwaWVJbWcuc3JjID0gcGllO1xuICBwaWVQcmljZUltZy5zcmMgPSBlbWVyYWxkO1xuXG4gIHBpZVRpdGxlLnRleHRDb250ZW50ID0gXCJQaWVcIjtcbiAgcGllRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIkEgcGllIHRoYXQgdGFzdGVzIGxpa2UgeW91ciBtb20nc1wiO1xuICBwaWVQcmljZS50ZXh0Q29udGVudCA9IFwiOFwiO1xuXG4gIHBpZUltZy5jbGFzc0xpc3QuYWRkKFwiZm9vZC1pbWdcIik7XG4gIHBpZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9vZFwiKTtcbiAgcGllVGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGV4dFwiKTtcbiAgcGllUHJpY2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuXG4gIHBpZVRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQocGllVGl0bGUpO1xuICBwaWVUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHBpZURlc2NyaXB0aW9uKTtcbiAgcGllVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChwaWVQcmljZUNvbnRhaW5lcik7XG5cbiAgcGllUHJpY2VDb250YWluZXIuYXBwZW5kQ2hpbGQocGllUHJpY2UpO1xuICBwaWVQcmljZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwaWVQcmljZUltZyk7XG5cbiAgcGllQ29udGFpbmVyLmFwcGVuZENoaWxkKHBpZUltZyk7XG4gIHBpZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwaWVUZXh0Q29udGFpbmVyKTtcbiAgZm9vZENvbnRhaW5lci5hcHBlbmRDaGlsZChwaWVDb250YWluZXIpO1xuXG4gIC8vIFNPVVBcbiAgY29uc3Qgc291cENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHNvdXBUZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc291cFByaWNlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc291cFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb25zdCBzb3VwRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3Qgc291cFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cbiAgY29uc3Qgc291cEltZyA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBzb3VwUHJpY2VJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgc291cEltZy5zcmMgPSBzb3VwO1xuICBzb3VwUHJpY2VJbWcuc3JjID0gZW1lcmFsZDtcblxuICBzb3VwVGl0bGUudGV4dENvbnRlbnQgPSBcIlNvdXBcIjtcbiAgc291cERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJBIGhvdCBzb3VwIG1hZGUgZnJvbSBtdXNocm9vbXNcIjtcbiAgc291cFByaWNlLnRleHRDb250ZW50ID0gXCI1XCI7XG5cbiAgc291cEltZy5jbGFzc0xpc3QuYWRkKFwiZm9vZC1pbWdcIik7XG4gIHNvdXBDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvb2RcIik7XG4gIHNvdXBUZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0XCIpO1xuICBzb3VwUHJpY2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuXG4gIHNvdXBUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNvdXBUaXRsZSk7XG4gIHNvdXBUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNvdXBEZXNjcmlwdGlvbik7XG4gIHNvdXBUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNvdXBQcmljZUNvbnRhaW5lcik7XG5cbiAgc291cFByaWNlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNvdXBQcmljZSk7XG4gIHNvdXBQcmljZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzb3VwUHJpY2VJbWcpO1xuXG4gIHNvdXBDb250YWluZXIuYXBwZW5kQ2hpbGQoc291cEltZyk7XG4gIHNvdXBDb250YWluZXIuYXBwZW5kQ2hpbGQoc291cFRleHRDb250YWluZXIpO1xuICBmb29kQ29udGFpbmVyLmFwcGVuZENoaWxkKHNvdXBDb250YWluZXIpO1xuXG4gIC8vIFNURUFLXG4gIGNvbnN0IHN0ZWFrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc3RlYWtUZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc3RlYWtQcmljZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHN0ZWFrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNvbnN0IHN0ZWFrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3Qgc3RlYWtQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gIGNvbnN0IHN0ZWFrSW1nID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IHN0ZWFrUHJpY2VJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgc3RlYWtJbWcuc3JjID0gc3RlYWs7XG4gIHN0ZWFrUHJpY2VJbWcuc3JjID0gZW1lcmFsZDtcblxuICBzdGVha1RpdGxlLnRleHRDb250ZW50ID0gXCJTdGVha1wiO1xuICBzdGVha0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJBIGRlbGljaW91cyBtZWRpdW0tcmFyZSBzdGVha1wiO1xuICBzdGVha1ByaWNlLnRleHRDb250ZW50ID0gXCIxMlwiO1xuXG4gIHN0ZWFrSW1nLmNsYXNzTGlzdC5hZGQoXCJmb29kLWltZ1wiKTtcbiAgc3RlYWtDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvb2RcIik7XG4gIHN0ZWFrVGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGV4dFwiKTtcbiAgc3RlYWtQcmljZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG5cbiAgc3RlYWtUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHN0ZWFrVGl0bGUpO1xuICBzdGVha1RleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RlYWtEZXNjcmlwdGlvbik7XG4gIHN0ZWFrVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChzdGVha1ByaWNlQ29udGFpbmVyKTtcblxuICBzdGVha1ByaWNlQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0ZWFrUHJpY2UpO1xuICBzdGVha1ByaWNlQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0ZWFrUHJpY2VJbWcpO1xuXG4gIHN0ZWFrQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0ZWFrSW1nKTtcbiAgc3RlYWtDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RlYWtUZXh0Q29udGFpbmVyKTtcbiAgZm9vZENvbnRhaW5lci5hcHBlbmRDaGlsZChzdGVha0NvbnRhaW5lcik7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChmb29kQ29udGFpbmVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnU7XG4iLCJpbXBvcnQgXCIuLi9zdHlsZXMvaG9tZS5jc3NcIjtcbmltcG9ydCBtZW51SWNvbiBmcm9tIFwiLi4vaW1hZ2VzL2dvbGRlbkFwcGxlLmdpZlwiO1xuXG4vLyBDcmVhdGVzIHRoZSBjb250YWluZXIgZm9yIG5hdmlnYXRpbmcgdG8gbWVudVxuZnVuY3Rpb24gbG9hZE1lbnVJY29uKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xuXG4gIG15SWNvbi5zcmMgPSBtZW51SWNvbjtcbiAgcGFyYS50ZXh0Q29udGVudCA9IFwiTUVOVVwiO1xuXG4gIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtY29udGFpbmVyXCIpO1xuXG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQocGFyYSk7XG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobXlJY29uKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudUljb247XG4iLCJjb25zdCByZXNldCA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgY29udGVudC5zdHlsZSA9IFwiXCI7XG5cbiAgbGV0IGxhc3RDaGlsZCA9IGNvbnRlbnQubGFzdEVsZW1lbnRDaGlsZDtcbiAgLy8gUmVtb3ZlIGFsbCBjaGlsZHJlbiBleHBlY3QgdGhlIGZpcnN0IHR3byhoZWFkZXIgYW5kIC5tZW51LWNvbnRhaW5lcilcbiAgd2hpbGUgKGxhc3RDaGlsZCAhPSBjb250ZW50LmNoaWxkcmVuWzFdKSB7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChsYXN0Q2hpbGQpO1xuICAgIGxhc3RDaGlsZCA9IGNvbnRlbnQubGFzdEVsZW1lbnRDaGlsZDtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVzZXQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgXCIuL3N0eWxlcy9jb21tb24uY3NzXCI7XG5cbmltcG9ydCBob21lIGZyb20gXCIuL21vZHVsZXMvaG9tZS5qc1wiO1xuaW1wb3J0IG1lbnUgZnJvbSBcIi4vbW9kdWxlcy9tZW51LmpzXCI7XG5pbXBvcnQgYWJvdXQgZnJvbSBcIi4vbW9kdWxlcy9hYm91dC5qc1wiO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSBcIi4vbW9kdWxlcy9jb250YWN0LmpzXCI7XG5pbXBvcnQgcmVzZXQgZnJvbSBcIi4vbW9kdWxlcy9yZXNldC5qc1wiO1xuaW1wb3J0IGhlYWRlciBmcm9tIFwiLi9tb2R1bGVzL2hlYWRlci5qc1wiO1xuaW1wb3J0IG1lbnVJY29uIGZyb20gXCIuL21vZHVsZXMvbWVudUljb24uanNcIjtcblxuLy8gSW5pdGlhbCBwYWdlIGxvYWRcbmhlYWRlcigpO1xubWVudUljb24oKTtcblxuY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9nby1saW5rXCIpO1xuY29uc3QgYWJvdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFib3V0LWxpbmtcIik7XG5jb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0LWxpbmtcIik7XG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWNvbnRhaW5lclwiKTtcblxuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICByZXNldCgpO1xuICBob21lKCk7XG59KTtcblxubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICByZXNldCgpO1xuICBtZW51KCk7XG4gIGNvbnNvbGUubG9nKFwiZXZlbnQgdHJpZ2dlcmVkXCIpO1xufSk7XG5cbmFib3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHJlc2V0KCk7XG4gIGFib3V0KCk7XG59KTtcblxuY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICByZXNldCgpO1xuICBjb250YWN0KCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
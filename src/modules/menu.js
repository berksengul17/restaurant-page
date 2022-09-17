import "../styles/menu.css";

import apple from "../images/apple.png";
import cake from "../images/cake.png";
import carrot from "../images/carrot.png";
import chicken from "../images/chicken.png";
import cookie from "../images/cookie.png";
import fish from "../images/fish.png";
import melon from "../images/melon.png";
import pie from "../images/pie.png";
import soup from "../images/soup.png";
import steak from "../images/steak.png";
import emerald from "../images/emerald.png";

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
  appleImg.src = apple;
  applePriceImg.src = emerald;

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
  cakeImg.src = cake;
  cakePriceImg.src = emerald;

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
  carrotImg.src = carrot;
  carrotPriceImg.src = emerald;

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
  chickenImg.src = chicken;
  chickenPriceImg.src = emerald;

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
  cookieImg.src = cookie;
  cookiePriceImg.src = emerald;

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
  fishImg.src = fish;
  fishPriceImg.src = emerald;

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
  melonImg.src = melon;
  melonPriceImg.src = emerald;

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
  pieImg.src = pie;
  piePriceImg.src = emerald;

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
  soupImg.src = soup;
  soupPriceImg.src = emerald;

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
  steakImg.src = steak;
  steakPriceImg.src = emerald;

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

export default loadMenu;

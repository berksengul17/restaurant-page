import "../style.css";
import logo from "../images/logo.png";
import menuIcon from "../images/goldenApple.gif";

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

function createLink(text, href) {
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

function createMenuContainer() {
  const container = document.createElement("div");
  const para = document.createElement("p");
  const myIcon = new Image();

  myIcon.src = menuIcon;
  para.textContent = "MENU";

  container.classList.add("menu-container");

  container.appendChild(para);
  container.appendChild(myIcon);

  return container;
}

function loadPage() {
  const content = document.querySelector("#content");

  // Header elements
  const header = document.createElement("header");
  const mainMenuLink = createLink("", "#");
  const checkBox = createCheckBox("nav-toggle", "nav-toggle");
  const label = createLabel("nav-toggle", "nav-toggle-label");

  // Logo image
  const myLogo = new Image();
  myLogo.src = logo;

  mainMenuLink.classList.add("logo-link");
  mainMenuLink.appendChild(myLogo);

  // Menu Icon
  const menuContainer = createMenuContainer();

  // Nav
  const nav = document.createElement("nav");
  const uList = createUList();
  nav.appendChild(uList);

  // Header children
  header.appendChild(mainMenuLink);
  header.appendChild(checkBox);
  header.append(label);
  header.appendChild(nav);

  // Content children
  content.appendChild(header);
  content.appendChild(menuContainer);
}

export default loadPage;

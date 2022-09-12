import "../styles/header.css";
import logo from "../images/logo.png";

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
  myLogo.src = logo;

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

export default loadHeader;

import "../styles/menu.css";

function loadMenu() {
  console.log("menu");
  const content = document.querySelector("#content");
  const para = document.createElement("p");
  para.classList.add("menu-p");
  para.textContent = "FIOSFSDJKMOFISDIGFMJSDOIFGSDOFOIDSFIODSFOISDJ";
  content.appendChild(para);
}

export default loadMenu;

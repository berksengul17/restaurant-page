import "../styles/contact.css";

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

export default loadContact;

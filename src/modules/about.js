import "../styles/about.css";

function loadAbout() {
  const content = document.querySelector("#content");

  // Hide the menu icon which is at the bottom right
  const menuContainer = document.querySelector(".menu-container");
  menuContainer.style = "visibility:hidden";

  const aboutContainer = document.createElement("div");
  const title = document.createElement("h2");
  const about = document.createElement("p");

  aboutContainer.classList.add("about-container");
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

export default loadAbout;

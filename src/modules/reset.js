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

export default reset;

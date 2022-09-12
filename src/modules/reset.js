const reset = () => {
  const content = document.querySelector("#content");
  content.style = "";

  let lastChild = content.lastElementChild;
  // While the last child is not the header remove the child
  while (lastChild != content.children[0]) {
    content.removeChild(lastChild);
    lastChild = content.lastElementChild;
  }
};

export default reset;

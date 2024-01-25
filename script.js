const mainContainer = document.getElementsByClassName("main-container")[0];
const socialIcons = document.getElementsByClassName("social-icons")[0];

function repositionThis() {
  const socialIconsWidth = socialIcons.offsetWidth; //The element that you want to reposition

  let mainContainerMargin = // The parent element of the element you want to reposition
    mainContainer.currentStyle ||
    window.getComputedStyle(mainContainer).marginLeft;
  // Depends on where you want the element to be relatively fixed, can be right, bottom, left, top. And must also match with the css property below:

  socialIcons.style.setProperty(
    "left", // CSS property left, right, top, bottom. Depends on where you want the element to be relatively fixed
    parseInt(mainContainerMargin) - socialIconsWidth + "px"
  );
}

window.addEventListener("resize" || "reload", function () {
  // call the function everytime the browser resizes
  repositionThis();
});

repositionThis(); // call the function on first page load



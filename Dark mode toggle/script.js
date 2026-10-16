const clickEl = document.querySelector(".label");

let toggleOn = false;
clickEl.addEventListener("click", () => {
  changeColor();
});

function changeColor() {
  let bodyEl = document.querySelector("body");
  toggleOn = !toggleOn;
  if (toggleOn) {
    bodyEl.style.backgroundColor = "#000";
  } else {
    bodyEl.style.backgroundColor = "#fff";
  }
}

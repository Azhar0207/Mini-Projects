const clickEl = document.querySelector(".input");
let bodyEl = document.querySelector("body");

clickEl.checked = false;

clickEl.addEventListener("click", () => {
  changeColor();
});

changeColor();

function changeColor() {
  if (clickEl.checked) {
    bodyEl.style.backgroundColor = "#000";
  } else {
    bodyEl.style.backgroundColor = "#fff";
  }
}

const nextEL = document.querySelector(".next");
const imageContainerEl = document.querySelector(".image-container");
const imgEl = document.querySelectorAll("img");

const prevEl = document.querySelector(".prev");

let currentImg = 1;

let timeout;

nextEL.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeout);
  updateImg();
});

prevEl.addEventListener("click", () => {
  currentImg--;
  clearTimeout(timeout);
  updateImg();
});

updateImg();

function updateImg() {
  if (currentImg > imgEl.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgEl.length;
  }
  imageContainerEl.style.transform = `translate(-${(currentImg - 1) * 1280}px)`;

  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3000);
  
}

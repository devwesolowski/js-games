const infoContainer = document.querySelector(".info-bar");
const clickCount = document.querySelector(".click-count");

let clicks = 0;

document.addEventListener("DOMContentLoaded", () => {
  clickCount.innerText = clicks;

  document.querySelector(".clicky").addEventListener("click", (e) => {
    console.log(clicks);
    addClick();
  });
});

function addClick() {
  clicks += 1;
  clickCount.innerText = clicks;
}

function renderClicks() {}

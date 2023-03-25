const infoContainer = document.querySelector(".info-bar");
const clickCount = document.querySelector(".click-count");
const clickShop = document.querySelector(".shop-container");
const clickProduct = document.querySelector(".product");

let clicks = 0;
let clicksPerSecond = 0;

document.addEventListener("DOMContentLoaded", () => {
  clickCount.innerText = Math.floor(clicks);

  document.querySelector(".clicky").addEventListener("click", (e) => {
    console.log(clicks);
    addClick();
  });

  document.querySelector(".clicky").addEventListener("", (e) => {
    // todo unlock shop button at value of clicks?
  });
});

function addClick(clickAmount = 1) {
  clicks += clickAmount;
  clickCount.innerText = Math.floor(clicks);
}

// Define the function you want to call
function openShop(id) {
  const shopItem = document.getElementById(`item${id}`);
  shopItem.classList.remove("locked");
  shopItem.classList.add("unlocked");
  console.log(shopItem);
  console.log(`Reached ${clicks} Clicks`);
}

// Incremental Item Logic
//
//
//
// Watcher function to check the value of clicks
function watchVariable() {
  console.log(`clicks: ${clicks}`);
  switch (true) {
    case clicks >= 2000000:
      if (document.getElementById("item3").classList.contains("locked")) {
        openShop(6);
      }
    case clicks >= 25000:
      if (document.getElementById("item3").classList.contains("locked")) {
        openShop(5);
      }
    case clicks >= 5000:
      if (document.getElementById("item3").classList.contains("locked")) {
        openShop(4);
      }
    case clicks >= 1000:
      if (document.getElementById("item3").classList.contains("locked")) {
        openShop(3);
      }
    case clicks >= 150:
      if (document.getElementById("item2").classList.contains("locked")) {
        openShop(2);
      }
      break;
    case clicks >= 15:
      if (document.getElementById("item1").classList.contains("locked")) {
        openShop(1);
      }
      break;
  }
}

// Call the watcher function at regular intervals using setInterval
setInterval(watchVariable, 500); // Check every second

let incrementalId; // Stores the clicks per second incremental ID here
let clickWatcherId; // Stores the watcher for clicks to unlock items

//starts the autoclicks based off cps
function startIncrement(cps) {
  console.log(`hit`);
  incrementalId = setInterval(() => {
    addClick(cps);
  }, 1000); // Increment every second
}

//stops the interval depending on which needed
function stopIncrement(intervalId) {
  clearInterval(intervalId);
}

// Starts incrementing the clicks per second
startIncrement(0.1);

//debug
function setClicks(newClicks) {
  clicks = newClicks;
}

function unlockShops() {
  for (let i = 1; i < 7; i++) {
    openShop(i);
  }
}

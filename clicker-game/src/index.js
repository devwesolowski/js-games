const infoContainer = document.querySelector(".info-bar");
const clickCount = document.querySelector(".click-count");
const clickShop = document.querySelector(".shop-container");
const clickProduct = document.querySelector(".product");
const products = document.querySelectorAll(".product");

const item0 = document.getElementById("item0").classList;
const item1 = document.getElementById("item1").classList;
const item2 = document.getElementById("item2").classList;
const item3 = document.getElementById("item3").classList;
const item4 = document.getElementById("item4").classList;
const item5 = document.getElementById("item5").classList;

const totalItems = [0, 0, 0, 0, 0, 0];
const itemCosts = [15, 50, 1000, 5000, 25000, 2000000];

let clicks = 0;
let clicksPerSecond = 0;

document.addEventListener("DOMContentLoaded", () => {
  renderClicks();

  document.querySelector(".clicky").addEventListener("click", (e) => {
    addClick();
    console.log(clicks);
  });
});

// Loop through each product and add a click event listener
products.forEach((product) => {
  product.addEventListener("click", function () {
    // Check if the product has the "enabled" class
    if (this.classList.contains("enabled")) {
      const id = this.id.match(/\d+/)[0];
      buyItem(id);
    }
  });
});

function renderClicks() {
  clickCount.innerText = Math.floor(clicks);
}

function addClick(clickAmount = 1) {
  clicks += clickAmount;
  renderClicks();
}

function removeClick(clickAmount) {
  clicks -= clickAmount;
  renderClicks();
}

// Define the function you want to call
function openShop(id) {
  const shopItem = document.getElementById(`item${id}`);
  shopItem.classList.remove("locked");
  shopItem.classList.add("unlocked");
  console.log(`Opened shop ${id}`);
}

// Incremental Item Logic
//
// Watcher function to check variables on interval
function watchVariable() {
  console.log(`clicks: ${clicks}`);
  checkShopStatus();
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
// startIncrement(0.1);

//Function hecks value of clicks to unlock shop items
function checkShopStatus() {
  switch (true) {
    case clicks >= 2000000:
      if (document.getElementById("item5").classList.contains("locked")) {
        openShop(5);
      }
      enableItem(5);
    case clicks >= 25000:
      if (document.getElementById("item4").classList.contains("locked")) {
        openShop(4);
      }
      enableItem(4);
    case clicks >= 5000:
      if (document.getElementById("item3").classList.contains("locked")) {
        openShop(3);
      }
      enableItem(3);
    case clicks >= 1000:
      if (document.getElementById("item2").classList.contains("locked")) {
        openShop(2);
      }
      enableItem(2);
    case clicks >= 150:
      if (document.getElementById("item1").classList.contains("locked")) {
        openShop(1);
      }
      enableItem(1);
    case clicks >= 15:
      enableItem(0);
      break;
    default:
      disableItem(0, 1, 2, 3, 4, 5);
      break;
  }
}

function disableItem(...ids) {
  ids.forEach((id) => {
    const tempId = document.getElementById(`item${id}`);
    if (tempId) {
      if (tempId.classList.contains("enabled")) {
        tempId.classList.remove("enabled");
        tempId.classList.add("disabled");
      }
    }
  });
}

function enableItem(...ids) {
  console.log(`ids passed in: ${ids}`);
  ids.forEach((id) => {
    const tempId = document.getElementById(`item${id}`);
    if (tempId) {
      if (tempId.classList.contains("disabled")) {
        tempId.classList.remove("disabled");
        tempId.classList.add("enabled");
      }
    }
  });
}

function buyItem(id) {
  const cost = itemCosts[id];
  console.log(`Buy Item Triggerd ID: ${id} and cost ${cost}`);
  if (cost <= clicks) {
    totalItems[id] += 1;
    removeClick(cost);
    console.log(`BOUGHT!!!`);
  } else {
    console.log(`BUG: Item Clicked But Not Enough Cash`);
  }
}

//debug functions
function setClicks(newClicks) {
  clicks = newClicks;
  console.log(`Set Total Clicks To: ${newClicks}`);
}

function unlockShops() {
  for (let i = 1; i < 7; i++) {
    openShop(i);
  }
  console.log(`Unlocked All Current Shops`);
}

function getItems() {
  getItemCounts();
  getItemCosts();
}

function getItemCosts() {
  console.log(`Item Costs: ${itemCosts}`);
}

function getItemCounts() {
  console.log(`Item Count: ${totalItems}`);
}

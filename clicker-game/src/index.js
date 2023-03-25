const infoContainer = document.querySelector(".info-bar");
const clickCount = document.querySelector(".click-count");

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
function openShop(clicks) {
  switch (clicks) {
    case 50:
  }

  console.log(`Reached ${clicks} Clicks`);
}

// Incremental Item Logic
//
//
//
// Watcher function to check the value of clicks
function watchVariable() {
  if (clicks >= 50) {
    //when reaching 50 clicks, unlock shop item
    openShop(50);
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

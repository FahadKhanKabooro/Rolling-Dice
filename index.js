const buttonEl = document.getElementById("rolling-dice");
const diceEl = document.getElementById("dice");
const diceHistory = document.getElementById("dice-history");

let rollHistory = [];

function rollDice() {
  const result = Math.floor(Math.random() * 6) + 1;
  const diceFace = getDiceface(result);
  diceEl.innerHTML = diceFace;
  rollHistory.push(result);
  diceRecord();
}
function diceRecord() {
  diceHistory.innerHTML = "";
  for (let i = 0; i < rollHistory.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceface(
      rollHistory[i]
    )}</span>`;
    diceHistory.appendChild(listItem);
  }
}

function getDiceface(result) {
  switch (result) {
    case 1:
      return "&#9856;";
    case 2:
      return "&#9857;";
    case 3:
      return "&#9858;";
    case 4:
      return "&#9859;";
    case 5:
      return "&#9860;";
    case 6:
      return "&#9861;";
    default:
      return "";
  }
}

buttonEl.addEventListener("click", () => {
  diceEl.classList.add("roll-animation");
  setTimeout(() => {
    diceEl.classList.remove("roll-animation");
    rollDice();
  }, 1000);
});

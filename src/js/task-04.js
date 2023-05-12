const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");
const value = document.querySelector("#value");
let counterValue = 0;

const handleAction = (operation) => {
    counterValue += operation;
    console.log(counterValue);
    value.textContent = counterValue;

}

decrementBtn.addEventListener("click", () => handleAction(-1));
incrementBtn.addEventListener("click", () => handleAction(1));


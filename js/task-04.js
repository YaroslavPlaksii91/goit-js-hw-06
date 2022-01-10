let counterValue = 0;

const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);
const valueEl = document.querySelector("#value");

decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});

incrementButton.addEventListener("click", () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});

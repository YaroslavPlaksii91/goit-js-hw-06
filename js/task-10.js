function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesRef = document.querySelector("#boxes");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const inputRef = document.querySelector("#controls > input");

btnCreate.addEventListener("click", () => {
  inputRef.addEventListener("input", createBoxes(inputRef.value));
});

btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  destroyBoxes();

  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement("div");

    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${20 + i * 10}px`;
    box.style.height = `${20 + i * 10}px`;

    boxesRef.append(box);
  }

  return boxesRef;
}

function destroyBoxes() {
  return (boxesRef.innerHTML = "");
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsRef = document.querySelector("#controls");
const boxesRef = document.querySelector("#boxes");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const inputRef = controlsRef.firstElementChild;

btnCreate.addEventListener("click", () => {
  inputRef.addEventListener("input", createBoxes(inputRef.value));
});

btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const box = document.createElement("div");

  box.style.backgroundColor = getRandomHexColor();
  box.style.width = "30px";
  box.style.height = "30px";

  boxesRef.append(box);

  for (let i = 2; i <= amount; i += 1) {
    const box = document.createElement("div");

    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${20 + i * 10}px`;
    box.style.height = `${20 + i * 10}px`;

    box.style.backgroundColor = getRandomHexColor();

    boxesRef.append(box);
  }

  return boxesRef;
}

function destroyBoxes() {
  return (boxesRef.innerHTML = "");
}

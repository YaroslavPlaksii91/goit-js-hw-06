function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonRef = document.querySelector(".change-color");
const colorNameRef = document.querySelector(".color");

buttonRef.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  colorNameRef.textContent = getRandomHexColor();
});

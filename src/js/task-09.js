function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const changeColorBtn = document.querySelector(".change-color");

changeColorBtn.addEventListener("click", () =>{
  const newColor = getRandomHexColor();
  const ColorText = document.querySelector(".color");
  const bodyElement = document.querySelector("body");
  bodyElement.style.backgroundColor = newColor;
  ColorText.textContent = newColor;
  console.log(newColor);
})
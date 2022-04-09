const btnAdd = document.querySelector(".add");
const btnMinus = document.querySelector(".minus");
const btnColor = document.querySelector(".color");
const text = document.querySelector("p");
let fontSize = 20;

const incrase = () => {
  fontSize += 5;
  text.style.fontSize = fontSize + "px";
};

const decrease = () => {
  if (fontSize <= 15) return;
  fontSize -= 5;
  text.style.fontSize = fontSize + "px";
};

const randomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  text.style.color = `rgb(${r},${g},${b})`;
};

btnAdd.addEventListener("click", incrase);
btnMinus.addEventListener("click", decrease);
btnColor.addEventListener("click", randomColor);

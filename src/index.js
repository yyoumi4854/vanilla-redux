const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;

const updateText = () => {
  number.innerText = count;
};

const hanleAdd = () => {
  count += 1;
  updateText();
};

const hanleMinus = () => {
  count -= 1;
  updateText();
};

add.addEventListener("click", hanleAdd);
minus.addEventListener("click", hanleMinus);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const span = document.querySelector('.color')

changeColorBtn.addEventListener('click', changecolor);

function changecolor(e) {
 e.preventDefault();

 const color = document.body.style.backgroundColor = getRandomHexColor();
 span.textContent = color;
}
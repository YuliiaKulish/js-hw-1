const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль
// по кліку на button.change-color і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const changeColorBtn = document.querySelector('.change-color');
const colorBox = document.querySelector('.color');
const body = document.querySelector('body');

const changeColorRandom = (event) => {
  body.style.backgroundColor = getRandomHexColor();
  colorBox.textContent = getRandomHexColor();
};

changeColorBtn.addEventListener('click', changeColorRandom);
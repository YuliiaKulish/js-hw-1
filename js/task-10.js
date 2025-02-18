const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити,
// після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

const createBoxes = (amount) => {
  amount = Number(input.value);
  let markup = '';

  for (let i = 1; i <= amount; i += 1) {
    markup += `<div style='background-color: ${getRandomHexColor()}; width: 30px; height: 30px'></div>`;
  }

  boxes.insertAdjacentHTML("beforeend", markup);

  [...boxes.children].forEach((element, index) => {
    element.style.width = `${30 + 10 * index}px`;
    element.style.height = `${30 + 10 * index}px`;
  });
};

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener('click', ()=> {
  boxes.innerHTML = '';
  input.value = '';
})
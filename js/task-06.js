// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const input = document.querySelector("#validation-input");

const handleInput = (event) => {
  const { value, dataset, classList } = event.target;
  const requiredLength = Number(dataset.length);

  const inputLength = value.length === requiredLength;
  const add = inputLength ? "valid" : "invalid";
  const remove = !inputLength ? "valid" : "invalid";

  changeClass(add, remove, classList);
};

const changeClass = (add, remove, element) => {
  element.add(add);
  element.remove(remove);
};

input.addEventListener("input", handleInput);

input.style.outline = 'none';
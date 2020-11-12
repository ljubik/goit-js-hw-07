// ## Завдання 8 - додаткове, виконувати не обов'язково
'use strict';

// Напиши скрипт створення і очищення колекції елементів. Користувач вводить
// кількість елементів в `input` і натискає кнопку `Створити`, після чого
// рендериться колекція. При натисканні на кнопку `Очистити`, колекція елементів
// очищається.

// Створи функцію `createBoxes(amount)`, яка приймає 1 параметр `amount` -
// число. Функція створює стільки `div`, скільки вказано в `amount` і додає їх
// в `div#boxes`.

// Кожен створений div:

// - Має випадковий rgb колір фону
// - Розміри найпершого div - 30px на 30px
// - Кожен наступний div після першого, повинен бути ширше і вище попереднього на
//   10px

// Створи функцію `destroyBoxes()`, яка очищає `div#boxes`.

var render = document.querySelector('[data-action="render"]');
var destroy = document.querySelector('[data-action="destroy"]');
var boxes = document.getElementById("boxes");
render.addEventListener("click", getAmount);
destroy.addEventListener("click", destroyBoxes);

function getAmount() {
  var amount = +document.querySelector("#controls input").value;
  createBoxes(amount);
}

function createBoxes(amount) {
  var basicSize = 30;
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < amount; i++) {
    var size = basicSize + i * 10;
    var div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
    fragment.appendChild(div);
  }
  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function random() {
  return Math.floor(Math.random() * 256);
}
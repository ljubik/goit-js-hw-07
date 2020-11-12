// ## Завдання 4
'use strict';
const btn = {
    add: document.querySelector("[data-action='increment']"),
    sub: document.querySelector("[data-action='decrement']"),
    span: document.querySelector("#value"),
  };
  
  let counterValue = 0;
  const increment = () => {
    counterValue += 1;
  
   btn.span.textContent = counterValue;
  };
  
  const decrement = () => {
    counterValue -= 1;
  
    btn.span.textContent = counterValue;
  };
  
  btn.sub.addEventListener("click", decrement);
  btn.add.addEventListener("click", increment);

// Лічильник складається зі спана і кнопок, які повинні збільшувати і зменшувати
// значення лічильника на `1`.

// - Створи змінну `counterValue` в якій буде зберігається поточне значення
//   лічильника.
// - Створи функції `increment` і `decrement` для збільшення і зменшення значення
//   лічильника.
// - Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу


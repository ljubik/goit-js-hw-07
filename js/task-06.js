// // ## Завдання 6
'use strict';

let inputVal = document.getElementById('validation-input');

let totalLenght = inputVal.getAttribute('data-length');

let intTotallenght = Number(totalLenght);

inputVal.addEventListener('blur', handleInput);

function handleInput(ev) {
  let userText = ev.target.value;
  return userText.length === intTotallenght
    ? inputVal.classList.add('valid')
    : inputVal.classList.add('invalid');
}


// ## Завдання 5
'use strict';

let nameInput = document.getElementById("name-input");
let nameOutput = document.getElementById("name-output");
// nameInput.addEventListener("change")

nameInput.oninput = function () {
    if (nameInput.value === '') {
       nameOutput.innerHTML = 'незнайомець';
    } else{
        nameOutput.innerHTML = nameInput.value;
    }
        if (nameInput.value === ' '){
            let space = '&nbsp;'
            nameOutput.innerHTML = nameInput.value
    }
}


// Напиши скрипт який, при наборі тексту в інпут `input#name-input` (подія
// input), підставляє його поточне значення в `span#name-output`. якщо інпут
// порожній, в спані повинен відображатися рядок `'незнайомець'`.

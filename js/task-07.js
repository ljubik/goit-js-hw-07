// ## Завдання 7
'use strict';

let fontControl = document.getElementById("font-size-control");

let textToGange = document.getElementById("text");

fontControl.oninput = function() {
    textToGange.style.fontSize = fontControl.value + "px";
};




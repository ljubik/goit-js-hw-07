// ## Завдання 2
'use strict';

const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
  ];

let listUl = document.getElementById("ingredients");

const ingredientsLi = ingredients.map(ingredient => {
  let items = document.createElement("li");
  items.textContent = ingredient;
  return items;
});

listUl.append(...ingredientsLi);

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

const ingredientsLi = ingredients.forEach(ingredient => {
  let items = document.createElement("li");
  items.innerHTML = ingredient;
  listUl.append(items);

});

// ## Завдання 1
'use strict';

const listUl = Array.from(
    document.querySelectorAll("ul#categories>li.item")
  );

console.log(`У списку ${listUl.length} категорії`);

const categoriesList = Array.from(
    document.querySelectorAll("ul#categories li.item ul")
  );

const listItems = document.querySelectorAll('.item');
Array.prototype.forEach.call(listItems, (element) => {
    const title = element.querySelector('h2').innerHTML;
    const itemsLength = element.querySelectorAll('li').length;
    console.log(`- Категорія: ${title} \n- Кількість елементів: ${itemsLength}`);
});

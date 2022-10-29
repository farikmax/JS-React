'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button'); // HTML collection
const circles = document.getElementsByClassName('circle'); // HTML collection
const hearts = document.querySelectorAll('.heart'); // NodeList
const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';
box.style.width = '500px';

box.style.cssText = 'background-color: purple; width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'green';

//------------------------------------------------------------
// for (let i = 0; i < hearts.length; i++) {
// 	hearts[i].style.backgroundColor = 'grey';
// }
//------------------------------------------------------------
// hearts.forEach((item) => {
// 	item.style.backgroundColor = 'grey';
// });
//------------------------------------------------------------

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');
//------------------------------------------------------------

div.classList.add('black');

document.body.append(div);
// wrapper.appendChild(div); // устаревший вариант записи

// document.querySelector('.wrapper').append(div); // запись без создания переменной
// wrapper.append(div); // вставляет элемент в конце блока
// wrapper.prepend(div); // вставляет элемент в начале блока

// hearts[1].before(div); // всьавляет элемент после заданым элементом
// hearts[0].after(div); // вставляет элемент перед заданого элемента

// wrapper.insertBefore(div, hearts[0]);

// circles[0].remove(); //удаляет элемент
// wrapper.removeChild(hearts[0]); // устаревший вариант записи

// hearts[0].replaceWith(circles[0]); // заменяет элемент hearts элементом circle
// wrapper.replaceChild(circles[0], hearts[0]); // устаревший вариант записи

div.innerHTML = '<h4>Hello World</h4>';

// div.textContent = 'Hello'; // Не работает с HTML структурой как в примере выше

//------------------------------------------------------------
// div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');
// div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>');
// div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');
// div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>');
//------------------------------------------------------------

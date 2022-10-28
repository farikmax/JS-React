'use strict';

const box = document.getElementById('box');
console.log(box);

const buttons = document.getElementsByTagName('button'); // HTML collection
console.log(buttons[0]);

const circles = document.getElementsByClassName('circle'); // HTML collection
console.log(circles);

const hearts = document.querySelectorAll('.heart'); // NodeList
console.log(hearts);

hearts.forEach((item) => {
	console.log(item);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);

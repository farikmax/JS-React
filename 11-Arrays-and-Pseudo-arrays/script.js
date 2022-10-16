'use strict';

const arr = [2, 13, 26, 6, 8];
console.log(arr.sort(compareNum));

function compareNum(a, b) {
	return a - b;
}

// arr.pop(); //удаляет последний элемент массива
// arr.push(10); //добавляет последний элемент массива

// console.log(arr);
// console.log(arr.length);

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

// for (let value of arr) {
// 	console.log(value);
// }

// arr.forEach(function (item, i, arr) {
// 	console.log(`${i}: ${item} внутри массива ${arr}`);
// });

const str = prompt('', '');
const products = str.split(', '); // получаем массив данных
products.sort();
console.log(products.join('; ')); // из массива формируем строку с данным раздилителем

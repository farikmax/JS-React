'use strict';

let a = 5;
let b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
	a: 5,
	b: 1,
};

// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
	let objCopy = {};

	let key;
	for (key in mainObj) {
		objCopy[key] = mainObj[key];
	}

	return objCopy;
}

const numbers = {
	a: 2,
	b: 5,
	c: {
		x: 7,
		y: 4,
	},
};

const newNumbers = copy(numbers);

newNumbers.a = 10;

console.log(numbers);
console.log(newNumbers);

const add = {
	d: 17,
	e: 20,
};

console.log(Object.assign(numbers, add));

const oldArr = [a, b, c];
const newArr = oldArr.slice(); // копия нового массива

// -------------------------------------------------------------------------

const video = ['youtube', 'vimeo', 'rutube'];
const blogs = ['wordpress', 'livejournal', 'blogger'];
const internet = [...video, ...blogs, 'facebook'];

console.log(internet);

function log(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
}

const num = [2, 5, 7];

log(...num);

// -------------------------------------------------------------------------

const array = ['a', 'b'];

const newAarr = [...array];

// -------------------------------------------------------------------------

const q = {
	one: 1,
	two: 2,
};

const newQ = { ...q };

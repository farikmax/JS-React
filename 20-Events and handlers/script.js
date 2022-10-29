const btn = document.querySelectorAll('button');
const overlay = document.querySelector('.overlay');

// btn.onclick = function () {
// 	alert('Click');
// };
//----------------------------------------------------------
// btn.addEventListener('click', () => {
// 	alert('Click');
// });
//----------------------------------------------------------
// btn.addEventListener('click', () => {
// 	alert('Second Click');
// });
//----------------------------------------------------------
// btn.addEventListener('mouseenter', (event) => {
// 	console.log(event);
// 	console.log('Hover mouse object');
// });
//----------------------------------------------------------
// let i = 0;
// const deleteElement = (e) => {
// 	console.log(e.target);
// 	i++;
// 	if (i === 1) {
// 		btn.removeEventListener('click', deleteElement);
// 	}
// };

// btn.addEventListener('click', deleteElement);

// const deleteElement = (e) => {
// 	console.log(e.target);
// 	console.log(e.type);
// };

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);
//----------------------------------------------------------
const link = document.querySelector('a');
link.addEventListener('click', (e) => {
	e.preventDefault();
});

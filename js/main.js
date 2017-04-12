// console.log(document.getElementsByClassName('input') );


// User clicked on the add button
// If there is any text inside field, add that text to the todo list



// var button = document.getElementsByClassName('button');

// var vfunction =  function () {
// 	var value = document.getElementById("input_field").value;
// 	if (value) {
// 		console.log ("There was a value")
// 	}
// }

var removeSVG = '<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg style="enable-background:new 0 0 22 22" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 22 22" version="1.1" y="0px" x="0px" xmlns:xlink="http://www.w3.org/1999/xlink"><path class="fill" d="m16.1 3.6h-1.9v-0.3c0-1.3-1-2.3-2.3-2.3h-1.7c-1.3 0-2.4 1-2.4 2.3v0.2h-1.9c-1.3 0-2.3 1-2.3 2.3v1.3c0 0.5 0.4 0.9 0.9 1v10.5c0 1.3 1 2.3 2.3 2.3h8.5c1.3 0 2.3-1 2.3-2.3v-10.4c0.5-0.1 0.9-0.5 0.9-1v-1.3c-0.1-1.3-1.1-2.3-2.4-2.3zm-7-0.3c0-0.6 0.5-1.1 1.1-1.1h1.7c0.6 0 1.1 0.5 1.1 1.1v0.2h-3.9v-0.2zm7.2 15.4c0 0.6-0.5 1.1-1.1 1.1h-8.5c-0.6 0-1.1-0.5-1.1-1.1v-10.5h10.6l0.1 10.5zm0.9-11.7h-12.4v-1.1c0-0.6 0.5-1.1 1.1-1.1h10.2c0.6 0 1.1 0.5 1.1 1.1v1.1z"/><path class="fill" d="m11 18c-0.4 0-0.6-0.3-0.6-0.6v-6.8c0-0.4 0.3-0.6 0.6-0.6s0.6 0.3 0.6 0.6v6.8c0 0.3-0.2 0.6-0.6 0.6z"/><path class="fill" d="m8 18c-0.4 0-0.6-0.3-0.6-0.6v-6.8c0-0.4 0.3-0.6 0.6-0.6 0.4 0 0.6 0.3 0.6 0.6v6.8c0.1 0.3-0.2 0.6-0.6 0.6z"/><path class="fill" d="m14 18c-0.4 0-0.6-0.3-0.6-0.6v-6.8c0-0.4 0.3-0.6 0.6-0.6 0.4 0 0.6 0.3 0.6 0.6v6.8c0 0.3-0.3 0.6-0.6 0.6z"/></svg>';
var completeSVG = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"> <rect y="0" class="nofill" width="22" height="22" /> <g> <path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8 c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z" /> </g> </svg>';

document.getElementById('input__btn').addEventListener('click', function() {
	var value = document.getElementById('input_field').value;
	if (value)	addItemTodo(value);
	// console.log(value);
});

// button.addEventListener('click',vfunction, false);

function addItemTodo (text) {

	var list = document.getElementById('todo');

	var item = document.createElement('li');
	item.innerText = text;

	var todo__btn = document.createElement('div');
	todo__btn.classList.add('todo__btn');

	var todo__btndel = document.createElement('button');
	todo__btndel.classList.add('todo__btn--del');
	todo__btndel.innerHTML = removeSVG;

	var todo__btncomplete = document.createElement('button');
	todo__btncomplete.classList.add ('todo__btn--complete');
	todo__btncomplete.innerHTML = completeSVG;

	todo__btn.appendChild(todo__btndel);
	todo__btn.appendChild(todo__btncomplete);
	item.appendChild(todo__btn);

	list.appendChild(item);
}

var tomi = {
	name: 'Tomi Odusanya',
	age: 'pushing 30',
	address: 'Agbara'
}

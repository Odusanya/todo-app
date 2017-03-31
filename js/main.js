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

	var buttons = document.createElement('div');
	buttons.classList.add('buttons');

	var remove = document.createElement('button');
	remove.classList.add('remove');
	remove.innerHTML = removeSVG;

	var complete = document.createElement('button');
	complete.classList.add ('complete');
	complete.innerHTML = completeSVG;

	buttons.appendChild(remove);
	buttons.appendChild(complete);
	item.appendChild(buttons);

	list.appendChild(item);
}

var tomi = {
	name: 'Tomi Odusanya',
	age: 'pushing 30',
	address: 'Agbara'
}

tomi.name = 'TTT';

console.log(tomi.name);
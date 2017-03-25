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
	if (value) {
		console.log ('There is actually a value fam');
	} else {
		console.log ('No value fam');
	}
	// console.log(value);
});

// button.addEventListener('click',vfunction, false);


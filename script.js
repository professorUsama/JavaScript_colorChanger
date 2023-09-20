"use strict";


// get all buttons and store in a variable
const buttons =  document.querySelectorAll('.button');

// get the body
const body = document.querySelector('body');

// itrate buttons using forEach loop
buttons.forEach( (button) => {
	// use event listener to detect if the user click on the button
	button.addEventListener('click', (event) => {
		// store the current color when the user click on the specific button color
		const color = event.target.id;
		if(color === 'grey'){
			// change the body color
			body.style.backgroundColor = color;
		}
		else if(color === 'white'){
			body.style.backgroundColor = color;
		}
		else if(color === 'blue'){
			body.style.backgroundColor = color;
		}
		else if(color === 'yellow'){
			body.style.backgroundColor = color;
		}
	});
});
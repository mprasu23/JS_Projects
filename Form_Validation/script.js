const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('password2');

function checkRequired(inputArr) {
	inputArr.forEach(input => {
		console.log(input.id);
		if (input.value.trim() === '') {
			showError(input, `${getFieldName(input)} is required`);
		} else showSucess(input);
	});
}

function checkPasswordsMatch(input1, input2) {
	if (input1.value.trim() !== input2.value.trim()) {
		showError(input2, 'Passwords donot match');
	}
}
function getFieldName(input) {
	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener('submit', e => {
	e.preventDefault();
	checkRequired([username, email, password, confirmPassword]);
	checkPasswordsMatch(password, confirmPassword);
});

function showError(input, message) {
	const formControl = input.parentElement;
	formControl.className = 'form-control error';
	const small = formControl.querySelector('small');
	small.innerText = message;
}

function showSucess(input, message) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

let customMessages;

export function init(form, messages) {
	form.addEventListener('invalid', onInvalid, true);
	form.addEventListener('input', onInput);
	customMessages = messages;
}

function onInvalid(event) {
	const { target } = event;
	event.preventDefault();
	target.form.dataset.submitted = true;
	if (!target.form.noValidate) {
		displayMessage(target);
	}
}

function onInput(event) {
	const { form } = event.target;
	if (!form.noValidate && form.dataset.submitted) {
		form.checkValidity();
	}
}

function displayMessage(element) {
	const output = element.form.querySelector(`output.error[for="${element.id}"]`);
	const cause = getCause(element.validity);
	const message = customMessages?.[element.id]?.[cause];
	if (output) {
		output.textContent = message || element.validationMessage;
	}
}

function getCause(validity) {
	for (const key in validity) {
		if (validity[key] === true) {
			return key;
		}
	}
}

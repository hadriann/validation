export function init(form) {
  form.addEventListener("invalid", onInvalid, true);
  form.addEventListener("input", onInput);
  form.addEventListener("submit", onSubmit);
}

function onSubmit(event) {
  event.preventDefault();
  event.target.dataset.submitted = true;
}

function onInvalid(event) {
  if (!event.target.formNoValidate) {
    validate(event.target);
  }
}

function onInput(event) {
  const { target } = event;
  const { form } = target;
  if (!target.formNoValidate && form.dataset.submitted) {
    form.checkValidity();
  }
}

function validate(element) {
  const { validity } = element;
  console.log(validity);
  if (!validity.customError) {
    if (validity.valueMissing) {
      element.setCustomValidity("Please provide a value");
    } else if (validity.typeMismatch) {
      element.setCustomValidity("Please enter a valid value");
    } else if (validity.patternMismatch) {
      element.setCustomValidity("Please match the value format");
    } else if (validity.tooShort) {
      element.setCustomValidity("Please enter a longer value");
    } else if (validity.tooLong) {
      element.setCustomValidity("Please enter a shorter value");
    } else {
      element.setCustomValidity("");
    }
  }

  const output = element.form.querySelector(`output[for="${element.id}"]`);
  if (output) {
    output.className = "error";
    output.textContent = element.validationMessage;
    output.hidden = validity.valid;
  }
}

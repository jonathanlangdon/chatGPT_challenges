let HAS_ERRORS = false;

function checkForm() {
  const errorDiv = document.getElementById('formErrors');
  errorDiv.classList.remove('hide');
  hideAllErrors();
  HAS_ERRORS = false;
  checkName();
  checkEmail();
  checkPassword();
  checkConfirmPassword();
  if (HAS_ERRORS === false) errorDiv.classList.add('hide');
}

function checkName() {
  const nameId = 'fullName';
  const nameLength = document.getElementById(nameId).value.trim().length;
  if (nameLength === 0) addError(nameId, 'Missing full name.');
}

function checkEmail() {
  const emailId = 'email';
  const emailInput = document.getElementById(emailId).value;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
  if (!emailRegex.test(emailInput))
    addError(emailId, 'Invalid or missing email address.');
}

function checkPassword() {
  const passwdId = 'password';
  const passwdInput = document.getElementById(passwdId).value.trim();
  const hasValidLength = passwdInput.length >= 10 && passwdInput.length <= 20;
  const hasLowerCase = /[a-z]/.test(passwdInput);
  const hasUpperCase = /[A-Z]/.test(passwdInput);
  const hasDigit = /\d/.test(passwdInput);
  if (!hasValidLength)
    addError(passwdId, 'Password must be between 10 and 20 characters.');
  if (!hasLowerCase)
    addError(
      passwdId,
      'Password must contain at least one lowercase character.'
    );
  if (!hasUpperCase)
    addError(
      passwdId,
      'Password must contain at least one uppercase character.'
    );
  if (!hasDigit)
    addError(passwdId, 'Password must contain at least one digit.');
}

function checkConfirmPassword() {
  const passwdId = 'password';
  const passwdInput = document.getElementById(passwdId).value.trim();
  const confirmPassInput = document
    .getElementById('passwordConfirm')
    .value.trim();
  if (passwdInput !== confirmPassInput)
    addError(
      'passwordConfirm',
      "Password and confirmation password don't match."
    );
}

function addError(inputID, message) {
  const errorDiv = document.getElementById('formErrors');
  let ul = errorDiv.querySelector('ul');

  if (!ul) {
    ul = document.createElement('ul');
    errorDiv.appendChild(ul);
  }

  const li = document.createElement('li');
  li.innerText = message;
  ul.appendChild(li);
  document.getElementById(inputID).classList.add('error');
  HAS_ERRORS = true;
}

function hideAllErrors() {
  document.getElementById('formErrors').innerHTML = '';
  document
    .querySelectorAll('input')
    .forEach(input => input.classList.remove('error'));
}

document.getElementById('submit').addEventListener('click', function (event) {
  checkForm();

  event.preventDefault();
});

//Validate that the user age field is at least 15 and at most 120

let validColor = 'LightGreen';
let invalidColor = 'Orange';
let userAgeInput = document.getElementById('userAge');
let formWidget = document.getElementById('userForm');
let userAgeValid = false;

function userAgeCheck(event) {
  let ageBackground = userAgeInput.style.background;
  const ageInput = userAgeInput.value.trim();
  ageBackground = invalidColor;
  userAgeValid = ageInput >= 18 && ageInput <= 120;
  if (userAgeValid) ageBackground = validColor;
}

function formCheck(event) {
  if (!userAgeValid) {
    event.preventDefault();
  }
}

userAgeInput.addEventListener('input', userAgeCheck);
formWidget.addEventListener('submit', formCheck);

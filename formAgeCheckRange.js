// simple check on age range

function userAgeCheck(event) {
  userAgeInput.style.background = invalidColor;
  userAgeValid = false;
  const userAge = userAgeInput.value;

  if (userAge >= 15 && userAge <= 120) {
    userAgeInput.style.background = validColor;
    userAgeValid = true;
  }
}

//Display "Username is invalid" in the console log if the username does not meet the requirement

let form = document.getElementById('userForm');

function validateForm(event) {
  let phoneNumber = form.phoneNumber.value;
  let userName = form.userName.value;

  if (userName.length >= 15) {
    console.log('Username is invalid');
    event.preventDefault();
  }
}

form.addEventListener('submit', validateForm);

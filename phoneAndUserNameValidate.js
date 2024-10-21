//verify the phone number contains a number and the username is at least 2 characters long

let form = document.getElementById('userForm');

function validateForm(event) {
  let phoneNumber = form.phoneNumber.value;
  let userName = form.userName.value;

  if (isNaN(phoneNumber) || userName.trim().length < 2) {
    console.log('Input is invalid');
    event.preventDefault();
  }
}

form.addEventListener('submit', validateForm);

//Display "Invalid user id" in the console log if the user id is not a number

let form = document.getElementById('userForm');

function validateForm(event) {
  let userId = form.userId.value;

  if (isNaN(userId)) {
    console.log('Invalid user id');
    event.preventDefault();
  }
}

form.addEventListener('submit', validateForm);

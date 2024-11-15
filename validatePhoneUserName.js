// simple validation of phone and username

let form = document.getElementById('userForm');

function validateForm(event) {
  let phoneNumber = form.phoneNumber.value;
  let userName = form.userName.value;
  const validPhone =
    phoneNumber.trim().length > 0 && !isNaN(phoneNumber.trim());
  const validName = userName.trim().length < 15;

  if (!validPhone || !validName) {
    console.log('Input is invalid');
    event.preventDefault();
  }
}

form.addEventListener('submit', validateForm);

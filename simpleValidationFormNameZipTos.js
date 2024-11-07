// sets the input field's style.backgroundColor to Orange if the validation fails.

let tosForm = document.querySelector('#tosForm');
tosForm.addEventListener('submit', checkForm);

function checkForm(event) {
  tosForm.screenName.style.backgroundColor = 'LightGreen';
  tosForm.zip.style.backgroundColor = 'LightGreen';
  tosForm.tos.style.backgroundColor = 'LightGreen';

  if (tosForm.screenName.value.trim() === '') {
    tosForm.screenName.style.backgroundColor = 'Orange';
    event.preventDefault();
  }

  if (tosForm.zip.value.length !== 5) {
    tosForm.zip.style.backgroundColor = 'Orange';
    event.preventDefault();
  }

  if (tosForm.tos.value !== 'yes') {
    tosForm.tos.style.backgroundColor = 'Orange';
    event.preventDefault();
  }
}

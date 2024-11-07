// a very simple form validation

let tosForm = document.querySelector('#tosForm');
tosForm.addEventListener('submit', checkForm);

function checkForm(event) {
  tosForm.screenName.style.backgroundColor = 'LightGreen';
  tosForm.zip.style.backgroundColor = 'LightGreen';
  tosForm.tos.style.backgroundColor = 'LightGreen';

  // checks whether tosForm.screenName.value is empty.
  if (tosForm.screenName.value === '') {
    tosForm.screenName.style.backgroundColor = 'Orange';
    event.preventDefault();
  }

  // checks whether the length of tosForm.zip is not 5.
  if (tosForm.zip.value.length !== 5) {
    tosForm.zip.style.backgroundColor = 'Orange';
    event.preventDefault();
  }

  // checks whether tosForm.tos is not "yes".
  if (tosForm.tos.value.toLowerCase() !== 'yes') {
    tosForm.tos.style.backgroundColor = 'Orange';
    event.preventDefault();
  }
}

//putting event listeners on each input for immediate feedback
//

let screenNameValid = false;
let zipCodeValid = false;
let tosAgreeValid = false;

let myForm = document.querySelector('#tosForm');
myForm.addEventListener('submit', checkForm);

let screenNameWidget = document.querySelector('#screenName');
screenNameWidget.addEventListener('input', checkScreenName);

let zipCodeWidget = document.querySelector('#zip');
zipCodeWidget.addEventListener('input', checkZipCode);

const tosWidget = document.getElementById('tos');
tosWidget.addEventListener('input', checkTosAgree);

function checkTosAgree() {
  tosAgreeValid = tosWidget.value.trim() === 'yes';
  if (tosAgreeValid) {
    tosWidget.style.backgroundColor = 'initial';
  } else {
    tosWidget.style.backgroundColor = 'orange';
  }
}

function checkScreenName() {
  let screenName = screenNameWidget.value.trim();
  screenNameValid = screenName.length > 0;

  if (screenNameValid) {
    screenNameWidget.style.backgroundColor = 'initial';
  } else {
    screenNameWidget.style.backgroundColor = 'orange';
  }
}

function checkZipCode() {
  let regex = /^\d\d\d\d\d$/;
  let zip = zipCodeWidget.value.trim();
  zipCodeValid = zip.match(regex);

  if (zipCodeValid) {
    zipCodeWidget.style.backgroundColor = 'initial';
  } else {
    zipCodeWidget.style.backgroundColor = 'orange';
  }
}

function checkForm(event) {
  if (!screenNameValid || !zipCodeValid || !tosAgreeValid) {
    event.preventDefault();
  }
  if (!screenNameValid) screenNameWidget.style.backgroundColor = 'orange';
  if (!zipCodeValid) zipCodeWidget.style.backgroundColor = 'orange';
  if (!tosAgreeValid) tosWidget.style.backgroundColor = 'orange';
}

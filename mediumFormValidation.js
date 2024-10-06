// middle of the road validation for a short form

let screenNameValid = false;
let zipCodeValid = false;
let tosAgreeValid = false;

let myForm = document.querySelector('#tosForm');
myForm.addEventListener('submit', checkForm);

let screenNameWidget = document.querySelector('#screenName');
screenNameWidget.addEventListener('input', checkScreenName);

let zipCodeWidget = document.querySelector('#zip');
zipCodeWidget.addEventListener('input', checkZipCode);

let tosAgreeWidget = document.getElementById('tos');
tosAgreeWidget.addEventListener('input', tosAgree);

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
  // ZIP must be 5 digits with nothing before or after
  let regex = /^\d\d\d\d\d$/;
  let zip = zipCodeWidget.value.trim();
  zipCodeValid = zip.match(regex);

  if (zipCodeValid) {
    zipCodeWidget.style.backgroundColor = 'initial';
  } else {
    zipCodeWidget.style.backgroundColor = 'orange';
  }
}

function tosAgree() {
  // must have agreed (typed yes)
  tosAgreeValid = tosAgreeWidget.value.toLowerCase() == 'yes';

  if (tosAgreeValid) {
    tosAgreeWidget.style.backgroundColor = 'initial';
  } else {
    tosAgreeWidget.style.backgroundColor = 'orange';
  }
}

function checkForm(event) {
  if (!screenNameValid || !zipCodeValid || !tosAgreeValid) {
    event.preventDefault();
  }
}

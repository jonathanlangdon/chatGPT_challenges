// If "wallMeters" is in localStorage, store the result in bedroomWidth variable. Otherwise, do not change bedroomWidth.

let bedroomWidth = 'initial';

if (localStorage.getItem('wallMeters') !== null) {
  bedroomWidth = localStorage.getItem('wallMeters');
}

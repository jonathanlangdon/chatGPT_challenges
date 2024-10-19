// If "trimColor" is in localStorage, store the result in frontRoomColor variable. Otherwise, do not change frontRoomColor.

let bedroomColor = 'initial';

const localStorageTrimColor = localStorage.getItem('trimColor');
if (localStorageTrimColor !== null && localStorageTrimColor !== '') {
  bedroomColor = localStorageTrimColor;
}

// a simplistic checker if the password is strong
function isStrongPassword(password) {
  if (password.length < 8) return false;
  if (password.includes('password')) return false;
  if (password.toLowerCase() === password) return false;
  return true;
}

// The password is at least 8 characters long.
// The password does not contain the string "password".
// The password contains at least one uppercase character.

console.log('Qwerty - ' + isStrongPassword('Qwerty')); // false - Too short
console.log('passwordQwerty - ' + isStrongPassword('passwordQwerty')); // false - Contains "password"
console.log('qwerty123 - ' + isStrongPassword('qwerty123')); // false - No uppercase chars
console.log('Qwerty123 - ' + isStrongPassword('Qwerty123')); // true
console.log(isStrongPassword('Abc1234')); // false

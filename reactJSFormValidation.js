// validation using controlled variables and form feedback on submit

import React from 'react';
import { useState } from 'react';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameReqs, setUsernameReqs] = useState({
    longEnough: true,
    onlyLettersDigits: true
  });
  const [passwordReqs, setPasswordReqs] = useState({
    longEnough: true,
    upperCaseChar: true,
    specialChar: true
  });

  function usernameIsValid(username) {
    const lengthRequirement = username.length >= 4;
    const charRequirement = /^[a-z0-9]+$/.test(username);
    setUsernameReqs({
      longEnough: lengthRequirement,
      onlyLettersDigits: charRequirement
    });
    return lengthRequirement && charRequirement;
  }

  function passwordIsValid(password) {
    const isSixChar = password.length >= 6;
    const hasUpperCase = password.match(/[A-Z]/) !== null;
    const hasSpecial = password.match(/[!@#$]/) !== null;
    setPasswordReqs({
      longEnough: isSixChar,
      upperCaseChar: hasUpperCase,
      specialChar: hasSpecial
    });
    return isSixChar && hasUpperCase && hasSpecial;
  }

  function handleSubmit(e) {
    // validate username & password
    if (!usernameIsValid(username)) e.preventDefault();
    if (!passwordIsValid(password)) e.preventDefault();
  }

  return (
    <form
      onSubmit={handleSubmit}
      target="_blank"
      method="post"
      action="https://wp.zybooks.com/form-viewer.php"
    >
      <p>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        {!usernameReqs.longEnough && (
          <span className="error">Must be at least four characters.</span>
        )}
        {!usernameReqs.onlyLettersDigits && (
          <span className="error">
            Only lowercase letters and digits acceptable.
          </span>
        )}
      </p>
      <p>
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {!passwordReqs.longEnough && (
          <span className="error">Must be at least six characters.</span>
        )}
        {!passwordReqs.upperCaseChar && (
          <span className="error">Must contain an uppercase character.</span>
        )}
        {!passwordReqs.specialChar && (
          <span className="error">Must contain one of: ! @ # $</span>
        )}
      </p>
      <p>
        <button>Register</button>
      </p>
    </form>
  );
}

export default RegistrationForm;

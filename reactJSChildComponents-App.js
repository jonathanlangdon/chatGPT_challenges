// uses two child components

import React from 'react';
import Profile from './Profile.js';

const person1 = {
  name: 'Li Chen',
  home: {
    street: '101 Main',
    city: 'Denver',
    state: 'CO',
    zip: '80014'
  },
  work: {
    street: '2000 Central',
    city: 'Aurora',
    state: 'CO',
    zip: '80010'
  }
};

function App() {
  return (
    <Profile
      name={person1.name}
      homeAddress={person1.home}
      workAddress={person1.work}
    />
  );
}

export default App;

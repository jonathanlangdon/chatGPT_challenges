// uses a single Song component that has 4 props

import React from 'react';
import Song from './Song.js';

function App() {
  return (
    <Song
      artist="Toto"
      title="Africa"
      length="4:55"
      link="https://en.wikipedia.org/wiki/Africa_(Toto_song)"
    />
  );
}

export default App;

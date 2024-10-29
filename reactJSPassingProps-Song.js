// Component using 4 props to render them to html

import React, { useState } from 'react';

function Song({ artist, title, length, link }) {
  return (
    <>
      <p>
        Title: <a href={link}>{title}</a>
      </p>
      <p>Artist: {artist}</p>
      <p>Length: {length}</p>
    </>
  );
}

export default Song;

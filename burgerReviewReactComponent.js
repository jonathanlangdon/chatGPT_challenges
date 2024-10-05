// simple component example in React.js

import './App.css';
import Review from './Review.js';

function App() {
  return (
    <>
      <h1>Reviews of The Burger Joint</h1>
      <Review username="mrodriguez" rating={3} text="Amazing burgers!" />

      <Review username="lming" rating={2} text="Pretty good food." />

      <Review username="tak" rating={4} text="Excellent" />
    </>
  );
}

export default App;

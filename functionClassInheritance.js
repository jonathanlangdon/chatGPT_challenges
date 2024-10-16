// Make Villa inherit from Home by assigning Villa with a copy of Home's prototype and setting the Villa class' prototype constructor to Villa's constructor function.

function Home() {
  // class constructor code
}

function Villa() {
  Home.call(this);
}

Villa.prototype = Object.create(Home.prototype);
Villa.prototype.constructor = Villa;

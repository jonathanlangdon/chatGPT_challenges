// create triangles out of astericks

function drawTriangle(size) {
  for (let i = 1; i <= size; i++) {
    console.log('*'.repeat(i));
  }
}

drawTriangle(3); // returns triangle with base size of 3
drawTriangle(4); // returns triangle with base size of 4

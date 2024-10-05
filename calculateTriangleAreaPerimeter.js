// based on coordinates, calculate area and perimeter of a triangle (not just right triangles)

function trianglePerimeter(x1, y1, x2, y2, x3, y3) {
  const side1 = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  const side2 = Math.sqrt((x3 - x2) ** 2 + (y3 - y2) ** 2);
  const side3 = Math.sqrt((x3 - x1) ** 2 + (y3 - y1) ** 2);
  return side1 + side2 + side3;
}

function triangleArea(x1, y1, x2, y2, x3, y3) {
  return Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2;
}

console.log(trianglePerimeter(1, 0, 2, 4, 4, 3)); // 10.60
console.log(triangleArea(1, 0, 2, 4, 4, 3)); // 4.5

// Do NOT remove the following line:
export { trianglePerimeter, triangleArea };

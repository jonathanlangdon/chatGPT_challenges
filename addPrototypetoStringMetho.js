//Define a toString prototype method that returns the cat's name, height, and gender separated by dashes.

function Cat(name, color, gender, height, weight, age) {
  this.name = name;
  this.color = color;
  this.gender = gender;
  this.height = height;
  this.weight = weight;
  this.age = age;
}

Cat.prototype.toString = function () {
  return `${this.name}-${this.height}-${this.gender}`;
};

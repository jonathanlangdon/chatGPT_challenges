// create a Puppy class with a private variable, age

class Puppy {
  #age;

  constructor(age) {
    this.#age = age;
  }

  getAge() {
    return this.#age;
  }

  setAge(age) {
    this.#age = age;
  }
}

let dog1 = new Puppy(2);
console.log(dog1.getAge()); // 2
dog1.setAge(1);
console.log(dog1.getAge()); // 1

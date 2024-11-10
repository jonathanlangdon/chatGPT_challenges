// hero.js for heroes and villains app

class SuperHuman {
  name;
  powerLevel;
  constructor(name, powerLevel) {
    this.name = name;
    this.powerLevel = powerLevel;
  }
  battle(superVillain) {
    return this.powerLevel >= superVillain.powerLevel;
  }
}

class SuperHero extends SuperHuman {
  alias;
  constructor(name, alias, powerLevel) {
    super(name, powerLevel);
    this.alias = alias;
  }
}

class SuperVillain extends SuperHuman {
  alias;
  constructor(name, alias, powerLevel) {
    super(name, powerLevel);
    this.alias = alias;
  }
  getEvilChuckle() {
    return 'Ha ha ha!';
  }
}

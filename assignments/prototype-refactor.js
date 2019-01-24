/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday - DONE!

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements
should still return what is expected of them.

*/

/////////////////////////
////    pasted    ///////
//// vvvvvvvvvvvv ///////

/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

// GameObject constructor
function GameObject(gameObjectAttributes) {
  this.createdAt = gameObjectAttributes.createdAt;
  this.dimensions = gameObjectAttributes.dimensions;
}

// add destroy method to GameObject
GameObject.prototype.destroy = function () {return `${this.name} was removed from the game`;};

/*
  === CharacterStats ===
  * healthPoints
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

// CharacterStats constructor
function CharacterStats(characterStatsAttributes) {
  GameObject.call(this, characterStatsAttributes);
  this.healthPoints = characterStatsAttributes.healthPoints;
  this.name = characterStatsAttributes.name;
}

// link up the GameObject prototype with the CharacterStats prototype using Object.create() method
CharacterStats.prototype = Object.create(GameObject.prototype);

// add takeDamage method to CharacterStats
CharacterStats.prototype.takeDamage = function () { return `${this.name} took damage`; };
/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

// Humanoid constructor
function Humanoid(humanoidAttributes) {
  CharacterStats.call(this, humanoidAttributes);
  this.team = humanoidAttributes.team;
  this.weapons = humanoidAttributes.weapons;
  this.language = humanoidAttributes.language;
}

// link up the CharacterStats prototype with the Humanoid prototype using Object.create() method
Humanoid.prototype = Object.create(CharacterStats.prototype);

// add greet method to Humanoid
Humanoid.prototype.greet = function () { return `${this.name} offers a greeting in ${this.language}`; };

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

// Villian constructor
function Villian(villianAttributes) {
  Humanoid.call(this, villianAttributes);
}

function Hero(heroAttributes) {
  Humanoid.call(this, heroAttributes);
}

// link up the Humanoid prototype with the Villian prototype using Object.create() method
Villian.prototype = Object.create(Humanoid.prototype);

// link up the Humanoid prototype with the Hero prototype using Object.create() method
Hero.prototype = Object.create(Humanoid.prototype);

const gru =  new Villian({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 5,
    height: 3,
  },
  healthPoints: 1000,
  name: 'Gru',
  team: 'Team Gru RULES',
  weapons: [
    'Laser Bubbler',
    'Minion Swarm',
  ],
  language: 'English',
});


const groot =  new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 4,
    height: 10,
  },
  healthPoints: 1000,
  name: 'Groot',
  team: 'Guardians of the Galaxy',
  weapons: [
    'Vine wrap',
    'Branch smack',
  ],
  language: 'Groot speak',
});

Villian.prototype.taunt = function () { return `${this.name} thumbs nose at you`; };
Hero.prototype.taunt = function () { return `${this.name} stands proud`; };


Villian.prototype.attack = function(obj, points){
  obj.healthPoints -= points;
  obj.takeDamage();
  if(obj.healthPoints <=0) {
    console.log(`${this.team} wins !!!!`);
    return obj.destroy();
  }
  return `${this.name} attacks ${obj.name} and takes out ${points} health points \n\t
            ${obj.name} now at ${obj.healthPoints} remaining;`

};

Hero.prototype.attack = function(obj, points){
  obj.healthPoints -= points;
  obj.takeDamage();
  if(obj.healthPoints <=0) {
    console.log(`${this.team} wins !!!!`);
    return obj.destroy();
  }
  return `${this.name} attacks ${obj.name} and takes out ${points} health points \n\t
            ${obj.name} now at ${obj.healthPoints} remaining;`
};

// DEBUG
//gru.attack(groot, 100);
//groot.attack(gru,200);

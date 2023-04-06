'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never use methods inside of construction
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const anna = new Person('Anna', 1987);
// console.log(anna);

// New {} is created
// func is called, this = {}
// {} linked to prototype
// func automatically return {}

const matilda = new Person('Matilda', 1980);
const jack = new Person('Jack', 1995);
// console.log(matilda, jack);

// console.log(anna instanceof Person);
// console.log(Person.prototype);
//Prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

anna.calcAge();

// console.log(Person.prototype.isPrototypeOf(anna));
// console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
// console.log(anna.species, matilda.species);

// console.log(anna.hasOwnProperty('firstName'));
// console.log(anna.hasOwnProperty('spieces'));

// console.log(anna.__proto__);
// console.log(anna.__proto__.__proto__);
// console.log(anna.__proto__.__proto__.__proto__);
// console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 6, 7, 8, 4, 5, 3, 2]; // new Array = []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
// console.log(arr.unique());

const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.speed} km/h`);
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

car1.accelerate();
car2.accelerate();
car1.brake();
car2.brake();

//class expression
// const PersonCl = class {}

//class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
jessica.greet();

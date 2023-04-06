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
console.log(anna);

// New {} is created
// func is called, this = {}
// {} linked to prototype
// func automatically return {}

const matilda = new Person('Matilda', 1980);
const jack = new Person('Jack', 1995);
console.log(matilda, jack);

console.log(anna instanceof Person);

//Prototypes

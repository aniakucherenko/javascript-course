'use strict';

// function calcAge(birthYear) {
//   const age = 2022 - birthYear;
//   console.log(firstName);

//   function printAge() {
//     const output = `${firstName}, You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         console.log(a + b);
//       }
//       add(2, 3);
//     }
//   }

//   printAge();
//   return age;
// }

// const firstName = 'Anna';
// calcAge(1987);
// // console.log(age);

// console.log('!!!!!!!!!!!!!!!');

// // console.log(me);
// // // console.log(job);
// // // console.log(year);

// // var me = 'anna';
// // let job = 'developer';
// // const year = 1987;

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// console.log(numProducts);
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);

console.log(this);

const calcAge = function (birthYear) {
  console.log(2022 - birthYear);
  console.log(this);
};
calcAge(1987);

const calcArrow = birthYear => {
  console.log(2022 - birthYear);
  console.log(this);
};
calcArrow(1987);

// const anna = {
//   year: 1987,
//   calcAge: function () {
//     console.log(this);
//     console.log(2022 - this.year);
//   },
// };
// anna.calcAge();

// const matilda = {
//   year: 2007,
// };

// matilda.calcAge = anna.calcAge;
// matilda.calcAge();

// const f = anna.calcAge;
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);

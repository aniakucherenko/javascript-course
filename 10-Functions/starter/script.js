'use strict';

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas River',
//   passport: 23450985,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr.' + passenger.name;

//   //   if (passenger.passport === 23450985) {
//   //     alert('Checked in');
//   //   } else {
//   //     alert('Wrong passport');
//   //   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('hello, anna!!', oneWord);

// const greeterArr = greeting => name => console.log(`${greeting} ${name}`);

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//     // console.log(this.bookings);
//   },
// };

// lufthansa.book(239, 'Jonas Bridge');
// lufthansa.book(635, 'John Smith');

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };
// const book = lufthansa.book;

// // book(23, 'Sarah Wiliams');

// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);

// bookEW(23, 'Steven Wiliams');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Anna Key');
// bookEW23('Jonas Lower');

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(100));
// console.log(addVAT(23));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT2 = addTaxRate(0.23);

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: Javascript', '1: Phyton', '2: Rust', '3: C++'],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     console.log(answer);

//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     console.log(this.answers);
//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//     }
//     console.log(`Poll results are: ${this.answers.join(', ')}`);
//   },
// };

// poll.registerNewAnswer();

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';
//   const body = document.querySelector('body');
//   body.addEventListener('click', function () {
//     header.style.color = 'blue';
//   });
// })();
// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = { flightNum, numPassengers, price };
//   // console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH234', 8);
// createBooking('LN345', undefined, 1000);

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Smith',
//   passport: 23459889,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH7898';
//   passenger.name = 'Mr.' + passenger.name;
//   if (passenger.passport === 23459889) {
//     alert('Check in');
//   } else {
//     alert('Wrong passport');
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000);
// };
// newPassport(jonas);
// checkIn(flight, jonas);

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best', upperFirstWord);
transformer('Javascript is the best', oneWord);

const high5 = function () {
  // console.log('🐤');
};
document.body.addEventListener('click', high5);
['Jonas', 'Marta', 'Kate'].forEach(high5);

const greet = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');
// console.log('hello');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //   book: function()
  //  {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};
console.log(lufthansa);

lufthansa.book(239, 'Jonas Smidtman');
lufthansa.book(625, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
const book = lufthansa.book;

// book(23, 'Sarah Williams');

book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 583, 'Mary Cooper');

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtman');
bookEW23('Marta Cooper');

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
lufthansa.buyPlane();
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// console.log('hello');
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: Javascript', '1: Phyton', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question} \n ${this.options.join(
          '\n'
        )} \n (Write option number)`
      )
    );

    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    // console.log(poll.answers);
    this.displayResults();
    // this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
  // displayResults() {
  //   console.log(this.answers);
  // },
};

// poll.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [12, 22, 3, 5] }, 'string');
poll.displayResults.call({ answers: [12, 22, 3, 5] });

const runOnce = function () {
  console.log('This will never run again');
};

runOnce();

(function () {
  console.log('This will never run again');
})();

(() => console.log('This will also never run again'))();

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
h();
f();

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
  }, 1000);
  console.log(
    `There are 3 groups, each with ${perGroup} passengers`,
    wait * 1000
  );

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);

(function () {
  const header = document.querySelector('h1');
  header.addEventListener('click', function () {
    header.style.color = 'red';
  });
})();

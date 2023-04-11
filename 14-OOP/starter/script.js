'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   Person.prototype.calcAge = function () {
//     console.log(2037 - this.birthYear);
//   };

//   const Student = function (firstName, birthYear, course) {
//     // Person.call(this, firstName, birthYear);
//     this.course = course;
//   };

//   Student.prototype = Object.create(Person.prototype);

//   Student.prototype.introduce = function () {
//     console.log(`My name is ${this.firstName} and i study ${this.course}`);
//   };

//   const mike = new Student('Mike', 2020, 'Computer Science');

//   mike.introduce();
//   mike.calcAge();
//Never use methods inside of construction
//   this.calcAge = function () {
//     console.log(2037 - this.birthYear);
//   };

// const anna = new Person('Anna', 1987);
// console.log(anna);

// New {} is created
// func is called, this = {}
// {} linked to prototype
// func automatically return {}

// const matilda = new Person('Matilda', 1980);
// const jack = new Person('Jack', 1995);
// console.log(matilda, jack);

// console.log(anna instanceof Person);
// console.log(Person.prototype);
//Prototypes
// Person.prototype.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
// };

// anna.calcAge();

// console.log(Person.prototype.isPrototypeOf(anna));
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = 'Homo Sapiens';
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

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   //   console.log(`${this.speed} km/h`);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.speed} km/h`);

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);

// car1.accelerate();
// car2.accelerate();
// car1.brake();
// car2.brake();

//class expression
// const PersonCl = class {}

//class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     // console.log(2037 - this.birthYear);
//   }

//   greet() {
//     // console.log(`Hey, ${this.firstName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     // console.log('Hey there!!!=)');
//     // console.log(this);
//   }
// }

// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);
// console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   //   console.log(`Hey ${this.firstName}`);
// };
// jessica.greet();

//Classes are not hoisted
//Classes are first class citizens
//Classes executed in a strict mode

// const walter = new PersonCl('Walter White', 1995);

// PersonCl.hey();

// const account = {
//   owner: 'Jonas',
//   movements: [200, 530, 400, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// // console.log(account.latest);

// account.latest = 50;
// // console.log(account.movements);

// Person.hey = function () {
//   //   console.log('Hey there!!!=)');
//   //   console.log(this);
// };

// Person.hey();

// const PersonProto = {
//   calcAge() {
//     // console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
// const steven = Object.create(PersonProto);
// // console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// // console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }

//   accelerate() {
//     this.speed += 10;
//     // console.log(`${this.speed} km/h`);
//   }
//   brake() {
//     this.speed -= 5;
//     // console.log(`${this.speed} km/h`);
//   }
// }

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  //   console.log(`${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
};
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.speed = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);

tesla.chargeBattery(90);
tesla.chargeBattery(70);
tesla.chargeBattery(50);
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
console.log(tesla);

// const ford = new CarCl('Ford', 120);
// ford.accelerate();
// ford.brake();
// ford.brake();
// console.log(ford.speedUS)

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    // console.log(2037 - this.birthYear);
  }

  greet() {
    // console.log(`Hey, ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hey there!!!=)');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and i study ${this.course}`);
  }
  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student i fell more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2021, 'Computer Science');
martha.introduce();
martha.calcAge();

const PersonProto = {
  calcAge() {
    // console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonPhoto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`My name is ${this.fullName} and i study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();

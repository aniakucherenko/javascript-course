"use strict";

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3

// let scoreDolphins = calcAverage (44,23,71)
// let scoreKoalas = calcAverage (65,54,49)

// function checkWinner (avgDolphins, avgKoalas){
//     if (avgDolphins >= avgKoalas * 2) {
//     console.log("Dolphins win!");
//     } else if (avgKoalas >= avgDolphins * 2) {
//     console.log("Koalas win!");
//     } else {
//         console.log("No one wins!");
//     }
// }
// checkWinner (scoreDolphins, scoreKoalas)
// checkWinner (500,210)

// function calcTip (bill) {
//     if (bill >=50 && bill <= 300) {
//         return bill * 0.15;
//     } else {
//         return bill * 0.2;
//     }
// }
// const bill = [125, 555, 44];
// const tips = [calcTip (bill[0]), calcTip (bill[1]), calcTip (bill[2])]

// let total = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]]
// console.log(bill, tips, total);

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
//   };

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, best friend called ${jonas.friends[0]}`);

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriverLicence: true,

//     // calcAge: function(birthYear){
//     //     return 2022 - birthYear;
//     // }

//     // calcAge: function() {
//     //     return 2022 - this.birthYear;
//     // }
//     calcAge: function() {
//         this.age = 2022 - this.birthYear;
//         return this.age;
//     },
//     getSummary: function() {
//        if (this.hasDriverLicence) {
//         return `${this.firstName} is ${this.calcAge()} years old ${this.job}, and he has a driver License`
//        } else {
//         `${jonas.firstName} is ${jonas.age} years old ${jonas.job}, and doesnot have a driver License`
//        }
//     },
//     getSummary2: function() {
//         return `${this.firstName} is ${this.calcAge()} years old ${this.job}, and he has ${this.hasDriverLicence ? 'a' : 'no'} drivers Licence`
//    }
// }
//   console.log(jonas.calcAge());
//   console.log(jonas.age);
//   console.log(jonas.getSummary());
//   console.log(jonas.getSummary2());
//   console.log(jonas.calcAge(1991));
//   console.log(jonas['calcAge'](1991));

// const Mark = {
//     firstName: 'Mark',
//     lastName: 'Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//        return this.mass / this.height**2
//     },
//     BMI: this.calcBMI
// }

// const John = {
//     firstName: 'John',
//     lastName: 'Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() {
//         return this.mass / this.height**2
//      },
//      BMI: this.calcBMI
// }

// Mark.calcBMI() > John.calcBMI() ? console.log(`${Mark.firstName}'s BMI ${Mark.calcBMI().toFixed(2)} is highter than  ${John.firstName}'s BMI ${John.calcBMI().toFixed(2)}`) : console.log(`${John.firstName}'s BMI ${John.calcBMI().toFixed(2)} is highter than  ${Mark.firstName}'s BMI ${Mark.calcBMI().toFixed(2)}`)

// const years = [1991, 2007, 2022, 2016];
// const ages = [];

// for (let i = 1; i < years.length; i++) {
//   ages.push(2022 - years[i]);
// }
// // console.log(ages);

// function calcTip(bill) {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// }
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(bills[i] + tip);
// }

// console.log(tips);
// console.log(totals);

// function calcAverage(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total / arr.length;
// }
// console.log(calcAverage([2, 3, 7]));
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));
// console.log("Hello!!");

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);

  let maxTemp = temps[0];
  let minTemp = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== "number") continue;
    if (curTemp > maxTemp) {
      maxTemp = curTemp;
    }
    if (curTemp < minTemp) {
      minTemp = curTemp;
    }
  }
  // console.log(maxTemp);
  // console.log(minTemp);
  return maxTemp - minTemp;
};
calcTempAmplitudeNew([3, 13, 5]);
const amplitudeNew = calcTempAmplitudeNew([3, 2, 9, 15, -3], [5, 7, -2, 12, 3]);
console.log(amplitudeNew);

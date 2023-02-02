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

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);

//   let maxTemp = temps[0];
//   let minTemp = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (typeof curTemp !== "number") continue;
//     if (curTemp > maxTemp) {
//       maxTemp = curTemp;
//     }
//     if (curTemp < minTemp) {
//       minTemp = curTemp;
//     }
//   }
//   // console.log(maxTemp);
//   // console.log(minTemp);
//   return maxTemp - minTemp;
// };
// calcTempAmplitudeNew([3, 13, 5]);
// const amplitudeNew = calcTempAmplitudeNew([3, 2, 9, 15, -3], [5, 7, -2, 12, 3]);
// console.log(amplitudeNew);

// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     value: Number(prompt("Degrees celsius:")),
//   };
//   console.log(measurement);
//   console.table(measurement);
//   console.log(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// console.log(measureKelvin());

// const data1 = [17, 22, 24];
// const data2 = [12, 5, -5, 7, 9];

// const printForecast = function (arr) {
//   let string = "";
//   for (let i = 0; i < arr.length; i++) {
//     string += `... ${arr[i]}°C in ${i + 1} day`;
//   }
//   console.log(string);
// };

// printForecast(data1);

// function logger() {
//   console.log("My name is Anna");
// }

// logger();

// function fruitProcesser(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   console.log(juice);
// }

// fruitProcesser(5, 1);
// fruitProcesser(2, 4);
// // const appleJuice = fruitProcesser(5, 0);
// // console.log(appleJuice);

// function describeCountry(country, population, capitalCity) {
//   const string = `${country} has ${population} million people and its capital city is ${capitalCity}`;
//   return string;
// }

// const ukraine = describeCountry("Ukraine", 52, "Kyiv");
// console.log(ukraine);
// const norway = describeCountry("Norway", 20, "Oslo");
// console.log(norway);

// function calcAge1(birthYear) {
//   const age = 2023 - birthYear;
//   return age;
// }

// const age1 = calcAge1(1987);
// console.log(age1);

// const calAge2 = function (birthYear) {
//   return 2023 - birthYear;
// };
// const age2 = calAge2(1987);
// console.log(age1, age2);

// // function percentageOfWorld1(population) {
// //   const percentage = (population / 7900) * 100;
// //   return percentage;
// // }
// // const ukrainePopulation = percentageOfWorld1(520000);
// // console.log(ukrainePopulation);
// // const chinaPopulation = percentageOfWorld1(1410000);
// // console.log(chinaPopulation);

// // const percentageOfWorld2 = function (population) {
// //   const percentage = (population / 7900) * 100;
// //   return percentage;
// // };

// // const ukrainePopulation2 = percentageOfWorld2(520000);
// // console.log(ukrainePopulation2);
// // const chinaPopulation2 = percentageOfWorld2(1410000);
// // console.log(chinaPopulation2);

// // const percentageOfWorld3 = (population) => (population / 7900) * 100;

// // const ukraine2 = percentageOfWorld3(15000);
// // console.log(ukraine2);

// // Arrow function
// const calcAge3 = (birthYear) => 2023 - birthYear;
// const age3 = calcAge3(1987);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, name) => {
//   const age = 2023 - birthYear;
//   const retirement = 65 - age;
//   return `${name} retires an ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1987, "Anna"));
// console.log(yearsUntilRetirement(1995, "Kris"));

// const fruitCutter = function (fruit) {
//   return fruit * 4;
// };

// function fruitProcesser2(apples, oranges) {
//   const applePieces = fruitCutter(apples);
//   const orangePieces = fruitCutter(oranges);

//   const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
//   return juice;
// }

// console.log(fruitProcesser2(2, 3));

// const percentageOfWorld3 = (population) => (population / 7900) * 100;

// const describePopulation = function (country, population) {
//   const percentage = percentageOfWorld3(population);
//   const string = `${country} has ${population} million people, which is ${percentage}% about of the world`;
//   return string;
// };

// console.log(describePopulation("Switzerland", 22));
// console.log(describePopulation("China", 1441));
// console.log(describePopulation("Ukraine", 52));

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const avgDolphins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgKoalas > avgDolphins * 2) {
//     console.log(`Koalas win with draw ${avgKoalas} : ${avgDolphins}`);
//   } else if (avgDolphins > avgKoalas * 2) {
//     console.log(`Dolphins win with draw ${avgDolphins} : ${avgKoalas}`);
//   } else {
//     console.log("Nobody wins");
//   }
// }
// checkWinner(avgDolphins, avgKoalas);

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const newFriends = friends.push("Kate");
// console.log(friends);
// console.log(newFriends);
// friends.unshift("John");
// console.log(friends);
// const popped = friends.pop();

// console.log(popped);
// friends.unshift();
// console.log(friends);

// const y = new Array(1991, 1984, 2020, 2045);
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log([friends.length - 1]);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);

// const anna = ["anna", "kucherenko", 2022 - 1987, friends];
// console.log(anna);

// function calcAge(birthYear) {
//   return 2023 - birthYear;
// }

// const years = [1998, 2003, 1987, 1995];

// const ageA1 = calcAge(years[0]);
// const ageA2 = calcAge(years[1]);
// const ageA3 = calcAge(years[years.length - 1]);
// console.log(ageA1, ageA2, ageA3);

// const agesA = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(agesA);

// const populations = [52, 16, 141, 30];

// console.log(populations.length === 4);

// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];
// console.log(percentages);

// const neighbours = ["poland", "hungary", "lithuania"];
// console.log(neighbours);
// neighbours.push("Utopia");
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);
// if (!neighbours.includes("Germany")) {
//   console.log("Probably not a central Europe country");
// }

// neighbours[neighbours.indexOf("Poland")] = "Poland the great";
// console.log(neighbours);

// const myBill = 275;
// let tips = myBill > 50 && myBill < 300 ? myBill * 0.15 : myBill * 0.2;
// console.log(
//   `The bill is ${myBill} 💫, tips will be ${tips} 🚩, total value is ${
//     myBill + tips
//   }`
// );

// function calcTip(myBill) {
//   const tips = myBill > 50 && myBill < 300 ? myBill * 0.15 : myBill * 0.2;
//   return tips;
// }

// console.log(calcTip(300));

// const arrays = [125, 555, 44];

// const allTips = [calcTip(arrays[0]), calcTip(arrays[1]), calcTip(arrays[2])];

// console.log(allTips);

// const totals = [
//   arrays[0] + allTips[0],
//   arrays[1] + allTips[1],
//   arrays[2] + allTips[2],
// ];

// console.log(totals);

// // const annaArray = [
// //   "Anna",
// //   "Kucherenko",
// //   2022 - 1987,
// //   "developer",
// //   ["Kate", "Leo", "Peter"],
// // ];

// const annaObject = {
//   firstName: "Anna",
//   lastName: "Kucherenko",
//   age: 2022 - 1987,
//   birthYear: 1987,
//   job: "developer",
//   friends: ["Kate", "Leo", "Peter"],
//   hasDriverLicense: false,
//   calcAge: function () {
//     this.age = 2022 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is ${this.calcAge()}years old ${
//       this.job
//     }, and she has ${this.hasDriverLicense ? "a" : "not"} drivers license`;
//   },
// };

// console.log(annaObject.getSummary());

// console.log(annaObject.calcAge(1995));
// console.log(annaObject.calcAge(1987));
// console.log(annaObject["calcAge"](1995));

// console.log(annaObject);
// console.log(annaObject.lastName);
// console.log(annaObject["lastName"]);

// const nameKey = "Name";
// console.log(annaObject["first" + nameKey]);
// console.log(annaObject["last" + nameKey]);

// // const interestedIn = prompt(
// //   "What do you want to know about Anna? Choose between: firstName, lastName, age, job, friends"
// // );

// // if (annaObject[interestedIn]) {
// //   console.log(annaObject[interestedIn]);
// // } else {
// //   console.log("Wrong request");
// // }

// annaObject.location = "Netherlands";
// annaObject["instagram"] = "@ania.kucherenko";
// console.log(annaObject);

// console.log(
//   `${annaObject.firstName} has ${annaObject.friends.length} friends, best friend is called ${annaObject.friends[0]}`
// );

// const myCountry = {
//   country: "Ukraine",
//   capital: "Kyiv",
//   language: "ukrainian",
//   population: 30,
//   neighbours: ["Poland", "Hungary", "Lithuania"],
//   describe: function () {
//     return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries
//     and a capital called ${this.capital}.`;
//   },
//   checkIsland: function () {
//     return (this.isIsland = this.neighbours.length === 0 ? true : false);
//   },
// };
// console.log(myCountry);
// console.log(myCountry.checkIsland());
// console.log(myCountry.describe());

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries
// and a capital called ${myCountry.capital}.`);

// myCountry.population += 2;

// console.log(myCountry.population);

// console.log(myCountry["population"] - 2);

// console.log("CODING CHALLENGE");

// const mark = {
//   firstName: "Mark",
//   lastName: "Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   firstName: "john",
//   lastName: "smith",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     return (this.bmi = this.mass / this.height ** 2);
//   },
// };
// mark.calcBMI();
// john.calcBMI();
// console.log(mark);
// console.log(john);
// console.log(john.bmi, mark.bmi);

// if (mark.bmi > john.bmi) {
//   console.log(`Marks BMI is ${mark.bmi} and higher than Johns ${john.bmi}`);
// } else {
//   console.log(`Johns BMI is ${john.bmi} and higher than Marks ${mark.bmi}`);
// }

// console.log("LOOP");

// for (let i = 1; i <= 10; i++) {
//   console.log(`Repetition number ${i}`);
// }

// for (let i = 1; i <= 50; i++) {
//   console.log(`Vote number ${i} is voting`);
// }

const annaArray = [
  "Anna",
  "Kucherenko",
  2022 - 1987,
  "developer",
  ["Kate", "Leo", "Peter"],
  true,
];

for (let i = annaArray.length - 1; i >= 0; i--) {
  console.log(i, annaArray[i]);
}
for (let ex = 1; ex < 4; ex++) {
  console.log(`------Starting exercise ${ex}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${ex} Repetition ${rep}`);
  }
}

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let y = 0; y < listOfNeighbours[i].length; y++) {
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
  }
}

const names = [["Anna", "Oleg"], ["Alla", "Oleg"], ["Eva"], ["Sofiia"]];
for (let i = 0; i < names.length; i++) {
  for (let a = 0; a < names[i].length; a++) {
    console.log(`Name: ${names[i][a]}`);
  }
}

// }
// const types = [];
// for (let i = 0; i < annaArray.length; i++) {
//   console.log(annaArray[i], typeof annaArray[i]);
//   // types[i] = typeof annaArray[i];
//   types.push(typeof annaArray[i]);
// }
// console.log(types);

// const years = [1998, 2003, 1987, 1995];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2023 - years[i]);
// }
// console.log(years);
// console.log(ages);

// for (let i = 0; i < annaArray.length; i++) {
//   if (typeof annaArray[i] !== "string") continue;
//   console.log(annaArray[i], typeof annaArray[i]);
// }

// const populations = [52, 16, 141, 30];

// function percentageOfWorld1(population) {
//   const percentage = (population / 7900) * 100;
//   return percentage;
// }

// const percentage2 = [];

// for (let i = 0; i < populations.length; i++) {
//   const perc = percentageOfWorld1(population[i]);
//   percentage2.push(perc);
// }
// console.log(percentage2);

// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];
// console.log(percentages)

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
// const bmiMark = massMark / heightMark ** 2;
// const bmiJohn = massJohn / heightJohn ** 2;
// const markHigherBMI = bmiMark > bmiJohn;

// console.log(bmiMark)
// console.log(bmiJohn)
// console.log(markHigherBMI)

// if (bmiMark > bmiJohn) {
// console.log(`Mark has highter BMI, it is ${bmiMark}`);
// } else {
//     console.log(`John has highter BMI, it is ${bmiJohn}`);
// }

// let Dscore1 = 96
// let Dscore2 = 108
// let Dscore3 = 89
// let Daverage = (Dscore1 + Dscore2 + Dscore3) / 3
// let Kscore1 = 88
// let Kscore2 = 91
// let Kscore3 = 110
// const minScore = 50
// let Kaverage = (Kscore1 + Kscore2 + Kscore3) / 3

// console.log(Kaverage, Daverage);

// if (Kaverage > Daverage && Kaverage >= minScore) {
//     console.log("The Winner is Kaverage");
//  } else if
//    (Daverage > Kaverage && Daverage > minScore) {
//     console.log("The Winner is Daverage");
//  } else if
//     (Kaverage === Daverage && Kaverage >minScore && Daverage >minScore) {
//     console.log("Both are winners!");
//  }

let bill = 40;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
let finalValue = bill + tip;
console.log(
  `The bill was ${bill}, the tip was ${tip}, the total was ${finalValue}`
);

const weightMark = 78;
const heightMark = 1.69;
const weightJohn = 92;
const heightJohn = 1.95;
const MarkBMI = weightMark / heightMark ** 2;
const JohnBMI = weightJohn / heightJohn ** 2;
const markHigherBMI = MarkBMI > JohnBMI;
console.log(MarkBMI, JohnBMI, markHigherBMI);
if (markHigherBMI) {
  console.log(`Mark's BMI is highter than John's and it is ${MarkBMI}`);
} else {
  console.log(`John's BMI is highter than Mark's and it is${JohnBMI}`);
}

const firstName = "Anna";
const job = "developer";
const birthYear = 1987;
const year = 2023;

const anna = `I'm ${firstName} from Ukraine, ${year - birthYear} years old`;

console.log(anna);

const age = 21;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Sarah can start driving!🐱");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah can not drive, she needs ${yearsLeft} more years🐭`);
}

const birthYearr = 2015;
let century;
if (birthYearr <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

const inputYear = "1991";
console.log(Number(inputYear) + 18);
console.log(String(23), 23);

const ageA = 18;
if (ageA === 18) console.log("You are an adult");

const hasDriverslicence = true;
const hasGoodVision = true;

console.log(hasDriverslicence && hasGoodVision);
console.log(hasDriverslicence || hasGoodVision);
console.log(!hasDriverslicence);

const shouldDrive = hasDriverslicence && hasGoodVision;

if (shouldDrive) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive");
}

const DolphAverage = (97 + 108 + 89) / 3;
const KoalaAverage = (109 + 95 + 123) / 3;

console.log(DolphAverage, KoalaAverage);

if (DolphAverage > KoalaAverage && DolphAverage >= 100) {
  console.log("The winner is DolphAverage");
} else if (KoalaAverage > DolphAverage && KoalaAverage >= 100) {
  console.log("The winner is KoalaAverage");
} else {
  console.log("Both are winners");
}

const newAge = 23;
newAge >= 18
  ? console.log("i like to drink wine")
  : console.log("I like to drink water ");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);
console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

const countryPopulation = 12;

if (countryPopulation > 33) {
  console.log("Countrys population is above average");
} else {
  console.log(`Countrys population is ${33 - countryPopulation} below average`);
}

console.log(
  `Countrys population is ${
    countryPopulation > 33 ? "above average" : "below average"
  }`
);

const number = 5 + 6 + "4" + 9 - 4 - 2;
console.log(number);

// const numNeighbours = prompt(
//   "How many neighbour countries does your countryhave?"
// );

// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }
const country = "ukraine";
const population = 33;
const isIsland = false;
const language = "english";

if (language == "english" && population < 50 && isIsland) {
  console.log(`You should live in ${country} 🐟`);
} else {
  console.log(`${country} does not meet your criteria`);
}

const dayA = "monday";

switch (dayA) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend 🦄");
    break;
  default:
    console.log("Not a valid day");
}

const lang = "ukr";

switch (lang) {
  case "spanish":
    console.log("2nd place in number of natice speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("number 4");
    break;
  case "arabic":
    console.log("5th place");
    break;
  default:
    console.log("Great language too! 🌝");
}

const myBill = 275;
let tips = myBill > 50 && myBill < 300 ? myBill * 0.15 : myBill * 0.2;
console.log(
  `The bill is ${myBill} 💫, tips will be ${tips} 🚩, total value is ${
    myBill + tips
  }`
);

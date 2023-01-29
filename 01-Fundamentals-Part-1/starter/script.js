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

const age = 14;
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

const day = "monday";

const newAge = 23;
newAge >= 18
  ? console.log("i like to drink wine")
  : console.log("I like to drink water ");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

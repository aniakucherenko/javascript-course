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

console.log(MarkBMI, JohnBMI);
if (MarkBMI > JohnBMI) {
  message: "Mark has bigger BMI";
}
message: "John has bigger BMI";

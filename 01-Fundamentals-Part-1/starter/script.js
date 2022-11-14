const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;
const markHigherBMI = bmiMark > bmiJohn;

console.log(bmiMark)
console.log(bmiJohn)
console.log(markHigherBMI)

if (bmiMark > bmiJohn) {
console.log(`Mark has highter BMI, it is ${bmiMark}`);
} else {
    console.log(`John has highter BMI, it is ${bmiJohn}`);
}
 
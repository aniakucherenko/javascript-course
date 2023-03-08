'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// // Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// movements.forEach(function (movement) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// });

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2, 4));
// console.log(arr.length);
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -1));
// console.log(...arr);
// console.log([...arr]);
// console.log(arr.slice());

// console.log(arr.splice(2));

// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'f'];

// const arr3 = [23, 11, 64];
// console.log(arr3[0]);
// console.log(arr3.at(0));

// console.log(arr3.at(-1));

// function checkDogs(dogsJulia, dogsKate) {
//   const dogsJuliaNew = dogsJulia.slice();
//   dogsJuliaNew.splice(0, 1);
//   dogsJuliaNew.splice(-2);
//   const dogs = dogsJuliaNew.concat(dogsKate);

//   dogs.forEach(function (dog, i) {
//     if (dog > 3) {
//       console.log(`This is dog number # ${i + 1}, he is ${dog} years old`);
//     } else {
//       console.log(`This is puppy number # ${i + 1}, he is ${dog} years old`);
//     }
//   });
// }

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages
//     .map(age => (age <= 2 ? 2 * age : 16 + 4 * age))
//     .filter();
//   console.log(humanAges);
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

//   {
//     let humanAge = 0;
//     if (age <= 2) {
//       humanAge = 2 * age;
//     }
//     console.log(humanAge);

// };

let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

console.log(letters.join(' - '));

const arr3 = [23, 11, 64];
console.log(arr3[0]);
console.log(arr3.at(0));

console.log(arr3[arr3.length - 1]);
console.log(arr3.slice(-1)[0]);
console.log(arr3.at(-1));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement num ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement num ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}
console.log('!!!');

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

const checkDogs = function (dogsJulia, dogsKate) {
  const correctJulia = dogsJulia.slice(1, -2);
  const newArr = [...correctJulia, ...dogsKate];
  console.log(newArr);
  newArr.forEach(function (el, i, arr) {
    if (el < 3) {
      console.log(`Dog number ${i + 1} is still a puppy`);
    } else {
      console.log(`Dog number ${i + 1}
      is an adult, and is ${el} years old`);
    }
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(function (age) {
    if (age <= 2) {
      return 2 * age;
    } else if (age > 2) {
      return 16 + age * 4;
    }
  });
  const filteredDogs = humanAges.filter(function (age) {
    return age >= 18;
  });
  const average =
    filteredDogs.reduce(function (acc, age) {
      return acc + age;
    }, 0) / filteredDogs.length;
};
//   const calcAverageHumanAge = ages =>
//     ages
//       .map(age <= 2 ? 2 * age : 16 + age * 4)
//       .filter((age, i, arr) => age >= 18)
//       .reduce((acc, age) => acc + age / arr.length, 0);
// };

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

console.log('!!!!!!!!!');
const eurToUsd = 1.1;

const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);

movements.filter(function (mov) {});

const totalDepositsUSD = movements
  .filter(mov => mov > 0)

  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * eurToUsd;
  })

  // .map(mov => mov * eurToUsd)

  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

const firstWithDrawal = movements.find(mov => mov < 0);

console.log(movements);
// console.log(firstWithDrawal);
// console.log(accounts);
console.log(movements.includes(-130));

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

console.log(movements.every(mov => mov > 0));
// console.log(accounts4.movements.every(mov => mov > 0));

const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(array.flat());

const arrDeep = [[[1, 2], 3], [4, 5], 7, 8];
console.log(arrDeep.flat(2));

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);

const allMovements = accountMovements.flat();
console.log(allMovements);

const overAllBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overAllBalance);

const overAllBalance2 = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);

console.log(overAllBalance2);

const overAllBalance3 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overAllBalance3);

const owners = ['jonas', 'zach', 'adam', 'marta'];
console.log(owners);
console.log(owners.sort());

console.log(movements);
console.log(movements.sort());

movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
console.log(movements);

movements.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});
console.log(movements);

movements.sort((a, b) => a - b);
console.log(movements);

movements.sort((a, b) => b - a);
console.log(movements);

const arr4 = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x);
// x.fill(1);
// console.log(x);
x.fill(1, 3, 5);
console.log(x);

arr4.fill(23, 2, 6);
console.log(arr4);

const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (cur, i) => i + 1);
console.log(z);

const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
console.log(numDeposits1000);

let a = 10;
console.log(++a);
console.log(a);

// const { deposits, withdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );
// console.log(deposits, withdrawals);

const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals);

const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'and', 'the', 'or', 'but', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(' ');
  return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));

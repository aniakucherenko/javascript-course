'use strict';

// // Data needed for a later exercise
// // const flights =
// //   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // // Data needed for first part of the section
// // const restaurant = {
// //   name: 'Classico Italiano',
// //   location: 'Via Angelo Tavanti 23, Firenze, Italy',
// //   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
// //   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
// //   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

// //   openingHours: {
// //     thu: {
// //       open: 12,
// //       close: 22,
// //     },
// //     fri: {
// //       open: 11,
// //       close: 23,
// //     },
// //     sat: {
// //       open: 0, // Open 24 hours
// //       close: 24,
// //     },
// //   },
// // };

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// for (const [i, player] of game.scored.entries())
//   console.log(`Goal ${i + 1}: ${player}`);

// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

// const name = Object.values();

// for
// console.log(`Odd`);
// const [players1, players2] = game.players;
// const [gk, ...fieldPlayers] = players1;

// const allPlayers = [...players1, ...players2];

// const players1Final = [...players1, 'Thiago', 'Couthingo', 'Perisic'];

// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// const printGoals = function (...players) {
//   console.log(`${players.length} goals are scored`);
// };

// // printGoals('Davies', 'Muller', 'Lewandovski', 'Kimmich');
// printGoals(...game.scored);

// console.log(allPlayers);
// console.log(players1Final);

// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

// const menu = ['Pasta', 'Pizza', 'Lasagne'];
// for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

// const gameEvents = new Map([
//   [17, 'GOAL'],
//   [36, 'Substitution'],
//   [47, 'GOAL'],
//   [61, 'Substitution'],
//   [64, 'Yellow card'],
//   [69, 'Red card'],
//   [70, 'Substitution'],
//   [72, 'Substitution'],
//   [76, 'GOAL'],
//   [80, 'GOAL'],
//   [92, 'Yellow card'],
// ]);

// const events = [...new Set(gameEvents.values())];

// console.log(gameEvents);
// console.log(events);
// gameEvents.delete(64);

// const averages = 90 / gameEvents.size;
// console.log(`The event happened on average ${averages} minutes`);

// for (const [time, event] of gameEvents) {
//   if (time <= 45) {
//     console.log(`First half! ${time}: ${event}`);
//   } else {
//     console.log(`Second half! ${time}: ${event}`);
//   }
// }

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle place!');
//   else console.log('You are lucky!');
// };

// checkMiddleSeat('75C');
// checkMiddleSeat('32B');

// const passenger = 'joNaS';
// const passengerLowerCase = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLowerCase[0].toUpperCase() + passengerLowerCase.slice(1);

// console.log(passengerCorrect);

// const capitalizeName = function (name) {
//   const arr = name.split(' ');
//   const capitalizedWords = [];

//   for (const word of arr) {
//     // capitalizedWords.push(word[0].toUpperCase() + word.slice(1)).join;
//     capitalizedWords.push(word.replace(word[0], word[0].toUpperCase()));
//   }

//   console.log(capitalizedWords.join(' '));
// };

// capitalizeName('jessica ann smith davis');

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const cut = str.slice(-4);
//   console.log(cut.padStart(str.length, 'X'));
// };

// maskCreditCard(4149090934569387);

// const planesInLine = function (number) {
//   console.log(`There are ${number} planes in line ${'✈️'.repeat(number)}`);
// };

// planesInLine(5);
// planesInLine(7);

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// const button = document.querySelector('button');

// button.addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const splitText = text.split('\n');
//   // console.log(splitText);
//   for (const [i, word] of splitText.entries()) {
//     const [first, second] = word.toLowerCase().trim().split('_');

//     const newString = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${newString.padEnd(20)}${'✅'.repeat(i + 1)}`);

//     // const newText = `${first} + ${second.replace(second[0], second[0].toUpperCase())
//     // ).padEnd(20, ' '}✅`;
//     // console.log(output);
//   }
// });

// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const array = flights.split('+');
// console.log(array);

// for (const flight of array) {
//   const [type, from, to, time] = flight.split(';');

//   const output = `${type.startsWith('_Delayed') ? '⏺' : ''}${type
//     .split('_')
//     .join(' ')} from ${from.slice(0, 3).toUpperCase()} to ${to
//     .slice(0, 3)
//     .toUpperCase()} (${time.split(':').join('h')}) `;

//   console.log(output.padStart(50));
// }

const restaurant = {
  nameA: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function (obj) {
    console.log(obj);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngridient, ...otherIngredients) {},
};

const openingHours = restaurant.openingHours;

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days:  `;
console.log(openStr);

const values = Object.values(openingHours);
console.log(values);

for (const day of Object.keys(openingHours)) {
  console.log(day);
}

const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// const menuA = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menuA) console.log(item);

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open ${open}`);
// }

// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// const users = [{ name: 'Jonas', email: 'hello@jonas.com' }];
// console.log(users[0]?.name ?? 'User array empty');

// if (users.length > 0) console.log(users[0].name);
// else console.log('user array empty');

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del sole',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const { nameA, openingHours, categories } = restaurant;
// console.log(nameA, openingHours, categories);

// const {
//   nameA: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // let o = 111;
// // let e = 999;
// // const obj = { o: 23, e: 7, c: 14 };
// // ({ o, e } = obj);
// // console.log(o, e);

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// // const arr = [2, 3, 4];
// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];

// // const [x, y, z] = arr;
// // console.log(x, y, z);
// // console.log(arr);

// let [first, , second] = restaurant.categories;
// console.log(first, second);

// [first, second] = [second, first];
// console.log(first, second);
// console.log(restaurant.categories);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log('starter: ', starter, ', mainCourse: ', mainCourse);

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// const newMenu = [...restaurant.mainMenu, 'Sushi'];

// const mainMenuCopy = [...restaurant.mainMenu];

// const menu2 = [...restaurant.mainMenu, ...restaurant.starterMenu];

// const str = 'Jonas';
// const letters = [...str, '', 'S.'];

// // const ingredients = [
// //   prompt("Let's make pasta! Ingredient 1?"),
// //   prompt('Ingredient 2?'),
// //   prompt('Ingredient 3'),
// // ];

// // console.log(ingredients);

// // restaurant.orderPasta(...ingredients);

// const newRestaurant = {
//   foundedIn: 1998,
//   ...restaurant,
//   founder: 'Gjuseppe Vaviolli',
// };

// const restaurantCopy = { ...restaurant };
// restaurantCopy.nameA = 'Ristorante Roma';

// const [a, b, ...others] = [1, 2, 3, 4, 5];

// const [pizza, risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// const { sat, ...weekdays } = restaurant.openingHours;

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
// };
// add(2, 3);
// add(4, 6, 7, 2, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'cheese', 'onion', 'olives');

// restaurant.orderPizza('mushrooms');

// // const apartment = {
// //   descr: 'Spacious apartment in the city center',
// //   rating: 4,
// //   price: 2153,
// // };
// // const values = [];
// // // Change code below this line

// // const keys = Object.keys(apartment);

// // for (const key of keys) {
// //   values.push(apartment[key]);
// // }
// // console.log(values);
// // console.log(keys);

// // console.log('!!!!!!!!');
// // console.log('!!!!!!!!');

// // const products = [
// //   { name: 'Radar', price: 1300, quantity: 4 },
// //   { name: 'Scanner', price: 2700, quantity: 3 },
// //   { name: 'Droid', price: 400, quantity: 7 },
// //   { name: 'Grip', price: 1200, quantity: 9 },
// // ];

// // function getAllPropValues(propName) {
// //   const array = [];
// //   for (const product of products) {
// //     if (Object.keys(product).includes(propName)) array.push(product[propName]);

// //     console.log(product);
// //     console.log(product[propName]);
// //   }
// //   console.log(array);
// // }
// // getAllPropValues('name');

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

// const guests2 = restaurant.numGuests || 10;

// const rest1 = {
//   name: 'Capri',
//   numGuests: 20,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// // rest1.numberGuests = rest1.numGuests || 10;
// // rest2.numberGuests = rest2.numGuests || 10;
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANONYMOUS>';

// rest1.owner &&= '<ANONYMOUS';
// rest2.owner &&= '<ANONYMOUS';

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const players1 = game.players[0];
// const players2 = game.players[1];
// // const [players1, players2] = game.players

// const [gk, ...fieldPlayers] = players1;

// console.log(players1, players2, gk, fieldPlayers);

// const allPlayers = [...players1, ...players2];

// console.log(allPlayers);

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// console.log(players1Final);

// const team1 = game.odds.team1;
// const draw = game.odds.draw;
// const team2 = game.odds.team2;

// console.log(team1);

// function printGoals(...players) {
//   console.log(`Players scored ${players.length} goals`);
// }
// printGoals('Michael', 'Norris', 'Morrison', 'Laminski');
// printGoals(...game.scored);

// function odds(number) {
//   console.log(``);
// }

// game.odds.team1 < game.odds.team2 && console.log('Team1 is more likely to win');

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

for (const [i, el] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${el}`);
}

const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
  average += odd;
}
average /= odds.length;
console.log(average);

for (const [team, odd] of Object.entries(game.odds)) {
  const str = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${str} ${odd}`);
}

function add(...args) {
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return sum;
}

// Change code below this line
function findMatches(numbers, ...args) {
  const matches = []; // Don't change this line
  for (const number of numbers) {
    if (args.includes(number)) {
      matches.push(number);
    }
  }
  return matches;
}
const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  getPotions() {
    const { potions } = this;
    return potions;
  },
  addPotion(newPotion) {
    const { potions } = this;
    for (const potion of potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    potions.push(newPotion);
  },
  removePotion(potionName) {
    const { potions } = this;
    for (let i = 0; i < potions.length; i += 1) {
      const { name } = this.potions[i];
      if (potionName === name) {
        potions.splice(i, 1);
      }
    }
  },
  updatePotionName(oldName, newName) {
    const { potions } = this;
    for (const potion of potions) {
      if (potion.name === oldName) {
        potion.name = newName;
      }
    }
  },
};

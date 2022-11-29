'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

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

for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

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

const gameEvents = new Map([
  [17, 'GOAL'],
  [36, 'Substitution'],
  [47, 'GOAL'],
  [61, 'Substitution'],
  [64, 'Yellow card'],
  [69, 'Red card'],
  [70, 'Substitution'],
  [72, 'Substitution'],
  [76, 'GOAL'],
  [80, 'GOAL'],
  [92, 'Yellow card'],
]);

const events = [...new Set(gameEvents.values())];

console.log(gameEvents);
console.log(events);
gameEvents.delete(64);

const averages = 90 / gameEvents.size;
console.log(`The event happened on average ${averages} minutes`);

for (const [time, event] of gameEvents) {
  if (time <= 45) {
    console.log(`First half! ${time}: ${event}`);
  } else {
    console.log(`Second half! ${time}: ${event}`);
  }
}

const airline = 'TAP Air Portugal';
const plane = 'A320';

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle place!');
  else console.log('You are lucky!');
};

checkMiddleSeat('75C');
checkMiddleSeat('32B');

const passenger = 'joNaS';
const passengerLowerCase = passenger.toLowerCase();
const passengerCorrect =
  passengerLowerCase[0].toUpperCase() + passengerLowerCase.slice(1);

console.log(passengerCorrect);

const capitalizeName = function (name) {
  const arr = name.split(' ');
  const capitalizedWords = [];

  for (const word of arr) {
    // capitalizedWords.push(word[0].toUpperCase() + word.slice(1)).join;
    capitalizedWords.push(word.replace(word[0], word[0].toUpperCase()));
  }

  console.log(capitalizedWords.join(' '));
};

capitalizeName('jessica ann smith davis');

const maskCreditCard = function (number) {
  const str = number + '';
  const cut = str.slice(-4);
  console.log(cut.padStart(str.length, 'X'));
};

maskCreditCard(4149090934569387);

const planesInLine = function (number) {
  console.log(`There are ${number} planes in line ${'✈️'.repeat(number)}`);
};

planesInLine(5);
planesInLine(7);

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const button = document.querySelector('button');

button.addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const splitText = text.split('\n');
  // console.log(splitText);
  for (const [i, word] of splitText.entries()) {
    const [first, second] = word.toLowerCase().trim().split('_');

    const newString = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${newString.padEnd(20)}${'✅'.repeat(i + 1)}`);

    // const newText = `${first} + ${second.replace(second[0], second[0].toUpperCase())
    // ).padEnd(20, ' '}✅`;
    // console.log(output);
  }
});

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const array = flights.split('+');
console.log(array);

for (const flight of array) {
  const [type, from, to, time] = flight.split(';');

  const output = `${type.split('_').join(' ')} from ${from
    .slice(0, 3)
    .toUpperCase()} to ${to.slice(0, 3).toUpperCase()} (${time
    .split(':')
    .join('h')}) `;

  console.log(output.padStart(50));
}

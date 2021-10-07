function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/*let tries = 0;
let result = randomNumberBetween(1, 6);
tries += 1;*/

/*while (result <= 2) {
  result = randomNumberBetween(1, 6);
  tries += 1;
} */

// I refactored the code to use a do/while loop so the function would be
// called at least once, as it seems was the inital intention. Oops forgot to
// intialize result. And I am using wrong commenting format. Rats!
let tries = 0;
do {
  let result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2);
  


console.log('It took ' + String(tries) + ' tries to get a number greater than 2');
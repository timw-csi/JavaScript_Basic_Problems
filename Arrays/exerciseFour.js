let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let stringArr = myArray.map(number => {
  if (number % 2 === 0) {
    return 'even';
  }
  else return 'odd';
})

console.log(stringArr);

stringArr = myArray.map( number => {
  if (number %2 !== 0) {
    return 'odd'
  }
  else return 'even';
})

console.log(stringArr);
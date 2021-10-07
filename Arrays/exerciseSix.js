let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

/*function oddLengths(array) {
  let lengths = array.map(value => value.length);
  let odds = lengths.filter(number => {
    return number % 2 !== 0;
  })  
  return odds;
} */

function oddLengths(array) {
  let lengths = array.map(function Value(value) {
    return value.length;
  })  
  let odds = lengths.filter(function Number(number) {
    return number % 2 !== 0;
  })  
  return odds;
}
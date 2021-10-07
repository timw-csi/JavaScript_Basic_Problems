/* Create an array from the keys of the 
object obj below, with all of the keys 
converted to uppercase. Your implementation
must not mutate obj. */

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let newArr = (Object.keys(obj));
let uppers = newArr.map(letter => letter.toUpperCase());
console.log(uppers);
/* What does the following function do?

function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

*/

/* A. Takes the string provided as argument, splits it into indivual elements at the space (''),
reverses the order of the now (possibly) multiple elements, then it replaces each element with its 
length. */

/* NOT ENTIRELY ACCURATE. .split returns the elements as arrays, and the resulting methods all act
on arrays and return arrays themselves. */
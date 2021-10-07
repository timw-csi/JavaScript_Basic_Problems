let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83

function sumOfSquares(array) {
  let squareSum = array.reduce((acc, elem) => acc + (elem * elem));
  return squareSum;
}
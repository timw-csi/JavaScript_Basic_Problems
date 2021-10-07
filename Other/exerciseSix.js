/* Write a function that searches an array of strings for every element that matches 
the regular expression given by its argument. The function should return all matching
 elements in an array. */

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
  'flabbergasted'
];

// console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']



function allMatches(wordArray, regex) {
  let matchList = [];
  wordArray.forEach(word => {
    if (regex.test(word)) {
      matchList.push(word);
    }
  })
  return matchList;
}

console.log(allMatches(words, /lab/));

/*  Much more elegant solution from LS:
*/
function allMatches(words, pattern) {
  return words.filter((word) => pattern.test(word));
}


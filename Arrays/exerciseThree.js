let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray.forEach(element => {
  for (index = 0; index < element.length; index += 1) {
    if (element[index] % 2 === 0) {
      console.log(element[index]);
    }
  }
}) 

// this is the official solution. much cleaner
myArray.forEach(nestedArray => {
  nestedArray.forEach(value => {
    if (value % 2 === 0) {
      console.log(value);
    }
  })
})

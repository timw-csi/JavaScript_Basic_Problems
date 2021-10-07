let obj1 = {name: 'tim', age: 31, major: 'History' }

let arr1 = Object.entries(obj1);
for (let i = 0; i < arr1.length; i += 1) {
  console.log(arr1[i]);
}

// WRONG. Or at least, different. Official solution below:

let myArray = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}
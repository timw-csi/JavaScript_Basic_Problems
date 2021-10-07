let rlSync = require('readline-sync');
let age = rlSync.question("How old are you? ");
age = parseInt(age);
console.log("You are " + age + " years old.");

for (let i = 1; i <= 4; i += 1) {
  console.log(`In ${i * 10} years, you will be ${age + (i * 10)} years old.`);
}
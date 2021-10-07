/* 5. Create a new object named myObj that 
uses myProtoObj as its prototype. */

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.name = 'Yoyo';
console.log(myObj);

for (let prop in myObj) {
  console.log(myObj[prop]);
}
/* 7. Add a qux property with value 3 to 
the myObj object we created in the previous
 exercise. Now, examine the following code
snippets:

1. let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

2. for (let key in myObj) {
  console.log(key);
}

Without running this code, can you 
determine whether these two snippets
produce the same output? Why? */

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

myObj.qux = 3;
console.log(myObj);


/* A. No, they will not produce the same 
output. Snippet 1 will output only myObj's
own keys, because it uses Object.keys().

Snippet 2 will output myObj's own keys
along with its inherited keys from the
myProtoObj prototype, because it uses
the for/in loop. */
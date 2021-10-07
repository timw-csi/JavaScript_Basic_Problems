let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
  console.log(argument2);
}

let test = bar(foo, qux);

console.log(foo.a);
console.log(qux);
console.log(test);

/* The program logs to the console "hi" and 
"hello". Objects are mutable, so line 9 changes
the value of foo.a from "hello" to "hi".
Strings are primitive datatypes though so
they cannot be changed. Although the variables
pointing to their values can be reassigned.
This happens inside the block of function bar, 
where 'hi' is resassigned to argument2, but
this only has block scope. Outside of the block
the original value of 'hello' assigned on 
line 6. */
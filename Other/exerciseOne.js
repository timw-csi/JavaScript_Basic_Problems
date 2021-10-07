/* What does this code log to the console?
 Why? */

 let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

/* A. [1, 4, 3]; Because arrays/objects
are passed-by-reference in JS, line 5 insures
that both array1 and array2 are pointing
at the same array with the same address in
memory. So when line 6 reassigns index 1 of
array1 to 4, array2 reflects the same mutation
of the array. */

/* y ++ throws an error because primitive values are not 
mutable. Whereas the previous expression (x = x + 1) was a resassignment, not a mutation,
of a new primitive to x. */

/* Actually, y++ returns "5" because having the ++ after the variable doesn't return the results of the
operation, just the original value passed. if it was ++y, it would return "6". */

/* Kinda right, but not totally. Official solution:
*
*
*
The return value is the numeric value 5.

If you apply ++ to a string, JavaScript coerces it into a number. In this case, "5" gets coerced to the number 5. After coercion, it then increments the value to 6. However, the return value is 5 since the post-increment operator (y++) returns the original value of y, not the incremented value.

This shows that x++ is not the same thing as x = x + 1.

*/

// What is exception handling and what problem does it solve? 

/* A. Exception handling is using tools like try/catch to plan for and neutralize bugs that
might throw off execution of your code. Usually, when JS runs into an error (e.g. trying to execute
a method like length on a null value in an array) the program stops running at that point and
returns an exception/error message. With exception handling, you run the possibly buggy code inside
the try block and for catch you supply the exception as the argument and in the body you include
a customized error message. When JS encounters the bug, it executes the catch block and then 
continues executing the try block at the spot after the error. */
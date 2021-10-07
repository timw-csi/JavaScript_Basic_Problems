let result = 1;

function factorial(number) {
  for (let i = 1; i <= number; i +=1) {
    result *= i;
  }
  console.log(result);
  result = 1;
}  

factorial(5);
factorial(8);
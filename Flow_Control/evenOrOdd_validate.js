let evenOrOdd = number => {
  if (parseInt(number, 10)) {
    if (number % 2 === 0) {
      console.log('even');
    }
    else {
      console.log('odd'); 
    }
  }  
  else {
    console.log(`${number} is not an int.`);
    return 1;  
  }
}

evenOrOdd('abc');
// Loops****************************
// repeatedly run a piece of code for the given number of times.
// TURN OFF AUTOSAVE, otherwise it will keep crashing.

// dont use const variables, becasue the variables are supposed to change. alwasy use let for loops.
//While loop**********
let amount = 10;

while (amount > 0) {
  console.log('Imma go to mall');
  console.log(amount);
  amount = amount - 2;
}
// the while loops runs the statements, as long as the param stays true.
// caution is warranted because if the param never becomes false, then the while loop will run infinitely.

//Do While loop************
let money = 0;

do {
  console.log(' You now have ' + money + ' rupees');
  money++;
} while (money < 5);
// while checks the condition and only then runs the statements, the do while, will run the statement once, and then check the conditions for subsequent loops.
// so even if the condition of the loop is not satisfied, the loop wil run atleast once.

//For loop************

for (i = 1; i < 6; i++) {
  console.log(i);
}

for (let number = 11; number >= 0; number = number - 1) {
  console.log('the number now is ' + number);
}

// for loop works like this
// for (initialisation, condition, updation){body of the loop;}

// observe that the for loop is ver similar to the while loop, except change in syntax.
// intruth the assembly code of the for and while loop is the same.
// but while loop is used usually when the updation part has complicated or nested functions, which can be difficult to write in a for loop,
// on the other hand for loop is easier to write than while loop as all its parts are visible directly, which increases the readibility of your code.

//Ternary Operator*******************

//unary operator - typeof()
let text = 'some text';
console.log(typeof text); //operand
//

//binary operator - assignment
let num1 = 3;
let num2 = 2 + 5;
//ternary operator
// Condition ? (runs if true) : (runs if false)

const blah = 2 > 1;
if (value) {
  console.log(`value is true`);
} else {
  console.log(`value is false`);
} // this is used by dinosaurs.

const blah2 = 100 < 1000;
blah2 ? console.log(`value is true`) : console.log(`value is false`);
//makes the code cleaner
// can also be nested.
!blah2
  ? console.log(`blah2 is true`)
  : blah
  ? console.log(`blah2 is false but this is true`)
  : console.log(`blah2 is false but blah is also false`);

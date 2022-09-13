// Conditional Stements************************
// > , <, >=, <=, ==, ===, !=, !===

let a = 1;
if ((a = 1)) {
  console.log('it is true init?');
}
// the code inside the if {} runs only if the condition inside() is fulfilled.
a = 2;
b = 3;
if (b > 1) {
  console.log('it is big init?');
} else {
  console.log('it is small init?');
}
//here we can determine between two conditions using if and else.
//also we need not put any value inside () of else, because it means whatever is the opposite of the conditon in () of if.
let c = 3;
if (b > c) {
  console.log('big');
} else if (b < c) {
  console.log('small');
} else {
  console.log('equal');
}
//here multiple conditions are added, using else if.
// you can add as many else if statements you want as long as the params dont repeat.
// ideally for many such statements, one might be inclined to use switch statements.

const yoyo = true;
// for js , true == 1, false == 0. so it might take multiple meanings of it.
if (!yoyo) {
  console.log('not yoyo');
}
// this is how the opposite of the param is defined, by putting a ! before the conditon.
// similarly..
if (a != b) {
  console.log('not equal');
}
// the ! before equal means not equal.
//
//
//Equality Comparision******************
// == and != checks for only value.
// === and !== checks for both value and type.
const w = 1;
const x = '1';
const y = 1;
const z = true;

if (x == y) {
  console.log('the value is same');
}
if (w === y) {
  console.log('the value and type is same');
}
if (x == z) {
  console.log('the value is same because true == 1');
}
//
//
//Logical Operator*****************
// Technically the equal operator is a logical operator.
// the || which means 'or'
// the  && means 'and'
// they are used in the conditions.

if (x === y || w === y) {
  console.log('the value and type is same');
}
// the if statemeant checks whether either of the conditon is true, and then it runs
if (z == true && y == true) {
  console.log('the value is similar.');
}
// here the if statement checks for both the condition before executing its statements.
//  Also there is no limit to how many such conditions you put in the param of the if or else if statement.
//
//
//Switch Statements*********************

const dice = 3;

switch (dice) {
  case 1:
    console.log('you got one');
    break; // if you dont add this break, then everything under it will also be printed.
  case 2:
    console.log('you got two');
    break;
  case 3:
    console.log('you got three');
    break;
  case 4:
    console.log('you got four');
    break;
  default:
    console.log('Roll again'); // the default is like the else of the switch statements.
}
// works very similar to if else statements, but the syntax is different.

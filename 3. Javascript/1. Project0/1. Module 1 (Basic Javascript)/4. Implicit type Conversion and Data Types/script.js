// Implicit Type Conversion***************

const fnomen = 'Dhawal';
const lnomen = 'Pandya';
const flnomen = fnomen + ' ' + lnomen;
console.log(flnomen);

const num1 = 2300;
const num2 = 234532;
const result1 = num1 + num2;
console.log(result1);

const test1 = num1 - fnomen;
console.log(test1);
// this outputs result as NaN becasue it is telling me that what I am typing is simply not possible.

const num3 = '23';
const num4 = '89';
const test2 = num4 - num3;
console.log(test2);
// here even though I explicitly added the numbers as strings, JS implicitly converted the type of the variable to see if the operator was legit, which in this case it was.
const test3 = num4 + num3;
console.log(test3);
// here it messes up because + operator is also true for string concatenation, so that is what it does first, rather than converting the type.
// even if one of the num was a string it would do this and concatenate.

//
//
// Data Types************************
// 7 total data type. distinguished into two parts.
// Primitive - String, Number, Boolean, Null, Undefined, Symbol
// Object - Arrays, Fumctions, Objects
// typeof() - operator(typeof variable) (typeof value)    ----> gives the type of the variable.

console.log(typeof fnomen);
console.log(typeof num3);
console.log(typeof num1);
let op = true;
console.log(typeof op);
let po = null;
console.log(typeof po);
// null will not give the type of null, it will give type as object, that is a bug, which shall remain unfixed becasue it has been there since JS was made, and many site still rely on it.
let pp;
console.log(typeof pp);
// undefined and null are very close, but undefined is simply 'not defined', while for null it means that it is empty.

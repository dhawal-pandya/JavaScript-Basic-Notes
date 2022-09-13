//Variables********************
//variables - Basic building bloack
// allows us to store, access and modify values, i.e: data.

let blah = 'Dhawal';

console.log(blah);
console.log(blah);
console.log(blah);
// it allows for a small change to happen to many places.
// declared by 'let'

let address, zip, state, country;
address = 'Rowhouse 1';
zip = '396001';
state = 'gujarat';
console.log(blah, address, state, zip, country);
// here we see that only the variable needs to be declared, not defined until it is used. multiple variables can be called. and undefined var like country here will simply output undefined.

blah = 'Dragon of the West';
console.log(blah);
// we can change the definitions, or assignments of the variable as and when we see fit.
//
//
//
//Naming**************
// not just for variables, but also for functions
//can contain digits, letters, underscore, $ or _
//cannot begin with numbers
let randomisedNum;
let randomised123;
let randomised_num;
let randomised$$$;

// cannot have keyword as the variable name.
// let let = "me"; is disallowed as it is a lexically bound name.
//
//Also the names are case sensitive, hence the camelCase is used.
//the underscore used name is called snake case.

let fullName = 'Dhawal Pandya';
//Console.log(fullName); this is incorrect the c in console is lowercase
console.log(fullName);
//
//
//
//var to let/const********************
//var - variable
var look = 'Ganesh';
//var is outdated and would be better if you do not use them

//let - a variable variable
let see = 'Ganpati';

//const - a constant variable (silly i know)
const observe = 'Vinayak';
// this one cannot be reassigned.
//also const needs to be defined right away, it cannot be declared but left undefined.
// they were seperated from var to solve scoping issues.
//************* to be learned later*
//
//
// "" or ''*********************
const flName = 'DPandya';
const lfName = 'DhawalP';
// both are fine as long as you stick to one of them.
//const sent = 'Dhawal\'s code is the best';
//single quotes can be misidentified with apotrophes, so in that case it can solved using the backward slash...or you can use double quotes.
//also  I have commented that line becasue the code editore turns it into a double quote, if I add that backward slash.
const sente = "Dhawal's code is the best"; //preferred
//
//
//
// String Concatenation********************
// combining of string. catena = chain(latin)
const fnomen = 'Dhawal';
const lnomen = 'Pandya';
let fulnomen = fnomen + ' ' + lnomen;
console.log('Hello World, I am ' + fulnomen);
// the addition here simply joins both of them, does add it, like in maths, hence it is not called simply adding but concatenation.
//Also the const variable is not bound to be const, for example if you add a let variable be a part of the assignment to a const variable, the assignment will be const, but the value need not be const...like so.
let b = 'boa';
const a = 'Happy Birthday to you, ' + b;
console.log(a);
b = 'boi';
console.log(a);
//
//
//
//Data types************
//Strings
//Numbers
// Javascript is "Loosely Typed" language, meaning we dont define what type of data type the variable is, we just put in the value and it sieves through itself what its data type must be.
const number = 1; //this is assiging value of 1 to number
const string = '1'; // this saying "1" is string

//
//
// Number*****************
// += -= /= *= ++ --

let mun = 40;
console.log('My num is ' + mun);
mun += 5;
console.log('+= gives ' + mun);
mun -= 5;
console.log('-= gives ' + mun);
mun /= 5;
console.log('/= gives ' + mun);
mun *= 5;
console.log('*= gives ' + mun);
mun++;
console.log('++ gives ' + mun);
mun--;
console.log('-- gives ' + mun);

// there is also the % operator called "modulus operator" it gives the remainder of the division

mun = mun % 3;
console.log(mun);
// it gives output of 1 because it is the remainder.

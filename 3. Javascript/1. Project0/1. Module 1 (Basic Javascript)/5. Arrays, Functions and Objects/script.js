// Arrays*******************
// Arrays are [], 0 Index based.

const friend1 = 'anna';
const friend2 = 'anna';
const friend3 = 'anna';
const friend4 = 'anna';

const friend5 = 'anna';
const friend6 = 'anna';
const friend7 = 'anna';

const friends = [
  'raju',
  'iroh',
  'ganesh',
  'director of isro',
  45,
  undefined,
  null,
];
// this is how an array is written.

console.log(friends[0]);
//this is how the array element is called.
console.log(friends[6]);

let bestFriend = friends[3];
console.log(bestFriend);
// individual elements of an array are also used like individual variables.

friends[4] = 'jignesh';
console.log(friends[4]);
//observe that this was disallowed in individual const variable, but reassigning values to elements in a const array is allowed.

// Functions and Objects*************************

console.log('hello there jigga');
console.log('hello there shilpa');
console.log('hello there ramesh');

function wr() {
  console.log('hello there xmi');
}
// the word function is called fucntion declaration,
// the next thing is the name of the function,
// the thing inside the () is called the argument/param,
// the things inside the {} are called the statements.
wr();
//but that will only make a function, a function needs to be called for it to work.
// it is called by calling its name and then giving it a argument/param through which to run its statements if needed.

function wl(pi) {
  //the pi here is just a variable.
  console.log('hello there ' + pi);
}
wl('harsh');
wl('ozai');
// here arguments and parameters are the same thing.
// params or parameters -- is used when they are declared/defined, or used as placeholders, or just give a local variable.
// arguments -- is used when the function is invoked/ called/ <run></run>
// they can be variables, values, can be multiple, or be undefined.

// Return*************************

function hlo(hli) {
  let hl = hli * 3.14159265;
  return hl;
}
console.log(hlo(5));
// this can also be written as...
function hli(hlu) {
  return hlu * 3.14159265;
}
console.log(hli(5));
//return basically takes a value when it has to and sends it to where ever the function is called.
//return also end the function, meaning that anything written in a function under return is 'unreacheable' by the js engine.
//
//
//
//Expressions*********************
//Another way to define a function.
//create a variable and assign to function (not value).

function addIt(no1, no2) {
  return no1 + no2;
}

const no3 = addIt(57000, 3);
console.log(no3);
//here observe that the value of the no3 was coming from a function.

const addVal = function (no4, no5) {
  return no4 + no5;
};
const addedVal = addVal(4000, 9000);
console.log(addedVal);
// this is called expressing the function.
// Also this is not the best way to do functions, because of arrow functions, which comes later.
//
//
//  Object*****************************
// collection of properties are called objects.
//these properties are called keys, which may have values.
// if the values of the key has a function, then it is called a method.
//dot notation is used to access them.
const person = {
  name: 'Dhawal',
  lnomen: 'Pandya',
  age: 24,
  master: 'Software Developer',
  married: false,
  siblings: ['Manaliben', 'Hitarthiben'],
  greeting: function () {
    console.log('Hello, my name is ' + person.name);
  },
};
// the greeting here is a method. the rest just behaves like variables.
console.log(person.greeting); // this will print the whole method for you.
//also the function itself has a console.log, so we cannot have a log of log.
person.greeting(); //this is how the method is called.
//
person.name = 'Albus'; //that is how we can change the values in keys.
console.log(person.name);
person.greeting();

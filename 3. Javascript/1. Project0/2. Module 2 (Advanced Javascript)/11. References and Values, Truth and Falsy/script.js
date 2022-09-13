// Reference vs Value************************
// Primitive Data Types
// String, NUmber, Symbol, Boolean, Undefined, Null,
// Arrays, Functions, Objects = objects
// typeof

const number = 1;
let number2 = number;
number2 = 7;
console.log(`the first number is ${number}`);
console.log(`the second number is ${number2}`);
// when assigning primitive data type value to a variable any changes made directly to that value without affecting original value.
// if the changes are made to primitive data types, as in changed number or string, or change of boolean or whatever, when it is used by some other variable, or function, the original assigned value will not change.

let person = { name: 'pandya' };
let person2 = person;
person2.name = 'dhawal';
console.log(`the name of 1st person is ${person.name}`);
console.log(`the name of 2nd person is ${person2.name}`);

// when assigning non-primitive data type value to a variable is done by reference so any changes will affect all the reference.
// but in the case of non-primitive data types as in arrays, or objects, the space is saved by the internal content, i.e: the key:value pair all that is subject to change permanently.
// remember what voral explained for arrays, only the location of the first element in the object is stored, not the value of the object. so anytime it is used by some othe rvariable which is reassigned later, or a fucntion which changes the element, it will also change the original value, since it changes like so, it is not called value but reference.
// infact any changes will affect/change all references, across the code.

// to protect from this, we use something like.
//let person2 = { ...person };
// the three dots will only copy the reference, and not mutate it.

//NUll and Undefined*******************
// both represent "no value"

// undefined - "Javascript cannot find assigned value for this."
//variable without value
// missing function arguments
// missing object properties.

// null - "developer sets the value"
//means it is empty by design, not because of the above reasons, but that the developer actually wants the variable to be empty.

let num1 = 99 + null; // 99 + 0
console.log(num1); //this returns 99 as null is 0 basically

let num2 = 99 + undefined; // 99 + 0
console.log(num2); // this returns NaN, because the JS doesn't know if the undefined is a number or not, it is literally undefined.

//Truthy And Falsy*********************
//"", '' ,`` , 0, -0, NaN, false, null, undefined

const text = 'yolo';
if (text) {
  console.log('Truthy');
} else {
  console.log('Falsy');
}
//All assigned values in JS are either truthy or falsy. Even though they are not boolean, if they are checked as a parameter, all empty strings, 0, all the things above mentioned will be taken as false, and everything else will be taken as true.

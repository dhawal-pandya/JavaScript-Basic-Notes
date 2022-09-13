// Math**************************
// Standard built-in objects - always available
// Static object : “Static methods are called without instantiating their class and are also not callable when the class is instantiated. Static methods are often used to create utility functions for an application.”

//rounding
// Math.round(x)	Returns x rounded to its nearest integer
// Math.ceil(x)	  Returns x rounded up to its nearest integer higher
// Math.floor(x)	Returns x rounded down to its nearest integer lower
// Math.trunc(x)	Returns the integer part of x (5.99 will be rounded to 5)
const num1 = 36.5;
const result1 = Math.floor(num1);
console.log(result1);
const result2 = Math.ceil(num1);
console.log(result2);

//Math sign
//Math.sign(x) returns if x is negative, null or positive:
console.log(Math.sign(-4)); // will return -1
console.log(Math.sign(4)); // will return 1
console.log(Math.sign(0)); // will return 0

//pi
console.log(Math.PI); // iykyk

//e
console.log(Math.E); // iykyk (Euler)

//min and max
//Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:
console.log(Math.min(0, 23, 34, -435523, 4123, -34)); // will return -435523
console.log(Math.max(0, 23, 34, -435523, 4123, -34)); // will return 4123

//sqrt and cbrt
//Math.sqrt(x) returns the square root of x:
//Math.cbrt(x) returns the cube root of x:

console.log(Math.sqrt(4));
console.log(Math.cbrt(8));
//both must return 2;

//Math random
console.log(Math.random()); // generates a random number between 0 and 1, but never 0 or 1.
console.log(Math.random() * 10); // for bigger numbers.
console.log(Math.ceil(Math.random() * 10)); // for cleaner bigger numbers. removes the decimals.
// floor can also be used bu that will never let you get 9, so you may have to add + 1 ad the end.

//There is also logarithms and trigonometry, but those are used less, but good to know.

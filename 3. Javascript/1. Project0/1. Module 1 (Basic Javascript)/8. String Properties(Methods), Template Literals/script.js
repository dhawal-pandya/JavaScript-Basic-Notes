//String Properties And Methods****************
// Wrapper String Object
let text = 'Pokemon Pikachu   ';
let stringLength = text.length;

console.log(stringLength);
console.log(text.length);
console.log(text.toLocaleLowerCase());
console.log(text.toUpperCase());
console.log(text.charAt(0));
console.log(text.charAt(9));
//string are 0 index based.
console.log(text.charAt(text.length - 1));
//theere is no char at 'length-number'th position, hence -1.
console.log(text.indexOf('P'));
console.log(text.indexOf('z'));
//the -1 output of this means that there is no z in the string.
console.log(text.trim());
console.log(text.startsWith('Poke'));
//This one checks if the string starts with the given string.
console.log(text.trim().toLowerCase().endsWith('chu'));
//this one chains the methods.
console.log(text.includes('mon Pi'));
//checks if includes
console.log(text.slice(0, 5));
//it doesn't include 5th position, but it slices the string between the index numbers given.
console.log(text.slice(-5));
// this starts it counting from the rear and slices the number of char you want.
console.log(text.slice(4));
//observe that in both cases the elements after the number were used.

const person = {
  name: 'Pokemon', //property, key:value pair
  greeting() {
    // this is a method.
    console.log('Pika..pikachu');
  },
};
// Function inside an object is called a method.

console.log(person);

console.log(person.name);
person.greeting();

//Template Literals -ES6+
//Backtick literals `` - above tab key.
//Interpolation ${} - thats how the value/expression is inserted.
// backticks and dollar signs.

const name = 'Dhawal';
const age = 24;
const sent =
  'Hey it is me, ya boi ' + name + ' and I am ' + age + ' years old.';
console.log(sent);

const betterSent = `Hey it is me, ya boi ${name} and I am ${age} years old.`;
console.log(betterSent);
// this is called template literals.
// Makes for far easier writing of code.
// The $ calls the variable, expression, and the whole thing is written not insode single inverted commas, but backticks.
const mathSent = `Hey it is me, ya boi ${name} and I am ${age} years old. And here I try some maths , ${
  4 * 4 + 1
}`;

console.log(mathSent);

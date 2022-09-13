//getElementById****************
// selects the element or the group of elements that wewant.
// allows us ot decide the effect we want to apply to the selection
// getElementById('element');

const h1 = document.getElementById('title');
h1.style.color = 'red';

document.getElementById('btn').style.backgroundColor = 'blue';
// you can always use it directly, but using it using a variable is far more easy.
const button = document.getElementById('btn');
button.style.alignContent = 'center';
button.style.borderRadius = '50%';
//like so

// getElementsByTagName*******************
// gives a node list
// node-list = array-like object
// index, lenght property but not array methods

const headings2 = document.getElementsByTagName('h2');
headings2[3].style.color = 'blue';
console.log(headings2.lenght);
// the node list is 0 indexed and is like an array.
// headings2.style.color = 'yellow';
// this line throws an error because it is array-like not an array exactly

const items = document.getElementsByTagName('li');
const betterItems = [...items];
//this is done to combat the earlier error, but it is because it is not an array
betterItems.forEach(function (item) {
  console.log(item);
});
// to be learned later in ES6
items[1].style.backgroundColor = 'pink';
items[1].style.display = 'inline';

// getElementByClassName*****************
// very similar to both the above ones, no real need to repeat

const blutton = document.getElementsByClassName('btn');
blutton[0].style.textDecoration = 'underline';
// same issues as with tag names. needs to be indexed.

// querySelector and querySelectorAll**************************
// querySelector('any css'); - selects single
// querySelectorAll('any css'); - selects all

const query = document.querySelector('#btn');
// here while writing in the ('') we need to write it as we wrote in CSS.
// # for Ids . for classnames and directly the tagname for tags.

const fruits = document.querySelector('.fruits');
console.log(fruits);
// this is not selecting the whole thing and that is where this comes in...

const allFruits = document.querySelectorAll('.fruits');
console.log(allFruits);

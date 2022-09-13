// nodeValue and textContent***************

const item = document.getElementById('special');
const value = item.nodeValue;
console.log(item.childNodes[0].nodeValue);
// you have to remember this syntax to get what is written inside the tags, the actual content.
// since the text of the tag was the first childNode elemenert, indexed at 0, that is how it was called.
// but all this can be skipped by simply  writing textContent, if that is all you want to get.

const easyValue = item.textContent;
console.log(easyValue);
//like so..

// getAttribute() and setAttribute()***************

const first = document.querySelector('.first');
const idValue = first.getAttribute('id');
// console.log(idValue);
// we can get whatever attributes we want from the markup and store them in our variables.

// we can even access the values we have put in the attributes of the tags.
const link = document.getElementById('link');
const showLink = link.getAttribute('href');
console.log(showLink);

// and we can change them as we want using the set attribute.
const last = link.nextElementSibling;
last.setAttribute('class', 'first');
last.textContent = ' I got the attributes now';
console.log(last);
// the li was without attributes, and selecting its query would have been indirect, so it was selected using the DOM navigation we have learned.
// and then we successfully set attributes to it.
// we can even change classes this way.

const links = document.querySelectorAll('.first');
console.log(links);
// there is only one link , I know but still, this helps in scripting all the links together.

// ClassList and ClassName********************

const frst = document.getElementById('frst');
const second = document.getElementById('second');
const third = document.getElementById('third');

const classValue = frst.className;
// console.log(classValue);

second.className = 'colors';
second.className = 'text';
// this will override the 1st line, the best way is to use both.
second.className = 'colors text';

third.classList.add('colors');
third.classList.add('text');
console.log(third.classList);
// this will add the classes without replacing it.
// third.classList.add('colors', 'text'); // there is also this way.
third.classList.remove('text');
console.log(third.classList);

let result = third.classList.contains('colors');
// if (result) {
//   console.log('has it');
// } else {
//   console.log('aint got it');
// }
result ? console.log('has it') : console.log('aint got it');

//Using "classList", you can add or remove a class without affecting any others the element may have. But if you assign "className", it will wipe out any existing classes while adding the new one (or if you assign an empty string it will wipe out all of them).

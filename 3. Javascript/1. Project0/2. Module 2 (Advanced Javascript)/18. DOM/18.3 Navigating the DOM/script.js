// Navigation on the DOM*******************

// Children****************

//select the element or group of elements that we want
// decide the effect we want to apply to the selection

// childNodes -  returns all Childnodes including whitespace which is treated as a text node.

// children
// firstChild
// lastChild

const result = document.querySelector('#fru');
const allChildren = result.childNodes;
// also returns the white spaces.
console.log(allChildren);

const children = result.children;
console.log(children);
// returns just the children without the white spaces

console.log(result.firstChild);
console.log(result.lastChild);

// Parent********************

const heading = document.querySelector('h2');
console.log(heading.parentElement);
//returns the tag and the classname of the parent.
console.log(heading.parentElement.parentElement.parentElement);
// you can reach the html traversing the parents
// console.log(
//   heading.parentElement.parentElement.parentElement.parentElement.parentElement
// );
//here it has gone beyond html and returns null, so in the next step it can say cannot read null element

heading.parentElement.style.color = 'violet';
// here we are styling the parent using the child as the query.

// Sibling****************

//previousSibling
//nextSibling
//returns whitespace

const fruit2 = document.querySelector('.orange');
const fruit3 = fruit2.nextSibling.nextSibling;
// i have to do it twice because one time it takes the white spcae between them, the next time it sees the element.
fruit3.style.color = 'pink';
// or a better way would be to get the element.
const betterfruit1 = fruit2.previousElementSibling;
betterfruit1.style.color = 'blue';
// best to incorporate the Element in the code, rather than the node. this is an example of the other side.
//previousElementSibling
//nextElementSibling

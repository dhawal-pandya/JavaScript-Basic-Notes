// createElement('element')
// createTextNode('text constent')
// element.appendChild(childElement)***************************

// Adding a new element to the html.
//create empty element
const bodyDiv = document.createElement('div');

//create text node
const text = document.createTextNode('A simple body div');

//appending text node to the bodyDiv
bodyDiv.appendChild(text);

//appending the bodyDiv to the body
document.body.appendChild(bodyDiv);

const result = document.querySelector('#result');
// console.log(result.children); // just to see what it selected.
const heading = document.createElement('h2');
heading.appendChild(document.createTextNode('we add things here'));
heading.classList.add('blue'); //also adding the class here.
result.appendChild(heading);

//insertBefore(element, location);**************
const heading2 = document.createElement('h3');
heading2.appendChild(document.createTextNode('Trying to insert before'));
const red = document.querySelector('.red');
document.body.insertBefore(heading2, result);

//replaceElement(new, old);**************
const newElement = document.createElement('div');
const textInNewElement = document.createTextNode('whattup biyatch?');
newElement.appendChild(textInNewElement);
newElement.classList.add('red');
document.body.replaceChild(newElement, heading2);

//prepend()********************
//append does it after the selected element, prepend does it before the element.
const run = document.createElement('h2');
heading.innerText = 'I am the dynamic prepended element.';
document.body.prepend(run);

//remove()*********************
const toBeRemoved = document.querySelector('.madeToRemove');
toBeRemoved.remove();
//there is also the removeChild property.

//innerHtml*****************
const lists = document.querySelector('.lists');
console.log(lists.innerHTML);
console.log(lists.textContent);
lists.innerHTML = `<li>new item1</li><li>new item2</li>`;
//a good idea would be to use template literals here to easily add unknown variables in the html.
// this method is superior to the other properties, because you dont need to create elements, then append them accordingly, here it is directly changing.

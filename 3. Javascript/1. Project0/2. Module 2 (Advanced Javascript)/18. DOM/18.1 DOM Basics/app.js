//DOM************
//Document Object Model

//similar to css

// Select the element or group of elements the way we want to affect
// Decide the effect we want to apply to the selection

// many different ways

document.body.style.backgroundColor = 'blue';
document.body.style.color = 'yellow';
document.getElementById('btn').style.color = 'red';

// assign to a variable

const element = document.getElementById('element');
//do something with that element using the variable

document.querySelector('element');
//do multiple somethings to the element

//Window Object*********
console.log(window);
// it is a global object, it is giant.
console.log(document);
// document comes inside window.
// it will only show you the html tree structure
// to find the property of the document, we use console.dir(document);
console.dir(document); // it too returns in the console.

//nodes ( to be learnt later)
// returns a node object or a node list, which is an arraylike object

const btn = document.getElementById('btn');
const nomen = btn.nodeName;
const css = btn.style;
console.log(btn);
console.log(nomen);
console.log(css);
// window object == returns browser api
// document within window.
// So technically it is like this...
//window.document.write() or window.alert() or even window.console()
// that is good, but JS tries to find the method in the parent element, all the way to the windows, and since it is directly written in it, it locates it and does what ever we want to do with it without us having to tell it windows.things

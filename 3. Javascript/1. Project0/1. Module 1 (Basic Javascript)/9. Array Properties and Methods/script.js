//Array Properties  and Methods********************
let names = ['john', 'bobo', 'dick', 'josephine', 'martha'];

console.log(names.length);
//this returns the number of items in the array.

console.log(names[4]);
console.log(names[names.length - 1]);

const lastName = ['pepper', 'onion', 'popopopo'];
const allNames = names.concat(lastName);
console.log(allNames);
// this is how we concatenate the arrays, using concat.

console.log(allNames.reverse());
// this flipped the array positions of all elements of whole array

//In the Beginning....
allNames.unshift('iron man');
console.log(allNames);
// thsi is how content is added to the front of the array.
allNames.shift();
console.log(allNames);
// we need not add anything to the shift() param, becasue it has to delete the content anyway.
allNames.shift('dick');
console.log(allNames);
// observe the value written inside the shift does not matter.

//In the End....
allNames.push('iron man');
console.log(allNames);
// thsi is how content is added to the end of the array.
allNames.pop();
console.log(allNames);
// we need not add anything to the pop() param, becasue it has to delete the content anyway.
allNames.pop('dick');
console.log(allNames);
// observe the value written inside the pop does not matter, it is only going to be popped.

//splice - mutates original array
const specificNames = allNames.splice(2, 4);
console.log(specificNames);
console.log(allNames);
//observe that the splice removed the elements from the original array.

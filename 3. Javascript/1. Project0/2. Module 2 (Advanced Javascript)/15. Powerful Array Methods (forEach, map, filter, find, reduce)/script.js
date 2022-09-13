// Powerful Array Methods
// forEach, map, filter, find, reduce
// Iterate over array  - no loop required
// Accept CALLBACK function as an argument, calls CAllback against each item in an array. Reference Item in the Callback Parameter.

const numbers = [0, 1, 2, 3, 4, 5, 6];

//to show all numbers

// for (i = 0; i < numbers.length; i++) {
//   console.log(numbers[i])
// }

//forEach*********************
// does not return a new array

const people = [
  { name: 'bob', age: 29, position: 'developer', id: 1, salary: 200 },
  { name: 'linda', age: 34, position: 'coder', id: 2, salary: 300 },
  { name: 'ramesh', age: 3, position: 'boss', id: 3, salary: 500 },
  { name: 'suresh', age: 12, position: 'developer', id: 4, salary: 500 },
];

function showPerson(accessInArray) {
  console.log(accessInArray.position.toUpperCase());
}

people.forEach(showPerson);
//might be remebered to not invoke it by writing showPerson(), the () is incorrect here, it is simply refered to.
//here the function is called seperately, as the function might be used multiple times.
people.forEach(function (item) {
  console.log(item.position.toUpperCase());
});
//here the function is used directly and doesn't even need to be named.
//basically forEach directly affects the array in question, if you need a new modified array you need to use it with something else, or use one of the other callbacks we are learning.

//map**********************

// does return a new array
// does not change the size of original array
// uses values from original array when making new one.

const ages = people.map(function (accessAge) {
  return accessAge.age + 20;
});
console.log(ages);
//
const newPeople = people.map(function (accessName) {
  return {
    firstName: accessName.name.toLowerCase(),
    oldAge: accessName.age + 40,
  };
});
console.log(newPeople);
//
function boldIt(burrito) {
  return `<h1>${burrito.name}</h1>`;
}
//the burrito here is just a parameter, it is more like a thing that holds the place of the value to be filled later by the function itself. so burrito,name becomes people.name when executed.
const boldNames = people.map(boldIt);

console.log(boldNames);
//document.body.innerHTML = boldNames.join('');
//currently line 61 is not working, gives an error. Ill figure it out later with time.
//I tried doing this one using a seperate function, only as a practice, but it is not necessary unless the function is used multiple times, for brevity you can always write it only once as needed.
//map essentially takes the array and copies it into a new array with the nodified version of the objects, but keeps the original intact.

//filter*******************

// does return a new array
// can manipulate the size of new array
// returns based on condition

const youngPeople = people.filter(function (person) {
  return person.age <= 25;
});

console.log('youngPeople');
console.log(youngPeople);
//
const developer = people.filter(function (person) {
  return person.position === 'developer';
});
console.log('developer');
console.log(developer);
//filter obviously filters through the objects and outputs a new array, accoding to the parameter we set using equivalences.

//find******************
// returns single instance (in this case, an object)
// returns first match, if no mat  then 'undefined'
// great for getting unique value.

const findPerson = people.find(function (person) {
  return person.id === 3;
});

console.log('findPerson');
console.log(findPerson);
//
const nomens = ['polo', 'guball', 'sutly', 'boy'];
console.log(
  nomens.find(function (person) {
    return person === 'boy';
  })
);
console.log(
  nomens.filter(function (person) {
    return person === 'boy';
  })
);
//observe the difference in outputs of find and filter, find returns individual items, while filter still returns arrays with single objects if that is what it is filtering into because the filter doesn't know it will be returning one or more elements, but in find, it is always just one element.
//it can be reconciled by just writing the index[0] to get it as an element directly.
console.log(
  nomens.find(function (person) {
    return person === 'harsh';
  })
);
// it finds individual cases very well and returns undefined on not 'finding' it.

//reduce*******************

//iterates, callback functions
// reduces to a single value - number, array, object
// 1 parameter ('acc') - total of all calculations
// 2 parameter ('curr') - current iteration/value

const total = people.reduce(function (acc, current) {
  console.log(`total ${acc}`);
  console.log(`current money : ${current.salary}`);
  acc += current.salary;
  return acc;
}, 0);
//***very important to remember to return acc always, never forget. */
console.log(total);
// the zero in the second parameter is the starting ampunt, hence 0, if you write some other amount, the values will be added over it.

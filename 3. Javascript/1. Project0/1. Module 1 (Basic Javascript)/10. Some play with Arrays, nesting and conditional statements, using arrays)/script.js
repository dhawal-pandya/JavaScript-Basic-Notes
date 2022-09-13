//Arrays and for loop**************

const names = ['bob', 'sugar', 'pies'];
const lastName = ['Shakes'];
let newArray = [];

for (i = 0; i < names.length; i++) {
  // here we use the fact that arrays are index based.
  let swarmy = names[i] + ' ' + lastName[0]; // can be written using template literals
  console.log(swarmy);
  //newArray.push(swarmy); OR
  newArray.push(`${names[i]} ${lastName}`);
}
console.log(newArray);

//Functions, return, if, arrays, for loop

const gas = [20, 40, 100, 30];
const food = [10, 40, 50];

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  if (total > 100) {
    console.log('HWoa, stop spending');
  }
  console.log('you can spend some more');
  return total;
}

const foodTotal = calculateTotal(food);
const gasTotal = calculateTotal(gas);
const randomTotal = calculateTotal([200, 400, 500, 3024]);

console.log({
  gas: gasTotal,
  food: foodTotal,
  random: randomTotal,
});
// this is just an exercise in doing more things with Arrays.

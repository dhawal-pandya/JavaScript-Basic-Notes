// let amount =  prompt("Bill amount:");
// let unitsUsed = prompt('Units Used:');
// let amount = 0;

// if (unitsUsed <= 50) {
//   amount = 3 * unitsUsed;
// } else if (unitsUsed >= 51 || unitsUsed < 150) {
//   amount = 5 * (unitsUsed - 50) + 150;
// } else {
//   amount = 10 * (unitsUsed - 150) + 650;
// }

// console.log(`Amount for units ${unitsUsed} is ${amount + 80}`);

//n == number of terms,
//x == the value of term.

let num = 12;
let x = 43;
let result = 0;
let pow = 0;
for (j = 0; j < num; j++) {
  pow = Math.pow(x, j);
  result += pow;
}
console.log(result);

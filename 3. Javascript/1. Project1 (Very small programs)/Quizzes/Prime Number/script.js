/*let string = prompt('Enter to check if prime number');
let num = parseInt(string);
let flag;
if (num == 2 || num == 1) {
  flag = true;
} else {
  for (i = 2; i < num; i++) {
    if (num % i == 0) {
      flag = false;
      break;
    } else {
      flag = true;
      break;
    }
  }
}
alert(flag);
*/

// to list the prime numbers.
// this is the sieve of eratosthenes
let upper = prompt(`All Primes upto 'x'. Enter 'x'`);
function start() {
  var array = [2, 3];
  for (var i = 5; i <= upper; i += 2) {
    if (
      array.every(function (p) {
        return i % p;
      })
    ) {
      array.push(i);
    }
  }
  var result = array.join('\n');
  console.log(result);
}
start();

let n = 4;
let set = '';

// console.log(`pattern 1 with input = ${n}`);
// for (i = 0; i < n * n; i++) {
//   for (j = 0; j < n * n; j++) {
//     if (j % n == i % n) {
//       set += ' *';
//     } else {
//       set += ' .';
//     }
//   }
//   set += '\n';
// }
// console.log(set);

// console.log(`pattern 2 with input = ${n}`);
// set = '';
// for (i = n * n; i > 0; i--) {
//   for (j = 1; j <= n * n; j++) {
//     if (j % n == i % n) {
//       set += ' *';
//     } else {
//       set += ' .';
//     }
//   }
//   set += '\n';
// }
// console.log(set);

/*console.log(`pattern 3 with input = ${n}`);
for (i = 0; i < n * n; i++) {
  let flag = true;
  for (j = 0; j < n * n; j++) {
    if (j % n == 0) {
      flag = !flag;
    }
    if (flag) {
      let k = n * n - j - 1;
      if (k % n == i % n) {
        set += ' *';
      } else {
        set += ' .';
      }
    } else {
      if (j % n == i % n) {
        set += ' *';
      } else {
        set += ' .';
      }
    }
  }
  set += '\n';
}
console.log(set);
*/

/*
console.log(`number pattern of table with input = ${n}`);
let num = 1;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    set += num;
    set += ' ';
    num++;
  }
  set += '\n';
}
console.log(set);
*/

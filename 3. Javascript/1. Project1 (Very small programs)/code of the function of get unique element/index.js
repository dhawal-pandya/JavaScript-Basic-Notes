// To output only unique elements

let arr = ['A', 'B', 'C', 'D', 'A', 'B', 'E'];
let newArr = [];
for (i = 0; i < arr.length; i++) {
  let x = false;
  for (j = 0; j < newArr.length; j++) {
    if (arr[i] == newArr[j]) {
      x = true;
    }
  }
  if (!x) {
    newArr.push(arr[i]);
  }
}
console.log(newArr);

let n = 5 // the number of iterations
let m = ''
// let m1 = '';
// let m2 = '';

//the filled box
/*
console.log("This is the Filled box");
for (i = 0; i < n; i++) {
  for (j = 0; j < n; j++) {
    m = m + '*';
  }
  m = m + '\n';
}
console.log(m);
*/

//the empty box
/*
console.log("This is the Empty box");
for (i = 0; i < n; i++) {
  for (j = 0; j < n; j++) {
    if (i === 0 || i === n - 1) {
      m = m + '*';
    } else {
      if (j === 0 || j === n - 1) {
        m = m + '*';
      } else {
        m = m + '.';
      }
    }
  }
  m = m + '\n';
}
console.log(m);
*/

//left triangle pattern
/*
console.log("This is Left Triangle");
for (i = 0; i < n; i++) {
  m += '*';
  console.log(m);
}
*/
//OR
/*
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    m += '*';
  }
  m += '\n';
}
console.log(m);
*/

// right triangle pattern
/*
console.log("This is Right Triangle");
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < n - i; j++) {
    m += '.';
  }
  for (let k = 0; k < i; k++) {
    m += '*';
  }
  m += '\n';
}
console.log(m);
*/

//downward triangle star pattern left
/*
console.log('This is Downward triangle left');
for (i = n; i > 0; i--) {
  for (j = 0; j < i; j++) {
    m += '*';
  }
  m += '\n';
}
console.log(m);
*/

//hollow triangle left
/*
console.log('This is hollow triangle');
for (i = 0; i <= n; i++) {
  for (j = 0; j < i; j++) {
    if (i === n) {
      m += '*';
    } else {
      if (j == 0 || j == i - 1) {
        m += '*';
      } else {
        m += '.';
      }
    }
  }
  m += '\n';
}
console.log(m);
*/

//Pyramid
/*
for (i = 0; i < n; i++) {
  for (j = n - i - 1; j >= 0; j--) {
    m += ' .'
  }
  for (k = 2 * i + 1; k > 0; k--) {
    m += ' *'
  }
  m += '\n'
}
console.log(m)
*/

//Reversed Pyramid
/*
for (i = n - 1; i >= 0; i--) {
  for (j = n - i - 1; j >= 0; j--) {
    m += ' .';
  }
  for (k = 2 * i + 1; k > 0; k--) {
    m += ' *';
  }
  m += '\n';
}
console.log(m);
*/

//Hollow Pyramid
/*for (i = 0; i < n; i++) {
  for (j = n - i - 1; j >= 0; j--) {
    m += ' .';
  }
  for (k = 2 * i + 1; k > 0; k--) {
    if (k == 1 || k == 2 * i + 1 || i == n - 1) {
      m += ' *';
    } else {
      m += ' .';
    }
  }
  m += '\n';
}

console.log(m);
*/

//Diamond Pattern
/*
for (i = 0; i < n; i++) {
  for (j = n - i - 1; j >= 0; j--) {
    m += ' .'
  }
  for (k = 0; k < 2 * i + 1; k++) {
    m += ' *'
  }
  m += '\n'
}
for (i = n - 2; i >= 0; i--) {
  for (j = n - i - 1; j >= 0; j--) {
    m += ' .'
  }
  for (k = 2 * i + 1; k > 0; k--) {
    m += ' *'
  }
  m += '\n'
}
console.log(m)
*/

//Hollow Diamond
/*
for (i = 0; i < n; i++) {
  for (j = n - i - 1; j >= 0; j--) {
    m += ' .';
  }
  for (k = 2 * i + 1; k > 0; k--) {
    if (k == 1 || k == 2 * i + 1) {
      m += ' *';
    } else {
      m += ' .';
    }
  }
  m += '\n';
}
for (i = n; i >= 0; i--) {
  for (j = n - i - 1; j >= 0; j--) {
    m += ' .';
  }
  for (k = 2 * i + 1; k > 0; k--) {
    if (k == 1 || k == 2 * i + 1) {
      m += ' *';
    } else {
      m += ' .';
    }
  }
  m += '\n';
}
console.log(m);
*/

//Hourglass Pattern
/*
for (i = n - 1; i >= 0; i--) {
  for (j = n - i - 1; j >= 0; j--) {
    m += ' .';
  }
  for (k = 2 * i + 1; k > 0; k--) {
    m += ' *';
  }
  m += '\n';
}
for (i = 0; i < n; i++) {
  for (j = n - i - 1; j >= 0; j--) {
    m += ' .';
  }
  for (k = 2 * i + 1; k > 0; k--) {
    m += ' *';
  }
  m += '\n';
}
console.log(m);
*/

//Right Pascal Triangle
/*
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    m += '*';
  }
  m += '\n';
}
for (i = n; i > 0; i--) {
  for (j = 0; j < i; j++) {
    m += '*';
  }
  m += '\n';
}
console.log(m);
*/

//Right Pascal Triangle
/*
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < n - i; j++) {
    m += '.';
  }
  for (let k = 0; k < i; k++) {
    m += '*';
  }
  m += '\n';
}
for (let i = n - 1; i > 0; i--) {
  for (let j = 0; j < n - i; j++) {
    m += '.';
  }
  for (let k = 0; k < i; k++) {
    m += '*';
  }
  m += '\n';
}
console.log(m);
*/

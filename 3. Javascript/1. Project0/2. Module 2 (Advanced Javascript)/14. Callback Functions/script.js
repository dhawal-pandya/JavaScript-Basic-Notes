// Callback Functions, Higher Order Functions, Functions as First Class Objects/Citizens
// Funtions as First Class objects -  stored in a variable(expression), passsed aas an argument to another function, return from the function(closure)(comes later).

// Higher Order Functions- accepts another function as an argument or returns another function as a result.

// Callback Function- passed to another function as an argument and executed inside that function.

function sqNum(num) {
  console.log(num * num);
  return;
}

function addNum(num1, num2, dick) {
  result = num1 + num2;
  console.log(result);
  dick(result);
  return;
}
addNum(10, 20, sqNum);
// the sqNum is not called like a function directly. but it is passed as an argument inside another function.
//this is called callback function.
// it is true that in this particular example that a callback function is not necessary here, but it is only given as an example to understand tha meaning of callback function.
//callback functions are used usually to output somethings that have to fruit after some time the page loads, or after the data from backend has come and then put it on the screen, so that is where the utility of calback function shines.

window.onload = function bobo(e) {
  let x = document.getElementById('txt');
  var counter = 1;
  var intervalToken = setInterval(function () {
    if (counter > 9) {
      clearInterval(intervalToken);
    }

    x.value = `${counter} seconds`;
    counter++;
  }, 1000);

  setTimeout(function () {
    x.value = 'wow you waited for 10 seconds, pussy';
  }, 10000);
};
//for this to work we need to put the script below the code for the dom manipulation to work properly.
//find out how to use window.onload or something like that for this...

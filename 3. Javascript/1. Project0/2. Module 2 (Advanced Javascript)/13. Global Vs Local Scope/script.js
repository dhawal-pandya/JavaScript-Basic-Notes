// Global Scope vs Local Scope

//Global Scope*******************
// any variable outside of the code block is said to  be in a Global Scope.
// Globals can be acccessed across the code
// but one needs to be careful of  name collisions, or be modified by mistake.

// an example of mistake.

let nomen = 'toga';
nomen = 'rigaa';

function calc() {
  //some code...
  console.log(nomen);
  nomen = 'ligasol';
}
//some code...
calc();
//some code...
console.log(nomen);
// all this only happened becasue your nomen variable was accessible from everywhere.
// one way to protect your variables is to declare and assign a new variable inside the function(even with the same name), it will shadow your varaibale, and will not affect the variable outside. for example if you do this...

// function calc() {
//   //some code...
//   let nomen = 'ligasol';
//   console.log(nomen);
// }
// then your external variable will not be harmed, and the internal variable's scope will not interfere.

//
//Local Scope**************************
// we are talking about const and let mostly. var has some exceptions.
// cannot be accessed by outside code blocks
// if - not var
// anything declared inside a set of {} is a local variable.
// literally without a function or even a condtional, just a set of {} is a block

// Variable lookup************
// if you use a variable inside a scope but you have not decalred it in there, it will look for its declaration in its parent, then too if the variable is not declared there, it will move higher, all the way to the global scope.
// if it is not found anywhere then it will say it is not declared.

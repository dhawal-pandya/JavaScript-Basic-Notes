// Dynamic Event elements
// event propogation - order of the firing of the events
// event bubbling - code in the clicked element fires first then bubbles up its containment heirarchy -- default
// event capturing/trickling - code of the highest in the heirarchy is executed and then it goes all the down to the chain.

document.querySelector('#grandparent').addEventListener(
  'click',
  () => {
    console.log('grandparent was clicked');
  },
  { capture: false }
); // capture: false is the default
document.querySelector('#parent').addEventListener(
  'click',
  () => {
    console.log('parent was clicked');
  },
  { capture: false }
);
document.querySelector('#child').addEventListener(
  'click',
  (e) => {
    console.log('child was clicked');
    e.stopPropagation();
  },
  { capture: false }
);
// play around with different values of capture. currently it is bubbling.
// the order of execution of all these functions when going from child to gparent is called bubbling. when the capture is true the order is reversed, and it is called capturing/trickling.
// it was a result of a friction between netscape and microsoft, and ultimately the w3c allowed both giving developers freedom to do choose either as they wished.
// also the e.stopPropogation stops the bubbling or trickling at the point where it is executed.

// Events************************

//click event*******

// select element
//addEventListener(what event, what to do);

const btn = document.querySelector('.btn');
const h2 = document.querySelector('h2');

btn.addEventListener('click', function () {
  h2.classList.add('red');
  btn.classList.add('blue');
}); // in this method you can only add the style though.

//uncomment this code to make it flip between style or not.
// function changeColors() {
//   let hasClass = h2.classList.contains('red');
//   if (hasClass) {
//     h2.classList.remove('red');
//   } else {
//     h2.classList.add('red');
//   }

//   btn.classList.add('blue');
// }
// btn.addEventListener('click', changeColors);

//other than click event*********
//click - fires anfeter full action occurs.
//mousedown - button is pressed
//mouseup - button is release
//mousedown - moved onto an element.
//mouseleave - moved out of the element

// keypress events**********
//keypress - when key is pressed
//keydown - when key is down
//keyup - when key is released

const nameInput = document.getElementById('name');

nameInput.addEventListener('keypress', function () {
  nameInput.classList.add('red');
  console.log(nameInput.value); //logs the whole thing at every key press.
});

//Event Object***************

// const btn = document.querySelector('.btn');// commented because already made earlier in the code.
// const h2 = document.querySelector('h2');

btn.addEventListener('click', function (event) {
  console.log(event.currentTarget);
});
// even though writing the names of the query we want the changes to apply ot are good to know, sometimes the generic function made for them may not have the name of the selected query.
// so this "event" is written in the function to make sure that the same element is selected that was called the function in the first place.

// a generic fucntion would look like this.
function change(event) {
  event.currentTarget.classList.add('blue');
  console.log(event.type);
}
// now this function can be called by any addEventListener().
//there is also event.type which returns click for click and keypress for keypress, and so on.
// you can always use "this" instead of "event.currentTarget" , but that will not work for ES6, so best to avoid it for now.

//preventDefault() - prevents default behaviour

const link = document.querySelector('a');
link.addEventListener('click', function (e) {
  e.preventDefault();
});
// this prevents the default behaviour of the html,
// usually used in forms, because filling of forms and pressing submit buttons usually refreshes the page, so to avoid that, we use this preventDefault()

//currentTarget and target*****************

// currentTarget - always refers to the element to which the event handler has been attached to
// target - identifies the element on which the event occured

const btns = document.querySelectorAll('.bun');

btns.forEach(function (bunn) {
  bunn.addEventListener('click', function (e) {
    console.log(e.currentTarget);
    e.currentTarget.style.color = 'green';
    //the currentTarget will color the element the eventlistener is attached to, in this case, the whole button.
    console.log(e.target);
    e.target.style.color = 'purple';
    // the target will only color the clicked element. if you just click on the af, only that part of it will be coloured. it detects and colour literally only the clicked element.
  });
});

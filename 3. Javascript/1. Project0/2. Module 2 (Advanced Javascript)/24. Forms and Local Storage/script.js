// submit event listener

const form = document.getElementById('form');
const name = document.getElementById('name');
const password = document.getElementById('password');

form.addEventListener('submit', function (e) {
  console.log('form submitted'); // just this will not work as the submit does submit it to an external file, but it also refreshes the page which we have to stop from happening, using the preventDefault().
  e.preventDefault();
  console.log(name.value);
  console.log(password.value);
});

// Web Storage API - provided by browser
// session storage, local storage
// setItem, getItem, removeItem, clear

// localStorage.setItem("name", "Dhawal");
// localStorage storage stores data even if we close the tab. usually stored by carts and other ways.
// sessionStorage.setItem("name", "Dhawal");
// sessionStorage stores data as long as we keep the tab open, on refreshing it stays, but on closing the tab it goes.

localStorage.setItem('nomen', 'Dhawal');
localStorage.setItem('nomen', 'Albus'); //replaces names
localStorage.setItem('friend', 'Viral');
localStorage.setItem('job', 'SDE3');
localStorage.setItem('address', 'NYC');

const nomen = localStorage.getItem('nomen');
console.log(nomen);
// this is how the values are retrived.// useful for many things like night mode remembering.

localStorage.removeItem('name');
//that is how you can clear individual items.

localStorage.clear();
// clears all local storage.

// JSON.stringify(), JSON.parse()

const friends = ['john', 'peter', 'orange'];
localStorage.setItem('friends', friends);
// this is slightly stupid because this way you will convert the array into a string.
const values = localStorage.getItem('friends');
console.log(values[0]); // this will only output 'j'.

const betterFriends = ['john', 'peter', 'orange'];
localStorage.setItem('betterFriends', JSON.stringify(betterFriends));
// this will keep it an array.
const betterValues = JSON.parse(localStorage.getItem('betterFriends'));
console.log(betterValues[0]); // this will output 'john'.

let password = 'wordpass';
let response = ' ';
let responseLowercase = response.toLowerCase(); // it is bad practice to include it inside the condition, for example: while(response.toLowerCase() != password){}. this wont work.
let entryCount = 0;
let entryLimit = 3;
let entryTries = entryLimit;
let error = false;

while (responseLowercase != password && !error) {
  if (entryCount < entryLimit) {
    response = window.prompt(
      `Enter password here, you pussy! You have ${entryTries} tries left`
    );
    entryCount++;
    responseLowercase = response.toLowerCase();
    entryTries--;
    //console.log(response);
    //console.log(responseLowercase);
  } else {
    error = true;
  }
}
if (error) {
  alert(`Entered Password too many times, you pussy`);
  window.stop(); //stops the page from loading.
  //location.reload();//reloads the page and gives three more tries.
} else {
  alert(`You got it!`);
}

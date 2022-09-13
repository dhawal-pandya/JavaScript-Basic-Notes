// Date
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const date = new Date();
//const date = new Date('10/9/1997'); //if you want to work with a specific date, then you can add it herein the format of mmddyyyy. I hate this format, but wygd.

console.log(date); // returns date, but very uglily, and not readable.

console.log(date.getMonth()); // will only return the index of the month.
console.log(months[date.getMonth()]); // will return the name.

console.log(date.getDay()); //same as month
console.log(days[date.getDay()]); //same as month

//try in a line.
const sent = `Today is a ${days[date.getDay()]} on the ${date.getDate()}th of ${
  months[date.getMonth()]
} in ${date.getFullYear()}`;
console.log(sent);

//imp... Do not forget the () at the end of the getDay() or getMonth(), because otherwise it will just give undefined, and it is a very easily doable mistake, so take care.)

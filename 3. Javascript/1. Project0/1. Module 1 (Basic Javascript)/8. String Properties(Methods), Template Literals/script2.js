var words = "strings are cool";

document.write(words.length);
document.write(words.toUpperCase());
document.write(words.toLowerCase());
document.write(words.charAt(1));
// the charAt gives us the character at the position, starts with 0, then 1,2...
document.write(words.indexOf("r"));
document.write(words.lastIndexOf("r"));
document.write(words.indexOf("q"));
// gives the value of -1 when not present.
document.write(words.substring(0,5));
document.writeln();
document.write(words.substring(words.indexOf("c"), words.length));
// methods can be passed into other methods as parameters.
document.write(words.includes("cool"));
document.write(words.endsWith("cool"));
// returns value about things we want to know.

var happy = "wish you a very happy";
var birthday = "birthday!!!"
document.write(happy + birthday);
// called concatonation coming from con= with catena= chain latin.

document.write(2 + 3);
document.write(2 * (2 + 3));
document.write(11 % 3);
// % is mod, meaning it gives back the remainder of the division, instead of the quotient

var num1 = "9";
var num2 = "4";

document.write(Math.abs(num1));
document.write(Math.min(num1,num2));
document.write(Math.pow(num1, num2));
// power takes the num1 to num2 power.
document.write(Math.round(Math.random() * 10));
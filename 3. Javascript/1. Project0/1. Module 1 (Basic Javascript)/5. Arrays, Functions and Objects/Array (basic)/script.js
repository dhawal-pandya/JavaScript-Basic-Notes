var fruits = new Array("Apples", "Oranges", "Peaches");
// another way to create an array is this.
var vegetables = ["Tomatoes", "Potatoes", "Onions"];

document.write(fruits);
document. write("\n");
//ignore this, this is my attempt to seperate the elements.
document.write(vegetables);
document. write("\n");
document.write(vegetables[2]);
//this is called indexing the array, meaning you introduce the index number of the element in the array.
document.write("\n");
document.write(vegetables.length);
// this is calling a specific element of an array.

document. write("\n");
vegetables[2] = "Ladyfingers";
document.write(vegetables[2]);
//here we modified the value inside an array.

var bikes = "Ducati, BMW, Honda, Yamaha";
bikes = bikes.split(",")
document.write("\n");
document.write( bikes[2]);
// the bikes.split will split my variable using whatever I use to sperate the differert parts of it. in this case tis a comma. 
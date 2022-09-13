var num1 = window.prompt("Enter the 1st number")
num1 = parseInt(num1);
var num2 = window.prompt("Enter the 2nd number")
num2 = parseInt(num2);
var op = window.prompt("Enter the  fucntion you want between the two numbers, out of + - * /");
var ans
// parseInt makes whatever i type into actual numbers.
// parseFloat also allows decimals.
if (op = "+") {
    document.write(num1 + num2)
    }
else if (op = "-") {
    document.write(num1 - num2)
    }

else if (op = "*") {
    document.write(num1 * num2)
    }

else if (op = "/") {
    document.write(num1 / num2)
    }

else {
    alert.window("Wrong Operator")
}
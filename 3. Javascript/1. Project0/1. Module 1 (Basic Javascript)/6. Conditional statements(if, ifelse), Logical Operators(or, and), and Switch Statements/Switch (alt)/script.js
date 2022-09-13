function getDayName(dayNum){

    var day;

    switch (dayNum) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            day = "Day doesn't exist." + "<br>" + dayNum + " isn't a valid number"
            // the default not necessarily needs to be the last, but if it isn't then you need to add the break; under it.
    }
    return day;
    // switch statements are used when there is a very long list of if elses required. here individual cases are used.
}

document.write(getDayName(40));


// experiment1
document.write("<br>");
document.write("<br>");
function onOrOff(re) {
    var x;
    switch (re) {
        case 1:
            x = "on"
            break;
        case 2:
            x = "off"
            break;
        case 3:
            x = " 3! wtf"
            break;
        default:
            x = "wtf, come on man, do the code properly"
            break;
    }
    document.write("It is " + re + " " + x);
}
onOrOff(5);
// the variable in the function must be the same with the variable of switch statement. also another variable is required for the working, to set  values in the switch statements.

// end of experiment1


// experiment2
document.write("<br>");
document.write("<br>");
var foo = 0;
// the lenght of the sentence will depend on the number defined in foo. Observe here it is used with out a function.
var output = 'Output: ';
switch (foo) {
  case 0:
    output += 'This ';
  case 1:
    output += 'is  ';
    output += 'a very ';
  case 2:
    output += 'cheesy ';
  case 3:
    output += 'sentence';
  case 4:
    output += ', no?';
    document.write(output);
    break;
  case 5:
    output += ' Or what?';
    document.Write(output);
    break;
  default:
    document.write('Please pick a number from 0 to 5!');
}
// also the case need not be numbered, the case is applying the case value as a value of the variable defined in its parameter. meaning here case 3 is taken from foo = 3. it can be apples, oranges or apache helicopters.

// end of experiment2
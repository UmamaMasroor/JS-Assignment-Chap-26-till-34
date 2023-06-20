// question 4
// Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

let num1 = Math.floor(Math.random() * 6 ) + 1;
let num2 = Math.floor(Math.random() * 6 ) + 1;

document.write ("1st random dice value " + num1 );
document.write ("<br>");
document.write ("2nd random dice value " + num2 );
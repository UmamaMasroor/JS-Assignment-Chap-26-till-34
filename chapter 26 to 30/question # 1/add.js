// question 1
// Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

let number = prompt("Write positive integer of your own choice");
document.write("Number " + number);
document.write("<br>")
number = parseInt(number); 
document.write ("Round off "+ number);
document.write("<br>");
let floorNo = Math.floor(number);
document.write("Floor number " + floorNo);
document.write("<br>")

number = Math.ceil(number); 
document.write ("ceil value "+ number);

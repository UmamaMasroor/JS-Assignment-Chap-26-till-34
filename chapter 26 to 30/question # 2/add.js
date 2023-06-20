// question 2
// Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

let negNumber = prompt ("Enter negative floating point");
document.write("number " + negNumber)
document.write("<br>")
negNumber = Math.round(negNumber);
document.write("round number " +negNumber);
document.write("<br>");
negNumber = Math.floor(negNumber);
document.write("floor value " +negNumber);
document.write("<br>");
negNumber = Math.ceil(negNumber);
document.write("ceil value " +negNumber);


// question 2
// 2. Write a program that alerts the current month in words.
// For example December.

// Get the current date
let currentDate = new Date();

let monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

let currentMonthIndex = currentDate.getMonth();
let currentMonth = monthNames[currentMonthIndex];

alert(currentMonth);

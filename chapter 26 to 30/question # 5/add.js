// question 5
// Generate a random number between 0 and 1
const randomNum = Math.random();

// Determine the result based on the random number
const coinResult = randomNum < 0.5 ? "Heads" : "Tails";

// Display the coin result in the browser
document.write(coinResult)

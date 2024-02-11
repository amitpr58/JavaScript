//Question -create a function using thr "function"keyword that takes a string an argument and return the number of vowels in the string.
function countVowels(str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log("Number of vowels:", count);
}

// Prompt the user for input
var userInput = prompt("Please enter a string:");

// Check if the user entered something
if (userInput !== null) {
  // Call the function with user input
  countVowels(userInput);
} else {
  console.log("No input provided.");
}

// Question= for a given Array of number ,print the square of each value using the "forEach loop"
let numstring = prompt("Enter the number seperate by comma");
let num=numstring.split(",").map(Number);
num.forEach((nums) => {
    console.log(nums," square is",nums*nums);// other method of square =num**2
}
);

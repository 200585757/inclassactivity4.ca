// Qs1. Get user to input a number using prompt(“Enter a number:”). Check if the number is a multiple of 5 or not.

let num = prompt("Enter a number:");
if (num % 5 === 0) {
    console.log(`${num} is a multiple of 5`);
} else {
    console.log(`${num} is not a multiple of 5`);
}

// Qs2. Write a code which can give grades to students according to their scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let score = prompt("Enter the student's score:");

if (score >= 80 && score <= 100) {
    console.log("Grade: A");
} else if (score >= 70 && score <= 79) {
    console.log("Grade: B");
} else if (score >= 60 && score <= 69) {
    console.log("Grade: C");
} else if (score >= 50 && score <= 59) {
    console.log("Grade: D");
} else if (score >= 0 && score <= 49) {
    console.log("Grade: F");
} else {
    console.log("Invalid score.");
}

// ----------------------------------------
// # Calculator Challenge
// **Instructions:**
// Create a function called `calculator` that takes three parameters: `num1`, `num2` and `operator`. The operator can be `+`, `-`, `*` or `/`. The function should return the result of the calculation. If anything other than the four operators is passed in, the function should return an error message.
// **Example:**
```
calculator(5, 2, '+') // returns 7
calculator(5, 2, '-') // returns 3
calculator(5, 2, '*') // returns 10
calculator(5, 2, '/') // returns 2.5
calculator(5, 2, '&') // returns an error message
```
// **Hint:**
// - You can use an if statement for the operator, but this is also a good example for using a switch statement.
// ------------------------------------------------------------------------------------------------------------------------------

function calculator(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Error: Division by zero";
            }
        default:
            return "Error: Invalid operator";
    }
}

// # FizzBuzz Challenge
// **Instructions:**
// - Print/log the numbers from 1 to 100
// - For **multiples of three** print "Fizz" instead of the number
// - For **multiples of five** print "Buzz"
// - For numbers which are **multiples of both three and five** print "FizzBuzz".

// Examples:
console.log(calculator(5, 2, '+')); // 7
console.log(calculator(5, 2, '-')); // 3
console.log(calculator(5, 2, '*')); // 10
console.log(calculator(5, 2, '/')); // 2.5
console.log(calculator(5, 2, '&')); // Error message


for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}



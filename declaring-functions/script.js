// Task 1: Declare a function using the function keyword
// Task 2: Declare a function using an arrow function
// Task 3: Console log different messages inside each function

function sayHi() {
  console.log("Traditional function");
}

sayHi();

const sayHello = () => {
  console.log("Arrow function");
};

sayHello();

// --- 10 Practice Tasks ---
// Example 1: Create a traditional function that logs a message

function logMessage() {
  console.log("You are awesome!");
}

logMessage();

// Example 2: Create an arrow function that logs a message

const logNewMessage = () => {
  console.log("You are stilllll awesome!");

}

logNewMessage();

// Example 3: Create a function that adds two numbers

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

console.log(addTwoNumbers(4, 5));

// Example 4: Create an arrow function that multiplies two numbers

const multiplyNumber = (number1, number2) => {
  return number1 * number2;
}

console.log(multiplyNumber(345, 44));

// Example 5: Create a function that squares a number

function squareNumber(number) {
  
  return number ** 2;
}

console.log(squareNumber(6));

// Example 6: Create an arrow function that divides two numbers

const divideNumber = (num1, num2) => {
  return num1/num2;
}

console.log(divideNumber(10, 5));


// Example 7: Create a function that logs the current date

function currentDate() {
  return new Date();
}

console.log(currentDate());

// Example 8: Create an arrow function that shouts

const shout = (sentence) => {
  return sentence.toUpperCase();
}

console.log(shout("hello there!"));
// Example 9: Create a function that whispers

function whisper(sentence) {
  return sentence.toLowerCase();
}

console.log(whisper("WHATS UP!"));

// Example 10: Create an arrow function that returns a random number

const randomNumber = () => {
  return Math.round(Math.random()* 10 + 1);
}

console.log(randomNumber());
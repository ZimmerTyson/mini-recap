// Task 1: Create an array of numbers
// Task 2: Use map to return a new array with each number doubled
// Task 3: Console log the new array

const numbers = [2, 4, 6];
const doubled = numbers.map((n) => n * 2);
console.log(doubled);

// --- 10 Practice Tasks ---
// Example 1: Double each number in an array using map

const number = [20, 40, 77];
const double = number.map((n) => n * 2);

console.log(double);

// Example 2: Convert each word to uppercase using map

const words = ['hello', 'howdy', 'gday'];
// const uppercase = words.map((upper) => upper.toUpperCase());

// console.log(uppercase);

// Another way to do number 2: 

console.log(words.map((animals) => animals.toUpperCase()));

// Example 3: Add 1 to each number using

const numbersArr = [1, 2, 3, 4];
console.log(numbersArr.map((num) => num + 1));

// Example 4: Square each number in array using map

const squareNum = [2, 4, 5, 6];
console.log(squareNum.map((num) => num * num));

// Example 5: Add exclamation mark to letters using map

const letters = ['i', 'j', 'k'];
console.log(letters.map((letter) => letter + '!'));


// Example 6: Flip each boolean using map

const bool = [true, false, true, true];

console.log(bool.map(function (value) {
  return !value;
  }

))

// Example 7: Add 'yrs' to each age using map

const age = [10, 20, 30, 40];

console.log(age.map(function (number) {
  return `${number} yrs`;
}))

// Example 8: Get length of each name using map

const names = ['bob', 'janice', 'cliff', 'buddy', 'tyson'];

console.log(names.map(function (name) {
  return name.length;
}))

// Example 9: Convert Celsius to Fahrenheit using map

const temperature = [28, 69, 20, 75];

console.log(temperature.map(function (temp) {
  return (temp * 9/5) + 32;
}))

// Example 10: Prefix IDs with 'ID-' using map

const idNumbers = [1234, 44324, 23523, 26532];

console.log(idNumbers.map(function (id) {
  return `ID-${id}`;
}))


// Example 11: capitalize the color green in the array

const colors = ['blue', 'green', 'red'];

console.log(colors.map(function (color) {
  if (color === 'green') {
    return color.toUpperCase();
  }
  return color.charAt(0).toUpperCase() + color.slice(1);
}))
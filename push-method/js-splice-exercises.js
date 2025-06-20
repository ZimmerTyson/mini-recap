//Remove an item
let fruits = ['apple', 'mango', 'kiwi'];

fruits.splice(1, 2);

console.log(fruits);

// Insert an item 
let colors = ['yellow', 'blue', 'green'];

colors.splice(1, 0, 'red');

console.log(colors);


//replace an item

let pet = ['dog', 'cat'];

pet.splice(1, 1, 'rabbit');
console.log(pet);


// #1

let fruit = ['apple', 'banana', 'pear', 'cherry'];

fruit.splice(3, 1);
console.log(fruit);


// #2

let number = [1, 2, 30, 40, 5];

number.splice(2, 2);

console.log(number);

// #3

let color = ['blue', 'red', 'green'];
color.splice(2, 0, 'yellow');

console.log(color);


// #4

let animals = ['dog', 'bird', 'cat'];

animals.splice(2, 1, 'elephant');
console.log(animals);


// #5

let months = ['jan', 'feb', 'mar', 'apr'];

months.splice(0, 1);
console.log(months);

// #6

let scores = [23, 53, 56, 77];

scores.splice(scores.length-1 , 1);
console.log(scores);

// #7

let items = ['pen', 'pencil'];
items.splice(1, 0, 'notebook', 'marker');

console.log(items);

// #8

let letters = ['a', 'b', 'c'];

let clonedLetters = [...letters];

clonedLetters.splice(0, clonedLetters.length);

console.log(letters, clonedLetters);


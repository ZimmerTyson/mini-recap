// Task 1: Create an object with name and age
// Task 2: Destructure the object and log the values
// Task 3: Create an array with 3 items
// Task 4: Destructure the array and log the values
// const person = { name: "Aimee", age: 30 };
// const { name, age } = person;
// console.log(name, age);


// const person = {name: "Tyson", age: 30};
// const {name, age} = person;
// console.log(name, age)



// --- 10 Practice Tasks ---
// Example 1: Destructure name and age from an object

const newPerson = {name: "Sam", age: 50};
const {name, age} = newPerson;

console.log(name, age);

// Example 2: Destructure X and Y from an object

const findArea = {x: 120, y: -555};
const {x, y} = findArea;

console.log(x, y);

// Example 3: Destructure values from an array

const arrayExample = ["Hello", "Hope you are doing well!", "what's up!"];
const [first, , third] = arrayExample;

console.log(first, third);

// Example 4: Destructure two fruit names from array

const fruits = ["apple", "banana", "mango"];
const [firstFruit, , thirdFruit] = fruits;

console.log(firstFruit, thirdFruit);

// Example 5: Destructure job from info object

const info = {job: "Accountant", salary: "$20/hr"}
const {job} = info;

console.log(job);

// Example 6: Destructure boolean and language from array

const languages = [true, "JS"]
const [theme, language] = languages;

console.log(theme, language);

// Example 7: Destructure title from post object

const post = {title: "CEO", role: "Run this bish"};
const {title} = post;

console.log(`Title: ${title}`);

// Example 8: Destructure RGB values from array

const colors = [255, 235, 20];
const [red, green, blue] = colors;

console.log(`RGB: (${red},${green},${blue})`);

// Example 9: Destructure score and level from object

const currentStats = {score: 10005, level: 28};
const {score, level} = currentStats;

console.log(`Current Score: ${score} Current Level: ${level}`);

// Example 10: Destructure enabled and theme from array

const activeTheme = [true, "Dark Theme"];
const [active, themeStyle] = activeTheme;

console.log(active, themeStyle)

// Extra Task:
// Destructure the first name and last name from an array called fullName
// Then log both values in a sentence like: "First: ___, Last: ___"


const fullName = ["Tyson", "Zimmer"];
const [firstName, lastName] = fullName;

console.log(`First: ${firstName}, Last: ${lastName}`);
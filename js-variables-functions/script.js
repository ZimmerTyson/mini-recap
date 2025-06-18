let myName = "Tyson";

console.log(myName);

let myAge = 27;

console.log(myAge);

let likesChocolate = true;

console.log(likesChocolate);

let hobbies = ['drawing', 'working out', 'coding'];
console.log(hobbies);

let profile = {name: 'Tyson', age: 27};
console.log(profile);

function getMyName() {
    return myName;
}
console.log(getMyName());

function squareNumber(num) {
    return num*num;
}

console.log(squareNumber(5));

function isEven(num) {
    if(num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(3));
console.log(isEven(6));

function addNumber(num1, num2) {
    return num1 + num2;
}

console.log(addNumber(4, 5)); 


let emptyValue = null;
let notAssigned;

function getStringLength(string) {
    return string.length;
}

console.log(getStringLength("hello! This is a test"));


function greetPerson(name) {
 return `Howdy ${name}`;
}

console.log(greetPerson('Tiny'));

console.log("You are awesome at coding and problem solving! Keep going")
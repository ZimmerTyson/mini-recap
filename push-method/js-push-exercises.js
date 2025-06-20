// #1

let cars = [];
const carsToPush = ['Toyota', 'Honda', 'porch', 'Chevy'];

cars.push(...carsToPush);


console.log(cars);

// #2

const cities = ['Los Angeles', 'Mexico City'];
cities.push('Seattle', 'Chicago', 'New York');

console.log(cities);


// #3

const numbers = [];

for (let i = 1; i <= 5; i++) {
    numbers.push(i);
}

console.log(numbers);


// #4

const students = [];

let person1 = {name: 'Alice', age: 20};
let person2 = {name: 'Bob', age: 35};

students.push(person1, person2);

console.log(students);

// #5

const nestedArray = [];

const arr1 = [12, 35, 4356];
const arr2 = ['pete', 'kevin', 'sydney'];
const arr3 = ['Los Angeles', 'New York'];

nestedArray.push(arr1, arr2, arr3);

console.log(nestedArray);


// #6

const evenNumbers = [];

function isEven(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
        }
    }
    console.log(evenNumbers);
}

isEven(20);

// #7

const array1 = ['name1', 'name2', 'nam3'];
const array2 = ['name4', 'name5', 'name6', 'name7'];

array1.push(...array2);
console.log(array1);



// #8

const userInputs = [];

const input1 = document.createElement("input");
document.body.append(input1);
input1.type = "text";
input1.name = "input1";

input1.style.display = "block";

const input2 = document.createElement("input");
document.body.append(input2);
input2.type = "text";
input2.name = "input2";

input2.style.display = "block";
input2.style.marginTop = "5px";

const input3 = document.createElement("input");
document.body.append(input3);
input3.type = "text";
input3.name = "input3";


input3.style.display = "block";
input3.style.marginTop = "5px";

const submitButton = document.createElement("button");
document.body.append(submitButton);
submitButton.type = "submit";

submitButton.textContent = "Submit";
submitButton.style.marginTop = "5px";


submitButton.addEventListener("click", function() {
    userInputs.push(input1.value, input2.value, input3.value);
    console.log(userInputs);


    // you could also create a variable to store the input values and then push using something like userInputs.push(...allValues)
})


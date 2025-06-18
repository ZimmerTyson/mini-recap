function sayHi() {
    console.log("Traditional Function");
}

sayHi();

const sayHello = () => {
    console.log("Arrow function");
};

sayHello();


function logMessage() {
    console.log('message');
}

logMessage();


const logNewMessage = () => {
    console.log('new arrow function message');
};

logNewMessage();

const addTwoNumbers = (num1, num2) => {
    console.log(num1 + num2);
}

addTwoNumbers(50, 20);


const multiNumbers = (num1, num2) => {
    return num1 * num2;
};

console.log(multiNumbers(20, 20));


const squareNumber = (number) => number * number;

console.log(squareNumber(2));


const divideNumber = (number1, number2) => {
    console.log(number1 / number2);
};

divideNumber(12, 2);


function currentDate() {
    let day = new Date();
    return day;
}

console.log(currentDate());


const shout = () => {
    console.log("HHHHHHEEEEEELLLO");
}

shout();


function whisper() {
    console.log('hello from a whisper');
}

whisper();


const random = (max) => {
    return Math.floor(Math.random() * max) + 1;
}

console.log(random(20));

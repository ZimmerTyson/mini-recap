## Creating Functions

Functions are reusable blocks of code that perform a specific task.


**Think of it like:** Writing a recipe once and reusing it every time you want to cook that dish

### Why it works
- You define a function using the 'function' keyword followed by a name and parentheses.
- The code inside the curly braces '{}' runs when the function is called.

```js

function greet() {
    console.log("hello");
}

greet(); // calling the function
```

Here, `greet()` runs the code inside the function. it prints 'Hello!' to the console.

***Why this is useful*** you avoid repeating the same code over and over again.


## Declaring Functions

You can declare functions in multiple ways:

- Traditional way using `function` keyword
- Arrow function using `=>`

**Why it works:**

- both define a function but arrow functions are shorter and do not build their own `this`.
- use arrow functions for simpler tasks, and traditional ones when you need access to `this` or hoisting.

```js

//traditional functions
function sayHello() {
    console.log("Hi!");
}

sayHello();


// arrow function

const greet = () => {
    console.log("Hello!");
};

greet();
```

# Understanding `this`
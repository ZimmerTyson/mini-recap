## Destructuring Objects and Arrays

**Destructuring** means pulling values out of objects or arrays into variables.

**Analogy:** Like unpacking a suitcase and putting the contents directly into drawers.

### Why it works:
- With objects, it matches variable names to property names.
- With arrays, it takes values by position. Unlike objects, the parameters you create are based on their position. your parameters will go in order of the indexes in the array. to skip an item in an array, you can separate values with a comma and space in the destructured variable. Ex: [first, , third].

```js
const user = { name: 'Ana', age: 25 };
const { name, age } = user; // object

const colors = ['red', 'blue'];
const [first, second] = colors; // array


```
# ECMAScript 6

## Features

- [ECMAScript 6](#ecmascript-6)
  - [Features](#features)
  - [let](#let)
  - [const](#const)
  - [arrow functions](#arrow-functions)
  - [default parameters](#default-parameters)
  - [rest parameters](#rest-parameters)
  - [spread operator](#spread-operator)
  - [template literals](#template-literals)
  - [destructuring](#destructuring)
  - [for of](#for-of)
  - [classes](#classes)
  - [promises](#promises)


## let

The `let` statement declares a block scope local variable, optionally initializing it to a value.

```js
let x = 1;
if (x === 1) {
  let x = 2;
  console.log(x);
  // expected output: 2
}
console.log(x);
// expected output: 1
```

## const

The `const` statement declares a block scope local variable, optionally initializing it to a value.

```js
const PI = 3.141593;
PI > 3.0;
// true
```

## arrow functions

An arrow function expression has a shorter syntax than a function expression and does not have its own `this`, `arguments`, `super`, or `new.target`. These function expressions are best suited for non-method functions, and they cannot be used as constructors.

```js

// ES5

var multiplyES5 = function(x, y) {
  return x * y;
};

// ES6

const multiplyES6 = (x, y) => { return x * y };

// or

const multiplyES6 = (x, y) => x * y;

```

## default parameters

Default function parameters allow formal parameters to be initialized with default values if no value or undefined is passed.

```js
// ES5

function multiply(a, b) {
  b = (typeof b !== 'undefined') ?  b : 1;
  return a * b;
}

// ES6

function multiply(a, b = 1) {
  return a * b;
}

```

## rest parameters

The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

```js
// ES5

function multiply(multiplier, ...theArgs) {
  return theArgs.map(x => multiplier * x);
}

// ES6

function multiply(multiplier, ...theArgs) {
  return theArgs.map(x => multiplier * x);
}

```

## spread operator

The spread operator allows an expression to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) are expected.

```js

// ES5

var arr = [1, 2, 3];

var arr2 = [4, 5, 6].concat(arr);

// ES6

let arr = [1, 2, 3];

let arr2 = [4, 5, 6, ...arr];

```

## template literals

Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.

```js

// ES5

var a = 5;

var b = 10;

console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');

// ES6

let a = 5;

let b = 10;

console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);

```

## destructuring

The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

```js

// ES6

let a, b, rest;

[a, b] = [1, 2];

console.log(a); // 1

console.log(b); // 2

[a, b, ...rest] = [1, 2, 3, 4, 5];

console.log(rest); // [3, 4, 5]

```

## for of

The for...of statement creates a loop iterating over iterable objects (including Array, Map, Set, arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.

```js

// ES6

let iterable = [10, 20, 30];

for (let value of iterable) {
  console.log(value);
}

```

## classes

Classes are in fact "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations.

```js

// ES5

var Rectangle = function(width, height) {
  this.width = width;
  this.height = height;
};

Rectangle.prototype.area = function() {
  return this.width * this.height;
};

// ES6

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}

```


## promises

The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

```js

// ES6

function asyncFunc(work) {
  return new Promise(function(resolve, reject) {
    if (work === "")
      reject(Error("Nothing"));
    setTimeout(function() {
      resolve(work);
    }, 1000);
  });
}

asyncFunc("Work 1") // Task 1
.then(result => {
  console.log(result);
  return asyncFunc("Work 2"); // Task 2
})
.then(result => {
  console.log(result);
})
.catch(error => {
  console.log(error);
});

console.log("End");

```

/*!
 * JavaScript Patterns, by Stoyan Stefanov (O'Reilly). Copyright 2010 Yahoo!, Inc., 9780596806750.
 */

/* Primitive Wrappers */

// Example 1 - primitive wrapper objects can be created using the built-in constructors

// a primitive number
var n = 100;
console.log(typeof n); // 'number'

// a Number object
var nobj = new Number(100);
console.log(typeof nobj); // 'object'


// Example 2 - the wrapper objects' properties and methods work on primitives too

// a primitive string be used as an object
var s = 'hello';
console.log(s.toUpperCase()); // 'HELLO'

// the value itself can act as an object
'monkey'.slice(3, 6); // 'key'

// same for numbers
(22 / 7).toPrecision(3); // '3.14'


// Example 3 - use wrapper objects when you want to augment the value and persist state

// primitive string
var greet = 'Hello there';

// primitive is converted to an object
// in order to use the split() method
greet.split(' ')[0]; // 'Hello'

// attemting to augment a primitive is not an error
greet.smile = true;

// but it doesn't actually work
typeof greet.smile; // 'undefined'


// Example 4 - when used without new, wrapper constructors return a primitive value

typeof Number(1); // 'number'
typeof Number('1'); // 'number'
typeof Number(new Number()); // 'number'
typeof String(1); // 'string'
typeof Boolean(1); // 'boolean'
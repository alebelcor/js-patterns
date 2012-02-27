/*!
 * JavaScript Patterns, by Stoyan Stefanov (O'Reilly). Copyright 2010 Yahoo!, Inc., 9780596806750.
 */

/* Array Literal */

// Example 1 - making arrays using the array constructor and array literal

// array of three elements
// warning: antipattern
var a = new Array('itsy', 'bitsy', 'spider');

// the exact same array
var a = ['itsy', 'bitsy', 'spider'];

console.log(typeof a); // 'object', because arrays are objects
console.log(a.constructor === Array); // true


// Example 2 - consistent behavior with the array literal, dynamic behavior with the array constructor

// an array of one element
var a = [3];
console.log(a.length); // 1
console.log(a[0]); // 3

// an array of three elements
var a = new Array(3);
console.log(a.length); // 3
console.log(typeof a[0]); // 'undefined'

// using array literal
var a = [3.14];
console.log(a[0]); // 3.14
var a = new Array(3.14); // RangeError: invalid array length
console.log(typeof a); // 'undefined'


// Example 3 - using isArray to check for array-ness

// the typeof operator is insufficient

console.log(typeof [1, 2]); // 'object'

// isArray from ECMAScript 5

Array.isArray([]); // true

// trying to fool the check
// with an array-like object
Array.isArray({
    length: 1,
    '0': 1,
    slice: function () {}
}); // false

// implement isArray method when it's missing

if (typeof Array.isArray === 'undefined') {
    Array.isArray = function (arg) {
       return Object.prototype.toString.call(arg) === '[object Array]';
    };
}

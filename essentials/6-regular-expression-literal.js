/*!
 * JavaScript Patterns, by Stoyan Stefanov (O'Reilly). Copyright 2010 Yahoo!, Inc., 9780596806750.
 */

/* Regular Expression Literal */

// Example 1 - create a regular expression using the literal or the constructor

// regular expression literal
var re = /\\/gm;

// constructor
var re = new RegExp('\\\\', 'gm');


// Example 2 - using the literal helps write more concise code

var no_letters = 'abc123XYZ'.replace(/[a-z]/gi, '');
console.log(no_letters); // 123


// Example 3 - in ES3, the literal creates an object only once. This behavior has changed in ES5

function getRE() {
    var re = /[a-z]/;
    re.foo = 'bar';
    return re;
}

var reg = getRE(),
    re2 = getRE();

console.log(reg === re2); // true
reg.foo = 'baz';
console.log(re2.foo); // 'baz'
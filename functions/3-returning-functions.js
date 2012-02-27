/*!
 * JavaScript Patterns, by Stoyan Stefanov (O'Reilly). Copyright 2010 Yahoo!, Inc., 9780596806750.
 */

/* Returning Functions */

// Example 1 - since functions are objects they can be returned from functions

var setup = function () {
    alert(1);
    return function () {
        alert(2);
    };
};

// using the setup function
var my = setup(); // alerts 1
my(); // alerts 2


/* Example 2 - this creates a closure in which the returned function has access to its
container's variables */

var setup = function () {
    var count = 0;
    return function () {
        return (count += 1);
    };
};

// usage
var next = setup();
next(); // returns 1
next(); // 2
next(); // 3


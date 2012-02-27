/*!
 * JavaScript Patterns, by Stoyan Stefanov (O'Reilly). Copyright 2010 Yahoo!, Inc., 9780596806750.
 */

/* Avoiding Implied Typecasting */

// Example 1 - use === and !==

var zero = 0;
if (zero === false) {
    // not executing because zero is 0, not false
}


// Example 2 - avoid eval()

// antipattern
var property = 'name';
alert(eval('obj.' + property));

// preferred
var property = 'name';
alert(obj[property]);


// Example 3 - avoid passing strings to setInterval() and setTimeout() and the Function() constructor

// antipatterns
setTimeout('myFunc()', 1000);
setTimeout('myFunc(1, 2, 3)', 1000);

// preferred
setTimeout(myFunc, 1000);
setTimeout(function () {
    myFunc(1, 2, 3);
}, 1000);


// Example 4 - if you must choose, use the Function() constructor over eval()

(function () {
    var local = 1;
    eval('local = 3; console.log(local)'); // logs 3
    console.log(local); // logs 3
}());

(function () {
    var local = 1;
    Function('console.log(typeof local);')(); // logs undefined
}());

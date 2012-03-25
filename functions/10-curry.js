/*!
 * JavaScript Patterns, by Stoyan Stefanov (O'Reilly). Copyright 2010 Yahoo!, Inc., 9780596806750.
 */

/* Curry */

// Example 1 - Function "application" (invokation) with the apply() method

// define a function
var sayHi = function (who) {
    return 'Hello' + (who ? ', ' + who : '') + '!';
};

// invoke a function
sayHi(); // 'Hello'
sayHi('world'); // 'Hello, world!'

// apply a function
sayHi.apply(null, ['hello']); // 'Hello, hello!'


/* Example 2 - Invoking a object's method is just like applying a function and
sending the object as the first argument. */

var alien = {
    sayHi: function (who) {
        return 'Hello' + (who ? ', ' + who : '') + '!';
    }
};

alien.sayHi('world'); // 'Hello, world!'
sayHi.apply(alien, ['humans']); // 'Hello, humans!'


/* Example 3 - The call() method does the same as apply() but it takes arguments
separated by commas. */

// the second is more efficient, saves an array
sayHi.apply(alien, ['humans']); // 'Hello, humans!'
sayHi.call(alien, 'humans'); // 'Hello, humans!'


// Example 4 - Partially applying arguments.

// for illustration purposes
// not valid JavaScript

// we have this function
function add(x, y) {
    return x + y;
}

// and we know the arguments
add(5, 4);

// step 1 -- substitute one argument
function add(5, y) {
    return 5 + y;
}

// step 2 -- substitute the other argument
function add(5, 4) {
    return 5 + 4;
}

/* Example 5 - Partial application gives us another function, which can then be
called with the other arguments. */


var add = function (x, y) {
    return x + y;
};

// full application
add.apply(null, [5, 4]); // 9

// partial application
var newadd = add.partialApply(null, [5]);
// applying an argument to the new function
newadd.apply(null, [4]); // 9


// Example 6 - Curried add()

// a curried add()
// accepts partial list of arguments
function add(x, y) {
    var oldx = x, oldy = y;
    if (typeof oldy === 'undefined') { // partial
        return function (newy) {
            return oldx + newy;
        };
    }
    // full application
    return x + y;
}

// test

typeof add(5); // 'function'
add(3)(4); // 7

// create and store a new function
var add2000 = add(2000);
add2000(10); // 2010


// Example 7 - A compact version

// a curried add
// accepts partial list of arguments
function add(x, y) {
    if (typeof y === 'undefined') { // partial
        return function (y) {
            return x + y;
        };
    }
    // full application
    return x + y;
}


/* Example 8 - A function to transform a function into a new one that accepts
partial parameters. */

function schonfinkelize(fn) {
    var slice = Array.prototype.slice,
        stored_args = slice.call(arguments, 1);
    return function () {
        var new_args = slice.call(arguments),
            args = stored_args.concat(new_args);
        return fn.apply(null, args);
    };
}


// Example 9 - Testing the schonfinkelize() function

// a normal function
function add(x, y) {
    return x + y;
}

// curry a function to get a new function
var newadd = schonfinkelize(add, 5);
newadd(4); // 9

// another option -- call the new function directly
schonfinkelize(add, 6)(7); // 13


// Example 10 - More usage examples

// a normal function
function add(a, b, c, d, e) {
    return a + b + c + d + e;
}

// works with any number of arguments
schonfinkelize(add, 1, 2, 3)(5, 5); // 16

// two-step currying
var addOne = schonfinkelize(add, 1);
addOne(10, 10, 10, 10); // 41
var addSix = schonfinkelize(addOne, 2, 3);
addSix(5, 5); // 16

/*!
 * JavaScript Patterns, by Stoyan Stefanov (O'Reilly). Copyright 2010 Yahoo!, Inc., 9780596806750.
 */

/* Background */

// Example 1 - named function expression

var add = function add(a, b) {
    return a + b;
};


// Example 2 - unnamed function expression, function expression or anonymous function

var add = function (a, b) {
    return a + b;
};


// Example 3 - function declaration

function foo() {
    // function body goes here
}


// Example 4 - passing a function object as a parameter

// this is a function expression,
// pased as an argument to the function 'callMe'
callMe(function () {
    // I am an unnamed function expression
    // also known as an anonymous function
});

// this is a named function expression
callMe(function me() {
    // I am a named function expression
    // and my name is 'me'
});

// another function expression
var myobject = {
    say: function () {
        // I am a function expression
    }
};


// Example 5 - function declarations can only appear in "program code"

// global scope
function foo() {}

function local() {
    // local scope
    function bar() {}
    return bar;
}


// Example 6 - availability of the read-only name property

function foo() {} // declaration
var bar = function () {}; // expression
var baz = function baz() {}; // named expression

foo.name; // 'foo'
bar.name; // ''
baz.name; // 'baz'


// Example 7 - function declarations get both their declaration and definition hoisted

// antipattern
// for illustration only

// global functions
function foo() {
    alert('global foo');
}

function bar() {
    alert('global bar');
}

function hoistMe() {

    console.log(typeof foo); // 'function'
    console.log(typeof bar); // 'undefined'

    foo(); // 'local foo'
    bar(); // TypeError: bar is not a function

    // function declaration:
    // variable 'foo' and its implementation both get hoisted

    function foo() {
        alert('local foo');
    }

    // function expression:
    // only variable 'bar' gets hoisted
    // not the implementation
    var bar = function () {
        alert('local bar');
    };

}
hoistMe();

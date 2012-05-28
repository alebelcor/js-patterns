/*!
 * JavaScript Patterns, by Stoyan Stefanov (O'Reilly). Copyright 2010 Yahoo!, Inc., 9780596806750.
 */

/* Namespace Pattern */

/* Example 1 - instead of polluting the global scope with a lot of functions, objects,
and other variables, like this: */

// BEFORE: 5 globals
// Warning: antipattern

// constructors
function Parent() {}
function Child() {}

// a variable
var some_var = 1;

// some objects
var module1 = {};
module1.data = {a: 1, b: 2};
var module2 = {};

// You can refactor this type of code by creating a single global object for your application

// AFTER: 1 global

// global object
var MYAPP = {};

// constructors
MYAPP.Parent = function () {};
MYAPP.Child = function () {};

// a variable
MYAPP.some_var = 1;

// an object container
MYAPP.modules = {};

// nested objects
MYAPP.modules.module1 = {};
MYAPP.modules.module1.data = {a: 1, b: 2};
MYAPP.modules.module2 = {};


// Example 2 - checking if the namespace exists before defining it

// unsafe
var MYAPP = {};

// better
if (typeof MYAPP === 'undefined') {
    var MYAPP = {};
}

// or shorter
var MYAPP = MYAPP || {};


// Example 3 - using a namespace function to take care of the details

// using a namespace function
MYAPP.namespace('MYAPP.modules.module2');

// equivalent to:
// var MYAPP = {
//     modules: {
//         module2: {}
//     }
// };


// Example 4 - an implementation of the namespace function

var MYAPP = MYAPP || {};
MYAPP.namespace = function (ns_string) {
    var parts = ns_string.split('.'),
        parent = MYAPP,
        i;

    // strip redundant leading global
    if (parts[0] === 'MYAPP') {
        parts = parts.slice(1);
    }

    for (i = 0; i < parts.length; i += 1) {
        // create a property if it doesn't exist
        if (typeof parent[parts[i]] === 'undefined') {
            parent[parts[i]] = {};
        }
        parent = parent[parts[i]];
    }
    return parent;
};


// Example 5 - how it can be used

// assign returned value to a local var
var module2 = MYAPP.namespace('MYAPP.modules.module2');
module2 === MYAPP.modules.module2; // true

// skip initial 'MYAPP'
MYAPP.namespace('modules.module51');

// long namespace
MYAPP.namespace('once.upon.a.time.there.was.this.long.nested.property');

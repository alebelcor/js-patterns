/*!
 * JavaScript Patterns, by Stoyan Stefanov (O'Reilly). Copyright 2010 Yahoo!, Inc., 9780596806750.
 */

/* Naming Conventions */

// Example 1 - capitalize constructor functions to set them apart

function MyConstructor() {...}
function myFunction() {...}


// Example 2 - separating words using common conventions

new Myconstructor(); // upper camel case for constructors
getFirstName(); // lower camel case for functions and methods
first_name // using underscores to separate words
lastName // or lower camel case for variables

// Example 3 - other naming patterns

// all caps separated by underscores to denote variables that shouldn't change (constants)
var PI = 3.14,
    MAX_WIDTH = 800;

// prefix with an underscore to denote privacy
var person = {
    getName: function () {
        return this._getFirst() + ' ' + this._getLast();
    },
    _getFirst: function () {
        // ...
    },
    _getLast: function () {
        // ...
    }
};

// varieties to the _private convention:
getElements_(); // trailing underscore to mean private
_getRelatives(); // one underscore prefix for _protected properties
__getFirstName(); // and two for __private
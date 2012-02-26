/*!
 * JavaScript Patterns, by Stoyan Stefanov (O'Reilly). Copyright 2010 Yahoo!, Inc., 9780596806750.
 */

/* Object Literal */

// Example 1 - declaration and initialization with the object literal

var dog = {
    name: 'Benji',
    getName: function () {
        return this.name;
    }
};


// Example 2 - don't use the Object() constructor

// one way -- using a literal
var car = { goes: 'far' };

// another way -- using a built-in constructor
// warning: this is an antipattern
var car = new Object();
car.goes = 'far';

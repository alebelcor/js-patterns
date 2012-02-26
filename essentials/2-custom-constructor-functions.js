/*!
 * JavaScript Patterns, by Stoyan Stefanov (O'Reilly). Copyright 2010 Yahoo!, Inc., 9780596806750.
 */

/* Custom Constructor Functions */

// Example 1 - using the constructor's prototype to augment objects

var Person = function (name) {
    this.name = name;
    this.say = function () {
        return 'I am ' + this.name;
    };
};

var adam = new Person('Adam');
adam.say(); // 'I am Adam'

// better

var Person = function (name) {
    this.name = name;
};

Person.prototype.say = function () {
    return 'I am ' + this.name;
};

var adam = new Person('Adam');
adam.say(); // 'I am Adam'


// Example 2 - return any object in the constructor

var Objectmaker = function () {
    // this 'name' property will be ignored
    // because the constructor
    // decides to return another object instead
    this.name = "This is it";

    // creating and returning a new object
    var that = {};
    that.name = "And that's that";
    return that;
};

var o = new Objectmaker();
console.log(o.name); // "And that's that"
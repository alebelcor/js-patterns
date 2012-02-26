/*!
 * JavaScript Patterns, by Stoyan Stefanov (O'Reilly). Copyright 2010 Yahoo!, Inc., 9780596806750.
 */

/* Patterns for enforcing new */

// Example 1 - forgetting to use the new keyword when invoking a constructor function

// constructor
function Waffle() {
    this.tastes = 'yummy';
}

// a new object
var good_morning = new Waffle();
console.log(typeof good_morning); // 'object'
console.log(good_morning.tastes); // 'yummy'

// antipattern:
// forgotten 'new'
var good_morning = Waffle();
console.log(typeof good_morning); // 'undefined'
console.log(window.tastes); // 'yummy'


// Example 2 - using a naming convention, like upper camel case

// you can tell it's a constructor
function Waffle() {
    this.tastes = 'yummy';
}

// you can tell it's a function
function alertMe(msg) {
    alert('There\'s something you should know: ' + msg);
}


// Example 3 - using that, construct the object yourself and return it

function Waffle() {
    var that = {};
    that.tastes = 'yummy';
    return that;
}

// or just return an object literal

function Waffle() {
    return {
        tastes: 'yummy'
    };
}

var first = new Waffle(),
second = Waffle();
console.log(first.tastes); // 'yummy'
console.log(second.tastes); // 'yummy'

// this works but constructed objects will not inherit anything from the constructor's prototype


// Example  - self-invoking constructor

function Waffle() {
    if (!(this instanceof Waffle)) {
       return new Waffle();
    }
    this.tastes = 'yummy';
}
Waffle.prototype.wantAnother = true;

// testing invocations
var first = new Waffle(),
    second = Waffle();

console.log(first.tastes); // 'yummy'
console.log(second.tastes); // 'yummy'
console.log(first.wantAnother); // true
console.log(second.wantAnother); // true 
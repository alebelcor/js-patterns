/*!
 * JavaScript Patterns, by Stoyan Stefanov (O'Reilly). Copyright 2010 Yahoo!, Inc., 9780596806750.
 */

/* Immediate Object Initialization */

// Example 1 - protecting global scope pollution

({
    // here you can define setting values
    // a.k.a. configuration constants
    maxwidth: 600,
    maxheight: 400,

    // you can also define utility methods
    gimmeMax: function () {
        return this.maxwidth + 'x' + this.maxheight;
    },

    // initialize
    init: function () {
        console.log(this.gimmeMax());
        // more init tasks...
    }
}).init();

// Example 2 - Other wrappings

({...}).init();
({...}.init());

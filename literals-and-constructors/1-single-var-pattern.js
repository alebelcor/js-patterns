/*!
 * JavaScript Patterns, by Stoyan Stefanov (O'Reilly). Copyright 2010 Yahoo!, Inc., 9780596806750.
 */

/* Single var Pattern*/

// Example 1 - multiple declarations

function func() {
    var a = 1,
        b = 2,
        sum = a + b,
        myobject = {},
        i,
        j;

    // function body...
}


// Example 2 - assigning DOM references

function updateElement() {
    var el = document.getElementById('result'),
        style = el.style;

    // do something with el and style...
}

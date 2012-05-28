/*!
 * JavaScript Patterns, by Stoyan Stefanov (O'Reilly). Copyright 2010 Yahoo!, Inc., 9780596806750.
 */

/* Declaring Dependencies */

// Example 1 - declaring module dependencies at the top of your function

var myFunction = function () {
    // dependencies
    var event = YAHOO.util.Event,
        dom = YAHOO.util.Dom;

    // use event and dom variables
    // for the rest of the function...
};


// Example 2 - it also helps performance by making minified code smaller

function test1() {
    alert(MYAPP.modules.m1);
    alert(MYAPP.modules.m2);
    alert(MYAPP.modules.m51);
}

/*
minified test1 body:
alert(MYAPP.modules.m1);alert(MYAPP.modules.m2);alert(MYAPP.modules.m51)
*/

function test2() {
    var modules = MYAPP.modules;
    alert(modules.m1);
    alert(modules.m2);
    alert(modules.m51);
}

/*
minified test2 body:
var a=MYAPP.modules;alert(a.m1);alert(a.m2);alert(a.m51)
*/

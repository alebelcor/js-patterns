/*!
 * JavaScript Patterns, by Stoyan Stefanov (O'Reilly). Copyright 2010 Yahoo!, Inc., 9780596806750.
 */

/* for Loops */

// Example 1 - with caching

for (var i = 0, max = myarray.length; i < max; i++) {
    // do something with myarray[i]
}


// Example 2 - with caching and using single var pattern

function looper() {
    var i = 0,
        max,
        myarray = [];
    // ...
}


for (i = 0, max = myarray.length; i < max; i++) {
    // do something with myarray[i]
}

// Example 3 - 1st variation of the for pattern with micro-optimizations

var i, myarray = [];

for (i = myarray.length; i--;) {
    // do something with myarray[i]
}


// Example 4 - 2nd variation of the for pattern with micro-optimizations

var myarray = [],
    i = myarray.length;

while (i--) {
    // do something with myarray[i]
}

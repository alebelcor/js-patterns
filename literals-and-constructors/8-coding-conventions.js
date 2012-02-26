/*!
 * JavaScript Patterns, by Stoyan Stefanov (O'Reilly). Copyright 2010 Yahoo!, Inc., 9780596806750.
 */

/* Coding Conventions */

// Example 1 - indentation

function outer(a, b) {
    var c = 1,
        d = 2,
        inner;
    if (a > b) {
        inner = function () {
            return {
                r: c - d
            };
        };
    } else {
        inner = function () {
            return {
               r: c + d
            };
        };
    }
    return inner;
}


// Example 2 - always use curly braces

// bad practice
for (var i = 0; i < 10; i += 1)
alert(i);

// better
for (var i = 0; i < 10; i += 1) {
    alert(i);
}

// bad
if (true)
    alert(1);
else
    alert(2);

// better
if (true) {
    alert(1);
} else {
    alert(2);
}


// Example 3 - opening brace location on the same line as the previous statement

// warning: unexpected return value
function func() {
    return
    {
        name: "Batman"
    };
}

// better
function func() {
    return {
        name: "Batman"
    };
}


// Example 4 - white space

// antipattern
// missing or inconsistent spaces
// make the code confusing
var d= 0,
    a =b+1;
if (a&& b&&c) {
d=a %c;
    a+= d;
}

// generous and consistent spacing
// makes the code easier to read
// allowing it to "breathe"
var d = 0,
    a = b + 1;
if (a && b && c) {
    d = a % c;
    a += d;
}
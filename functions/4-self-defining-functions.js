/*!
 * JavaScript Patterns, by Stoyan Stefanov (O'Reilly). Copyright 2010 Yahoo!, Inc., 9780596806750.
 */

/* Self-Defining Functions */

/* Example 1 - overwriting a function definition while defining it, also called lazy function
definition */

var scareMe = function () {
    alert('Boo!');
    scareMe = function () {
        alert('Double boo!');
    };
};

// using the self-defining function
scareMe(); // Boo!
scareMe(); // Double boo!


/* Example 2 - drawbacks, properties added to the original function will be lost and if the
function is used with a different name, the redefinition will not happen */

// 1. adding a new property
scareMe.property = 'properly';

// 2. assigning to a different name
var prank = scareMe;

// 3. using as a method
var spooky = {
boo: scareMe
};

// calling with a new name
prank(); // 'Boo!'
prank(); // 'Boo!'
console.log(prank.property); // 'properly'

// calling as a method
spooky.boo(); // 'Boo!'
spooky.boo(); // 'Boo!'
console.log(spooky.boo.property); // 'properly'

// using the self-defined function
scareMe(); // Double boo!
scareMe(); // Double boo!
console.log(scareMe.property); // undefined

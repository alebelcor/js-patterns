/*!
 * JavaScript Patterns, by Stoyan Stefanov (O'Reilly). Copyright 2010 Yahoo!, Inc., 9780596806750.
 */

/* Configuration Objects */

// Example 1 - Function that takes a first name and a last name

function addPerson(first, last) {...}


// Example 2 - DOB needs to be stored too and gender and address optionally

function addPerson(first, last, dob, gender, address) {...}


// Example 3 - Username also needs to be added

addPerson('Bruce', 'Wayne', new Date(), null, null, 'batman');


/* Example 4 - Taking a configuration object solves the function's long signature problem,
you don't have to remember the order of the arguments, you can safely ommit optional
parameters, etc. */

var conf = {
    username: 'batman',
    first: 'Bruce',
    last: 'Wayne'
};
addPerson(conf);

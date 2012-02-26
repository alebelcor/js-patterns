/*!
 * JavaScript Patterns, by Stoyan Stefanov (O'Reilly). Copyright 2010 Yahoo!, Inc., 9780596806750.
 */

/* for-in Loops */

// Example 1 - filtering

for (var i in man) {
    if (man.hasOwnProperty(i)) { // filter
        console.log(i, ':', man[i]);
    }
}


// Example 2 - call from Object.prototype

for (var i in man) {
    if (Object.prototype.hasOwnProperty.call(man, i)) { // filter
        console.log(i, ':', man[i]);
    }
}


// Example 3 - call from Object.prototype with caching

var i,
    hasOwn = Object.prototype.hasOwnProperty;
for (i in man) {
    if (hasOwn.call(man, i)) { // filter
       console.log(i, ':', man[i]);
    }
}


// Example 4 - formatting variation of the above

// Warning: doesn't pass JSLint
var i,
    hasOwn = Object.prototype.hasOwnProperty;
for (i in man) if (hasOwn.call(man, i)) { // filter
    console.log(i, ':', man[i]);
}
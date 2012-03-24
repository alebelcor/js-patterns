/*!
 * JavaScript Patterns, by Stoyan Stefanov (O'Reilly). Copyright 2010 Yahoo!, Inc., 9780596806750.
 */

/* Function Properties - A Memoization Pattern */

// Example 1 - Memoization is the process of caching the results of a function

var myFunc = function (param) {
    if (!myFunc.cache[param]) {
        var result = {};
        // ... expensive operation ...
        myFunc.cache[param] = result;
    }
    return myFunc.cache[param];
};

// cache storage
myFunc.cache = {};


// Example 2 - Serializing the arguments and using that as the key to the cache

var myFunc = function () {

    var cachekey = JSON.stringify(Array.prototype.slice.call(arguments)),
        result;

    if (!myFunc.cache[cachekey]) {
        result = {};
        // ... expensive operation ...
        myFunc.cache[cachekey] = result;
    }
    return myFunc.cache[cachekey];
};

// cache storage
myFunc.cache = {};


// Example 3 - Using arguments.callee (not allowed in ES5 Strict Mode)

var myFunc = function (param) {
    var f = arguments.callee,
        result;

    if (!f.cache[param]) {
        result = {};
        // ... expensive operation ...
        f.cache[param] = result;
    }
    return f.cache[param];
};

// cache storage
myFunc.cache = {};

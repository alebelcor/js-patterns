/*!
 * JavaScript Patterns, by Stoyan Stefanov (O'Reilly). Copyright 2010 Yahoo!, Inc., 9780596806750.
 */

/* Callback Pattern */

// Example 1 - passing a function as a parameter, making it a callback function

function writeCode(callback) {
    // do something...
    callback();
    // ...
}

function introduceBugs() {
    // ... make bugs
}

writeCode(introduceBugs);


// Example 2 - refactoring, using the callback pattern, from:

var findNodes = function () {
    var i = 100000, // big, heavy loop
        nodes = [], // stores the result
        found; // the next node found
    while (i) {
        i -= 1;
        // complex logic here...
        nodes.push(found);
    }
    return nodes;
};

var hide = function (nodes) {
    var i = 0, max = nodes.length;
    for (; i < max; i += 1) {
        nodes[i].style.display = 'none';
    }
};

// executing the functions
hide(findNodes());

// to:

// refactored findNodes() to accept a callback
var findNodes = function (callback) {
    var i = 100000,
        nodes = [],
        found;

    // check if callback is callable
    if (typeof callback !== 'function') {
        callback = false;
    }

    while (i) {
        i -= 1;

        // complex logic here...

        // now callback:
        if (callback) {
            callback(found);
        }

        nodes.push(found);
    }
    return nodes;
};

// a callback function
var hide = function (node) {
    node.style.display = 'none';
};

// find the nodes and hide them as you go
findNodes(hide);

// or using an anonymous function

// passing an anonymous callback
findNodes(function (node) {
    node.style.display = 'block';
});


// Example 3 - proper binding of a callback to an object

var myapp = {};
myapp.color = 'green';
myapp.paint = function (node) {
    node.style.color = this.color;
};

var findNodes = function (callback) {
    // ...
    if (typeof callback === 'function') {
        callback(found);
    }
    // ...
};

findNodes(myapp.paint, myapp); // oops

// alternative 1 - pass the object

findNodes(myapp.paint, myapp);

var findNodes = function (callback, callback_obj) {
    //...
    if (typeof callback === 'function') {
        callback.call(callback_obj, found);
    }
    // ...
};

// alternative 2 - pass method name as string

findNodes('paint', myapp);

var findNodes = function (callback, callback_obj) {
    if (typeof callback === 'string') {
        callback = callback_obj[callback];
    }
};
//...
if (typeof callback === 'function') {
    callback.call(callback_obj, found);
}
// ...


// Example 4 - an example of an asynchronous event listeners

document.addEventListener('click', console.log, false);


// Example 5 - setTimeout() and setInterval() are other examples of the callback pattern

var thePlotThickens = function () {
    console.log('500ms later...');
};
setTimeout(thePlotThickens, 500);

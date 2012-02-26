/*!
 * JavaScript Patterns, by Stoyan Stefanov (O'Reilly). Copyright 2010 Yahoo!, Inc., 9780596806750.
 */

/* JSON */

/* Example 1 - example of a JSON string, property names need to be wrapped in quotes and you cannot use
functions */
or regular expressions literals.

var foo = {
    "name": "value",
    "some": [1, 2, 3]
};


// Example 2 - it's best to use the native JSON.parse() method from ES5.

// an input JSON string
var jstr = '{"mykey": "my value"}';

// antipattern
var data = eval('(' + jstr + ')');

// preferred
var data = JSON.parse(jstr);
console.log(data.mykey); // 'my value'


/* Example 3 - if the native function is unavailable, use the JSON.org library unless you are already
working with a JavaScript library that does the job */

/* Using YUI3 */

// an input JSON string
var jstr = '{"mykey": "my value"}';

// parse the string and turn it into an object
// using a YUI instance
YUI().use('json-parse', function (Y) {
    var data = Y.JSON.parse(jstr);
    console.log(data.mykey); // "my value"
});

/* Using jQuery */

// an input JSON string
var jstr = '{"mykey": "my value"}';

var data = jQuery.parseJSON(jstr);
console.log(data.mykey); // "my value"


/* Example 4 - JSON.stringify() does the opposite. It takes any object or array (or a primitive) and
serializes it into a JSON string */

var dog = {
    name: "Fido",
    dob: new Date(),
    legs: [1, 2, 3, 4]
};

var jsonstr = JSON.stringify(dog);

// jsonstr is now:
// {"name":"Fido","dob":"2012-01-01T19:00:00.436Z","legs":[1,2,3,4]}

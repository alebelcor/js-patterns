/*!
 * JavaScript Patterns, by Stoyan Stefanov (O'Reilly). Copyright 2010 Yahoo!, Inc., 9780596806750.
 */

/* Immediate Functions */

// Example 1 - immediate function pattern

(function () {
    alert('watch out!');
}());


// Example 2 -another flavor of the immediate function pattern, not liked by JSLint

(function () {
    alert('watch out!');
})();


// Example 3 - create a local scope to avoid leaking variables into the global scope

(function () {
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        today = new Date(),
        msg = 'Today is ' + days[today.getDay()] + ', ' + today.getDate();

    alert(msg);
}()); // 'Today is Fri, 13'


// Example 4 - passing arguments to an immediate function

// prints:
// I met Joe Black on Fri Aug 13 2010 23:26:59 GMT-0800 (PST)

(function (who, when) {

    console.log("I met " + who + " on " + when);

}("Joe Black", new Date()));


// Example 5 - passing the global object so it's accessible through a parameter

(function (global) {

    // access the global object via 'global'

}(this));


// Example 6 - returning a value from an immediate functions call

var result = (function () {

    return 2 + 2;

}());


// Example 7 - Another syntax when returning a value (not recommended)

var result = function () {

    return 2 + 2;

}();


// Example 8 - Yet another syntax when returning a value (not liked by JSLint)

var result = (function () {

    return 2 + 2;

})();


/* Example 9 - An immediate function can return any type, in this case, the value of res
stored in a closure */

var getResult = (function () {
    var res = 2 + 2;

    return function () {
        return res;
    };
}());


// Example 10 - Immediate functions can also be used when defining object properties

var o = {
    message: (function () {
        var who = 'me',
            what = 'call';
        return what + ' ' + who;
    }()),
    getMsg: function () {
        return this.message;
    }
};
// usage
o.getMsg(); // 'call me'
o.message; // 'call me'


// Example 11 - Defining modules

// module1 defined in module1.js
(function () {

    // all the module 1 code ...

}());

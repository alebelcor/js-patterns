/*!
 * JavaScript Patterns, by Stoyan Stefanov (O'Reilly). Copyright 2010 Yahoo!, Inc., 9780596806750.
 */

/* Init-Time Branching */

/* Example 1 - It's an optimization pattern to avoid reaching the same conclusion on conditions
that won't change */

// BEFORE
var utils = {
    addListener: function (el, type, fn) {
        if (typeof window.addEventListener === 'function') {
            el.addEventListener(type, fn, false);
        } else if (typeof document.attachEvent === 'function') { // IE
            el.attachEvent('on' + type, fn);
        } else { // older browsers
            el['on' + type] = fn;
        }
    },
    removeListener: function (el, type, fn) {
    // pretty much the same...
    }
};

// AFTER

// the interface
var utils = {
    addListener: null,
    removeListener: null
};

// the implementation
if (typeof window.addEventListener === 'function') {
    utils.addListener = function (el, type, fn) {
        el.addEventListener(type, fn, false);
    };
    utils.removeListener = function (el, type, fn) {
        el.removeEventListener(type, fn, false);
    };
} else if (typeof document.attachEvent === 'function') { // IE
    utils.addListener = function (el, type, fn) {
        el.attachEvent('on' + type, fn);
    };
    utils.removeListener = function (el, type, fn) {
        el.detachEvent('on' + type, fn);
    };
} else { // older browsers
    utils.addListener = function (el, type, fn) {
        el['on' + type] = fn;
    };
    utils.removeListener = function (el, type, fn) {
        el['on' + type] = null;
    };
}

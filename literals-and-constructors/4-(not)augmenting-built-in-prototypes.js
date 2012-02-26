/*!
 * JavaScript Patterns, by Stoyan Stefanov (O'Reilly). Copyright 2010 Yahoo!, Inc., 9780596806750.
 */

/* (Not) Augmenting Built-In Prototypes */

// Example - polyfilling missing functionality

if (typeof Object.protoype.myMethod !== 'function') {
    Object.protoype.myMethod = function () {
        // implementation...
    };
}
/*!
 * JavaScript Patterns, by Stoyan Stefanov (O'Reilly). Copyright 2010 Yahoo!, Inc., 9780596806750.
 */

/* Switch Pattern */

// Example - improved readability and robustness

var inspect_me = 0,
    result = '';

switch (inspect_me) {
case 0:
    result = 'zero';
    break;
case 1:
    result = 'one';
    break;
default:
    result = 'unknown';
}

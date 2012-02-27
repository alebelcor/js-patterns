/*!
 * JavaScript Patterns, by Stoyan Stefanov (O'Reilly). Copyright 2010 Yahoo!, Inc., 9780596806750.
 */

/* Number Conversions with parseInt() */

// Example 1 - provide the radix argument to parseInt() to avoid unexpected results

var month = '06',
    year = '09';
month = parseInt(month, 10); // 6
year = parseInt(year, 10); // 9 with radix, 0 without it


// Example 2 - alternative ways to convert a string to a number

+'08' // result is 8
Number('08') // 8

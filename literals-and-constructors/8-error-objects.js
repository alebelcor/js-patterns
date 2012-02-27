/*!
 * JavaScript Patterns, by Stoyan Stefanov (O'Reilly). Copyright 2010 Yahoo!, Inc., 9780596806750.
 */

/* Error Objects */

// Example - throwing a custom error object

try {
    // something bad happened, throw an error
    throw {
        name: 'MyErrorType', // custom error type
        message: 'oops',
        extra: 'This was rather embarrassing',
        remedy: genericErrorHandler // who should handle it
    };
} catch (e) {
    // inform the user
    alert(e.message); // 'oops'

    // gracefully handle the error
    e.remedy(); // calls genericErrorHandler()
}

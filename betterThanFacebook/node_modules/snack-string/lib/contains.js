var toString = require('./toString');

/**
 * Searches for a given substring.
 */
module.exports = function contains(string, substring, fromIndex) {
    string = toString(string);
    substring = toString(substring);
    return string.indexOf(substring, fromIndex) !== -1;
};

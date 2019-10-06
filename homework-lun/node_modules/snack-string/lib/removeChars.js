var toCharArray = require('./toCharArray');
var toString = require('./toString');

/**
 * Removes all occurrences of a character from within the source string.
 *
 * @param {string} string
 * @param {string} chars
 */
module.exports = function removeChars(string, chars) {
    string = toString(string);
    chars = toString(chars);

    if (chars.length === 0) {
        return string;
    } else if (chars.length === 1) {
        return toCharArray(string).map(function(ch) {
            return (ch !== chars) ? ch : null;
        }).join('');
    } else {
        return toCharArray(string).map(function(ch) {
            return (chars.indexOf(ch) === -1) ? ch : null;
        }).join('');
    }
};

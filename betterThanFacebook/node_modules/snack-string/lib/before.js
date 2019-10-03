var toString = require('./toString');

/**
 * Gets the substring before the first occurrence of a separator.
 *
 * @static
 * @param {string} string - the String to get a substring from, may be null
 * @param {string} separator - the String to search for, may be null
 * @returns {string} the substring before the first occurrence of the separator, null if null String input
 *
 * @example
 *
 * equal(before(null, '*')    , '');
 * equal(before('', '*')      , '');
 * equal(before('abc', 'a')   , '');
 * equal(before('abcba', 'b') , 'a');
 * equal(before('abc', 'c')   , 'ab');
 * equal(before('abc', 'd')   , 'abc');
 * equal(before('abc', '')    , '');
 * equal(before('abc', null)  , 'abc');
 */
module.exports = function before(string, separator) {
    string = toString(string);
    var pos = string.indexOf(separator);
    if (pos !== -1) {
        return string.substring(0, pos);
    }
    return string;
};

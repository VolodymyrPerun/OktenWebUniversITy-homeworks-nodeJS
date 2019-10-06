var toString = require('./toString');

/**
 * Gets the substring before the last occurrence of a separator.
 *
 * @static
 * @param {string} string - the String to get a substring from, may be null
 * @param {string} separator - the String to search for, may be null
 * @returns {string} the substring before the last occurrence of the separator, null if null String input
 *
 * @example
 *
 * equal(beforeLast(null, '*')    , '');
 * equal(beforeLast('', '*')      , '');
 * equal(beforeLast('abc', 'a')   , '');
 * equal(beforeLast('abcba', 'b') , 'abc');
 * equal(beforeLast('abc', 'c')   , 'ab');
 * equal(beforeLast('abc', 'd')   , 'abc');
 * equal(beforeLast('abc', '')    , 'abc');
 * equal(beforeLast('abc', null)  , 'abc');
 */
module.exports = function beforeLast(string, separator) {
    string = toString(string);
    var pos = string.lastIndexOf(separator);
    if (pos !== -1) {
        return string.substring(0, pos);
    }
    return string;
};

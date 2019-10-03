var toString = require('./toString');

/**
 * Gets the substring after the last occurrence of a separator.
 *
 * @static
 * @param {string} string - the String to get a substring from, may be null
 * @param {string} separator - the String to search for, may be null
 * @returns {string} the substring after the last occurrence of the separator, null if null String input
 *
 * @example
 *
 * equal(afterLast(null, '*')    , '');
 * equal(afterLast('', '*')      , '');
 * equal(afterLast('*', null)    , '');
 * equal(afterLast('abc', 'a')   , 'bc');
 * equal(afterLast('abcba', 'b') , 'a');
 * equal(afterLast('abc', 'c')   , '');
 * equal(afterLast('abc', 'd')   , '');
 * equal(afterLast('abc', '')    , '');
 */
module.exports = function afterLast(string, separator) {
    string = toString(string);
    var pos = string.lastIndexOf(separator);
    if (pos !== -1) {
        return string.substring(pos + separator.length);
    }
    return '';
};

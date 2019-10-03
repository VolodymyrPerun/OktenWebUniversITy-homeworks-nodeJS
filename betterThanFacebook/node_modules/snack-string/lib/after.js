var toString = require('./toString');

/**
 * Gets the substring after the first occurrence of a separator.
 *
 * @static
 * @param {string} string - the String to get a substring from, may be null
 * @param {string} separator - the String to search for, may be null
 * @returns {string} the substring after the first occurrence of the separator, null if null String input
 *
 * @example
 *
 * equal(after(null, '*')    , '');
 * equal(after('', '*')      , '');
 * equal(after('*', null)    , '');
 * equal(after('abc', 'a')   , 'bc');
 * equal(after('abcba', 'b') , 'cba');
 * equal(after('abc', 'c')   , '');
 * equal(after('abc', 'd')   , '');
 * equal(after('abc', '')    , 'abc');
 */
module.exports = function after(string, separator) {
    string = toString(string);
    var pos = string.indexOf(separator);
    if (pos !== -1) {
        return string.substring(pos + separator.length);
    }
    return '';
};

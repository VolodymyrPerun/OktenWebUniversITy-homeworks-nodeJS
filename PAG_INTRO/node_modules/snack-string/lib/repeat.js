/**
 * Repeats the given string n times.
 *
 * @param {string} string
 * @param {number} count
 * @param {string} [separator='']
 */
module.exports = function repeat(string, count, separator) {
    separator = separator || '';

    var s = [];
    for (var i = 0; i < count; i++) {
        s.push(string);
    }
    return s.join(separator);
};

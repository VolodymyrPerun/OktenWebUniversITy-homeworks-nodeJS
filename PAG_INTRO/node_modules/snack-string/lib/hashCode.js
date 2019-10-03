var toString = require('./toString');

/**
 * Returns a hash code for this string.
 */
module.exports = function hashCode(s) {
    s = toString(s);

    /* jshint bitwise: false */
    for (var h = 0, i = 0; i < s.length; h &= h) {
        h = ((h << 5) - h) + s.charCodeAt(i++);
    }
    return h;
};

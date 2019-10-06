var pad = require('./pad');

/**
 * Pads string on the right side if it is shorter than length.
 *
 * @param {string} string
 * @param {number} length
 * @param {char} [char=' ']
 */
module.exports = function padRight(string, length, char) {
    return pad(string, length, char, 'right');
};

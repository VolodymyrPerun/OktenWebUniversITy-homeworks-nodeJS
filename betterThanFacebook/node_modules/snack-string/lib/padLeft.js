var pad = require('./pad');

/**
 * Pads string on the left side if it is shorter than length.
 *
 * @param {string} string
 * @param {number} length
 * @param {char} [char=' ']
 */
module.exports = function padLeft(string, length, char) {
    return pad(string, length, char, 'left');
};

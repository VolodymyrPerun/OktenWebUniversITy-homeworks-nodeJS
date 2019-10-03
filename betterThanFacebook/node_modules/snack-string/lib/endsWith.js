var toString = require('./toString');

module.exports = function endsWith(string, ends, position) {
    string = toString(string);
    if (position === undefined || position === null) {
        position = string.length - ends.length;
    } else {
        position = Math.min(position, string.length) - ends.length;
    }
    return position >= 0 && string.lastIndexOf(ends, position) === position;
};

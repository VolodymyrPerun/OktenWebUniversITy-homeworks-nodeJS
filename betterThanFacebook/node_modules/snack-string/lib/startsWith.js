var toString = require('./toString');

module.exports = function startsWith(string, starts, position) {
    string = toString(string);
    position = Math.min(position || 0, string.length);
    return string.indexOf(starts, position) === position;
};

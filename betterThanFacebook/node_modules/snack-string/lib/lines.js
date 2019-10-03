var toString = require('./toString');

module.exports = function lines(string) {
    string = toString(string);
    if (string.length === 0) {
        return [];
    }
    return string.split(/\r?\n|\r/);
};

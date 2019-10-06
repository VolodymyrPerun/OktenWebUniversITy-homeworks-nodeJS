var startsWith = require('./startsWith');
var toString = require('./toString');

module.exports = function addStart(string, prefix) {
    string = toString(string);
    prefix = toString(prefix);
    if (startsWith(string, prefix)) {
        return string;
    } else {
        return prefix + string;
    }
};

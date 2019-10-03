var endsWith = require('./endsWith');
var toString = require('./toString');

module.exports = function removeEnd(string, suffix) {
    string = toString(string);
    suffix = toString(suffix);
    if (endsWith(string, suffix)) {
        return string.substring(0, string.length - suffix.length);
    } else {
        return string;
    }
};

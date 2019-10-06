var toString = require('./toString');

/**
 * @param {string} string
 */
module.exports = function dasherize(string) {
    string = toString(string).trim();
    string = string.replace(/([A-Z])/g, '-$1');
    string = string.replace(/[-_\s]+/g, '-');
    string = string.replace(/^[-]|[-]$/, '');
    return string.toLowerCase();
};

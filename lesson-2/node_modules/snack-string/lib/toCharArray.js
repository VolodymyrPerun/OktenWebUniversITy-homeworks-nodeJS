var toString = require('./toString');

module.exports = function toCharArray(string) {
    return toString(string).split('');
};

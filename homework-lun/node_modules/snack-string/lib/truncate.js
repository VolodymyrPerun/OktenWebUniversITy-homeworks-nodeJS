var toString = require('./toString');

module.exports = function truncate(string, length, truncateStr) {
    string = toString(string);
    truncateStr = truncateStr || '...';
    return string.length > length ? string.substring(0, length) + truncateStr : string;
};

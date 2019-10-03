var toString = require('./toString');

var escapeChars = {
    'lt': '<',
    'gt': '>',
    'amp': '&',
    'quot': '"',
    'apos': '\'',
    'nbsp': ' '
};

module.exports = function unescapeHTML(string) {
    string = toString(string);
    return string.replace(/\&([^;]+);/g, function(entity, entityCode) {
        if (entityCode in escapeChars) {
            return escapeChars[entityCode];
        }

        var match = entityCode.match(/^#x([\da-fA-F]+)$/);
        if (match) {
            return String.fromCharCode(parseInt(match[1], 16));
        }

        match = entityCode.match(/^#(\d+)$/);
        if (match) {
            return String.fromCharCode(Number(match[1]));
        }

        return entity;
    });
};

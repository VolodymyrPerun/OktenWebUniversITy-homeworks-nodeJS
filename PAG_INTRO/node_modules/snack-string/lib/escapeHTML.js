var toString = require('./toString');

var reversedEscapeChars = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
    '\'': '&apos;',
    ' ': '&nbsp;'
};

module.exports = function escapeHTML(string) {
    string = toString(string);
    return string.replace(/[&<>"' ]/g, function(m) {
        return reversedEscapeChars[m];
    });
};

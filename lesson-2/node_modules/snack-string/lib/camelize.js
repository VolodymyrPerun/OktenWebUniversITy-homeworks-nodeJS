var capitalize = require('./capitalize');
var decapitalize = require('./decapitalize');
var toString = require('./toString');

/**
 * @param {string} string
 * @param {boolean} [toCapitalize=false]
 */
module.exports = function camelize(string, toCapitalize) {
    string = toString(string).toLowerCase();
    string = string.replace(/[-_\s]+(.)?/g, function(match, c) {
        return c ? c.toUpperCase() : '';
    });

    if (toCapitalize === true) {
        return capitalize(string);
    } else {
        return decapitalize(string);
    }
};

var toString = require('./toString');

var SIMPLE_SYNTAX = /\{(\s*\w+\s*)\}/g; // {name}
var MUSTACHE_SYNTAX = /\{\{(\s*\w+\s*)\}\}/g; // {{name}}
var SCRIPT_SYNTAX = /<%(\s*\w+\s*)%>/g; // <%name%>
var NAMED_PARAM_SYNTAX = /:(\w+)/g; // :name

/**
 * String interpolation.
 */
module.exports = function interpolate(template, context, syntax) {
    template = toString(template);
    context = context || {};
    var replaceFn = function(match, prop) {
        prop = prop.trim();
        return toString(context[prop]);
    };
    return template.replace(syntax || MUSTACHE_SYNTAX, replaceFn);
};

module.exports.SIMPLE_SYNTAX = SIMPLE_SYNTAX;
module.exports.MUSTACHE_SYNTAX = MUSTACHE_SYNTAX;
module.exports.SCRIPT_SYNTAX = SCRIPT_SYNTAX;
module.exports.NAMED_PARAM_SYNTAX = NAMED_PARAM_SYNTAX;

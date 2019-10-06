/**
 * @example
 *
 * var template = require('./template');
 * var templateString = 'name={{user.name}}, date={{ new Date() }}';
 * var model = {
 *     user: {
 *         name: 'sub'
 *     }
 * };
 * console.log(template(templateString, model); // name=sub, date=2015-02-13 12:00:00
 *
 * // compile & render
 * var compiled = template.compile(templateString);
 * console.log(compiled(model); // name=sub, date=2015-02-13 12:00:00
 *
 * var compiled = template.compile(templateString, template.syntax('<%', '%>'));
 * ...
 */

/**
 * Render a template string using given data.
 *
 * @param {string} templateString
 * @param {object} data
 * @param {regexp} [syntax] - see template.syntax()
 * @return {string} result
 */
function template(templateString, data, syntax) {
    return template.compile(templateString, syntax)(data);
}

/**
 * Create teplate syntax regexp with given prefix and suffix.
 */
template.syntax = function syntax(prefix, suffix) {
    var ESCAPE_CHARS_REGEXP = /[\-|\\{}()\[\]\^$+*?.]/g;
    prefix = prefix.replace(ESCAPE_CHARS_REGEXP, '\\$&');
    suffix = suffix.replace(ESCAPE_CHARS_REGEXP, '\\$&');
    return new RegExp(prefix + '(.+?)' + suffix, 'g');
};

/**
 * default syntax regexp object.
 */
template.syntax.defaults = template.syntax('{{', '}}');

/**
 * Compile a template string as template render function.
 *
 * @param {string} templateString
 * @param {regexp} [syntax] - see template.syntax()
 * @return {function(data)} a template render function
 */
template.compile = function compile(templateString, syntax) {
    // generate source
    var s = [];
    var index = 0;
    templateString = templateString || '';
    syntax = syntax || template.syntax.defaults;

    templateString.replace(syntax, function(match, $1, offset) {
        if (index < offset) {
            s.push(JSON.stringify(templateString.slice(index, offset)));
        }
        s.push('(' + $1 + ').toString()');
        index = offset + match.length;
    });
    if (index < templateString.length) {
        s.push(JSON.stringify(templateString.slice(index)));
    }

    // create render function
    var source = 'with($$obj || {}) { return ' + (s.join('+') || '""') + '; }';
    // add //@sourceURLs for easier debugging.
    // see http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl
    template.compile.index = (template.compile.index || 0) + 1;
    source = source + '\n//# sourceURL=/snack/templates/generated-' + (template.compile.index) + '.js';
    try {
        /* jshint evil: true */
        return new Function('$$obj', source).bind(this);
    } catch (e) {
        e.source = source;
        console.error('template compile error: %s', e);
        throw e;
    }
};

// exports
module.exports = template;

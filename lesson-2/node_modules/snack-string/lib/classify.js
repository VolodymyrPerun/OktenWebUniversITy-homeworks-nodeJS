var camelize = require('./camelize');
var toString = require('./toString');

/**
 * @example
 *
 * equal(classify(null),                       '');
 * equal(classify(''),                         '');
 * equal(classify('some_class_name'),          'SomeClassName');
 * equal(classify('my wonderfull class_name'), 'MyWonderfullClassName');
 * equal(classify('my wonderfull.class.name'), 'MyWonderfullClassName');
 * equal(classify('myLittleCamel'),            'MyLittleCamel');
 * equal(classify('myLittleCamel.class.name'), 'MyLittleCamelClassName');
 * equal(classify(123),                        '123');
 */
module.exports = function classify(string) {
    string = toString(string);
    string = string.replace(/[\W_]/g, ' ');
    string = string.replace(/([A-Z])/g, ' $1');
    return camelize(string, true);
};

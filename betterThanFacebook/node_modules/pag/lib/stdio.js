var util = require('util');

var stdio = module.exports = {};

// constant
stdio.DEBUG = 0;
stdio.INFO = 1;
stdio.WARN = 2;
stdio.ERROR = 3;

// current level
stdio.level = stdio.INFO;

stdio.write = function() {
    if (stdio.level <= stdio.INFO) {
        process.stdout.write(util.format.apply(util, arguments));
    }
};

stdio.debug = function() {
    if (stdio.level <= stdio.DEBUG) {
        process.stderr.write(util.format.apply(util, arguments) + '\n');
    }
};

stdio.info = function() {
    if (stdio.level <= stdio.INFO) {
        process.stderr.write(util.format.apply(util, arguments) + '\n');
    }
};

stdio.warn = function() {
    if (stdio.level <= stdio.WARN) {
        process.stderr.write(util.format.apply(util, arguments) + '\n');
    }
};

stdio.error = function() {
    if (stdio.level <= stdio.ERROR) {
        process.stderr.write(util.format.apply(util, arguments) + '\n');
    }
};

stdio.readline = function(callback, thisArg) {
    process.stdin.setEncoding('utf8');
    process.stdin.once('data', function(data) {
        callback.call(thisArg, data.toString().trim());
    }).resume();
};

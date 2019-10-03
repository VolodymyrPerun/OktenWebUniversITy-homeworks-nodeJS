var FORMAT_REGEXP = /%[sdj%]/g;

// see util.format in node.js
module.exports = function format(message) {
    if (message == null) {
        return '';
    }

    var args = arguments;

    if (typeof message !== 'string') {
        var objects = [];
        for (var i = 0; i < args.length; i++) {
            objects.push(JSON.stringify(args[i]));
        }
        return objects.join(' ');
    }

    var n = 1;
    var len = args.length;
    var str = String(message).replace(FORMAT_REGEXP, function(x) {
        if (x === '%%') {
            return '%';
        }
        if (n >= len) {
            return x;
        }
        switch (x) {
            case '%s':
                return String(args[n++]);
            case '%d':
                return Number(args[n++]);
            case '%j':
                try {
                    return JSON.stringify(args[n++]);
                } catch (e) {
                    return '[Circular]';
                }
                return; // skip jshint error
            default:
                return x;
        }
    });

    // append unformatted args
    for (var x = args[n]; n < len; x = args[++n]) {
        if (x === null || typeof x !== 'object') {
            str += ' ' + x;
        } else {
            str += ' ' + JSON.stringify(x);
        }
    }

    return str;
};

var defaults = require('lodash').defaults;

var defaultOptions = {
    times: 5,
    delay: 0
};

/**
 * @param {object} [options]
 * @param {function(callback, err, results)} task
 * @param {function(err, results)} callback
 * @param {object} [thisArg]
 *
 * @example
 * function download(url, filename, callback) {
 *     retry({
 *        times: 5,
 *        delay: 0,
 *     }, function(callback, results) {
 *         ...
 *         callback(err, [url, body]);
 *         ...
 *     }, function(err, results) {
 *         ...
 *     });
 * }
 */
module.exports = function retry(options, task, callback, thisArg) {
    if (typeof options === 'function') {
        thisArg = callback;
        callback = task;
        task = options;
        options = {};
    }

    options = defaults(options, defaultOptions);

    var count = 1;
    var done = function(err, results) {
        if (err) {
            if (count >= options.times) {
                callback.call(thisArg, err, results);
            } else {
                setTimeout(function() {
                    count++;
                    task.call(thisArg, done, err, results);
                }, options.delay);
            }
        } else {
            callback.call(thisArg, null, results);
        }
    };

    task.call(thisArg, done, null, null);
};

var randomString = require('./randomString');

var BASE62_CHARS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

module.exports = function randomBase62(length) {
    return randomString(length, BASE62_CHARS);
};

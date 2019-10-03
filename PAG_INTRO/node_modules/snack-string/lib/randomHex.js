var randomString = require('./randomString');

module.exports = function randomHex(length) {
    return randomString(length, '0123456789abcdef');
};

var randomString = require('./randomString');

module.exports = function randomNumber(length) {
    return randomString(length, '0123456789');
};
